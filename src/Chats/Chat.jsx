import styled from "styled-components";
import User2 from "../Resources/Images/userst.jpg";
import User3 from "../Resources/Images/userst2.jpg";
import User5 from "../Resources/Images/userst5.jpg";
import { RiFileTextFill } from "react-icons/ri";
import { RiImageFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LineWave } from "react-loader-spinner";
import {
    getDoc, setDoc, doc, updateDoc, serverTimestamp, onSnapshot
} from "firebase/firestore";
import { db } from "../config/firebase/firebase";
import { useAuthContext } from "../Context/Auth";
import { useEffect } from "react";
import { useChatContext } from "../Context/ChatContext";

const Container = styled.div`
  .general {
    :active {
      background-color: ${(props) => props.theme.search};
    }
    a {
      text-decoration: none;
    }
    .main {
      display: flex;
      margin-left: 10px;
      margin-right: 10px;
      justify-content: space-between;
      border-radius: 7px;

      cursor: pointer;
      &:hover {
        transition: 0.2s ease-in-out;
        background-color: ${(props) => props.theme.search};
      }

      padding: 5px 14px 13px 14px;

      .user {
        display: flex;
        align-items: center;
        gap: 10px;

        .imgonline {
          display: flex;
          position: relative;
        }
        img {
          margin-top: 10px;
          object-fit: cover;
          height: 36px;

          width: 36px;
          border-radius: 50%;
        }
        .imgonline::after {
          content: "";

          width: 7px;
          height: 7px;
          top: 32px;
          right: -2.5px;

          border: 1.8px solid ${(props) => props.theme.online};
          border-radius: 50%;
          background: #06d59f;
          position: absolute;
        }
        .username {
          margin-top: -10px;
          .name {
            h5 {
              font-size: 15px;
              color: ${(props) => props.theme.text};
              font-weight: 600;
            }
          }
          .lstmsg {
            margin-top: -20px;
            line-height: 19px;
            color: ${(props) => props.theme.iconcolor};
            width: 250px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            span {
              font-size: 14px;
            }
            p {
              color: #7269ef;
              margin-top: 0px;
              margin-bottom: 0px;
              font-weight: 500;
              font-size: 13px;
              padding-bottom: -5px;
              display: flex;
              align-items: center;
              .animate-typing {
                gap: 10px;
                .dot {
                  -webkit-animation: wave 1.3s linear infinite;
                  animation: wave 1.3s linear infinite;

                  /* background: #fff; */
                  border-radius: 50%;
                  display: inline-block;
                  gap: 5px;
                  height: 4px;
                  margin-right: -1px;
                  opacity: 0.6;
                  width: 4px;
                  background: #7269ef;
                }
                @keyframes wave {
                  0%,
                  60%,
                  to {
                    -webkit-transform: initial;
                    transform: none;
                    -webkit-transform: none;
                  }

                  30% {
                    -webkit-transform: translateY(-5px);
                    transform: translateY(-5px);
                  }
                }
                .dot:nth-child(2) {
                  animation-delay: -1.1s;
                }
                .dot:nth-child(3) {
                  animation-delay: -0.9s;
                }

                .ms-1 {
                  margin-left: 0.25rem !important;
                }
              }
            }
          }
          .sub {
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: visible;
            .sec1 {
              display: flex;
              align-items: center;
              gap: 5px;
              span {
                margin-top: -4px;
              }
            }
            .sec2 {
              margin-right: -25px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: ${(props) => props.theme.newmsg};
              padding: 1px 8px;
              border-radius: 20px;
              span {
                text-align: center;
                font-size: 10px;
                font-weight: 700;
                color: #cf4467;
              }
            }
          }
        }
      }
      .time {
        margin-top: 10px;
        span {
          font-size: 12px;
          font-weight: 600;
          color: ${(props) => props.theme.iconcolor};
        }
      }
    }
  }
`;

const Chat = ({ User, loading }) => {
  const [chatopen, setChatopen] = useState(false);
  const { currentUser } = useAuthContext();
  const {dispatch,data} = useChatContext()
  const [chat,setChat]= useState([])

  useEffect(()=>{
  const Getchats = ()=>{
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChat(doc.data())
      
    });

    return ()=>{
        unsub()
    }
  }
  currentUser.uid && Getchats()
  },[currentUser.uid])
  const Handlechoose = async () => {
    const CombinedId =
      currentUser.uid > User.uid
        ? currentUser.uid + User.uid
        : User.uid + currentUser.uid;
        console.log(CombinedId);
      
        try {
            
            const res = await getDoc(doc(db, "chats", CombinedId));
            if(!res.exists()){
                await setDoc(doc(db, "chats", CombinedId),{
                    messages:[]
                })
                await updateDoc(doc(db, "userChats", currentUser.uid),{
                    [CombinedId+ ".userInfo"]: {
                        displayName: User.displayName,
                        photoURL: User.photoURL,
                        uid: User.uid,
                    },
                    [CombinedId+ ".Date"]: serverTimestamp()
                })
                await updateDoc(doc(db, "userChats", User.uid),{
                    [CombinedId+ ".userInfo"]: {
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                        uid: currentUser.uid,
                    },
                    [CombinedId+ ".Date"]: serverTimestamp()
                })
            }
        } catch (error) {
            console.log(error);
        }
  };

console.log(chat);
  const Handleselect = (u)=>{
    dispatch({type: "CHANGE_USER",payload: u})
  }
 
  return (
    <Container>
      <div className="general">
      
          {User ? (
 
            
            <div className="main" onClick={()=>{Handlechoose()}}>
              <div className="user">
                <div className="imgonline">
                  <img src={User.photoURL} alt="" />
                </div>
                <div className="username">
                  <div className="name">
                    <h5>{User.displayName}</h5>
                  </div>
                  <div className="lstmsg">
                    <span>ok sure😀👍</span>
                  </div>
                </div>
              </div>
              <div className="time">
                <span>00:26</span>
              </div>
            </div>
    
          ) : (
            <>
            
            <button className="bg-[red]">hello world</button>

            <span className="text-3xl font-bold underline text-gray-50">user not found</span>
            </>
          )}
  
{/* 
        <div className="main">
                    <div className="user">
                        <div className="imgonline">
                            <img src={User5} alt="" />
                        </div>
                        <div className="username">
                            <div className="name">
                                <h5>Mark Messer</h5>
                            </div>
                            <div className="lstmsg sub">
                                <div className="sec1">
                                    <div className="icon">
                                        <RiImageFill />
                                    </div>
                                    <span>Images</span>
                                </div>
                                <div className="sec2"><span>2</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <span>00:26</span>
                    </div>
                </div>
                <div className="main">
                    <div className="user">
                        <div className="imgonline">
                            <img src={User2} alt="" />
                        </div>
                        <div className="username">
                            <div className="name">
                                <h5>Patrick Hendrick</h5>
                            </div>
                            <div className="lstmsg">
                                <p>typing

                                    <span className="animate-typing">
                                        <span className="dot ms-1">
                                        </span>
                                        <span className="dot ms-1">
                                            
                                        </span>
                                        <span className="dot ms-1">
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <span>00:26</span>
                    </div>
                </div>
                <div className="main">
                    <div className="user">
                        <div className="imgonline">
                            <img src={User3} alt="" />
                        </div>
                        <div className="username">
                            <div className="name">
                                <h5>Doris Brown</h5>
                            </div>
                            <div className="lstmsg sub">
                                <div className="sec1">
                                    <div className="icon">
                                        <RiFileTextFill />
                                    </div>
                                    <span>File</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <span>00:26</span>
                    </div>
                </div>
                <div className="main">
                    <div className="user">
                        <div className="imgonline">
                            <img src={User2} alt="" />
                        </div>
                        <div className="username">
                            <div className="name">
                                <h5>Patrick Hendrick</h5>
                            </div>
                            <div className="lstmsg">
                                <span>ok sure😀👍 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, aperiam.</span>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <span>00:26</span>
                    </div>
                </div>
                <div className="main">
                    <div className="user">
                        <div className="imgonline">
                            <img src={User2} alt="" />
                        </div>
                        <div className="username">
                            <div className="name">
                                <h5>Patrick Hendrick</h5>
                            </div>
                            <div className="lstmsg">
                                <span>ok sure😀👍 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, aperiam.</span>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <span>00:26</span>
                    </div>
                </div>
                <div className="main">
                    <div className="user">
                        <div className="imgonline">
                            <img src={User2} alt="" />
                        </div>
                        <div className="username">
                            <div className="name">
                                <h5>Patrick Hendrick</h5>
                            </div>
                            <div className="lstmsg">
                                <span>ok sure😀👍 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, aperiam.</span>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <span>00:26</span>
                    </div>
                </div> */}
                
                {/* <div className="main">
                    <div className="user">
                        <div className="imgonline">
                            <img src={User2} alt="" />
                        </div>
                        <div className="username">
                            <div className="name">
                                <h5>Patrick Hendrick</h5>
                            </div>
                            <div className="lstmsg">
                                <span>ok sure😀👍 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, aperiam.</span>
                            </div>
                        </div>
                    </div>
                    <div className="time">
                        <span>00:26</span>
                    </div>
                </div> */}
               
              {chat && Object.entries(chat)
  ?.filter((entry) => entry[1] != null) // Filter out entries with undefined or null values
  .sort((a, b) => b[1].date - a[1].date)
  .map((chats) => (
    <Link to={`/chatinfo/${chats && chats[0]}`} key={chats[0]}>
      <div className="main" onClick={() => Handleselect(chats[1]?.userInfo)}>
        <div className="user">
          <div className="imgonline">
            <img src={chats[1]?.userInfo?.photoURL} alt="" />
          </div> 
          <div className="username">
            <div className="name">
              <h5>{chats[1]?.userInfo?.displayName}</h5>
            </div>
            <div className="lstmsg">
              <span>{chats[1]?.lastMessage?.message}</span>
            </div>
          </div>
        </div>
        <div className="time">
          <span>00:26</span>
        </div>
      </div>
    </Link>
  ))}

<span className="text-3xl font-bold underline text-gray-50">user not found</span>
      </div>
    </Container>
  );
};

export default Chat;
