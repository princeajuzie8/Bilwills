import { RiSearchLine } from "react-icons/ri";
import styled from "styled-components"
import Slider from "react-slick";
import Usersslick from "./Userslick";
import Chat from "../Chats/Chat";
import { useEffect, useState } from "react";
import { where, query, onSnapshot,collection, getDocs, orderBy, startAt } from "firebase/firestore";
import { db } from "../config/firebase/firebase";

const Container = styled.div`
  
    main{
      .general{
        .container{
         
        section{
           
            display: flex;
            flex-direction: column;
            margin-left: 18px;
            margin-top: -18px;
       
          .sec1{

            h4{
              font-size: 25px;
              color: ${props => props.theme.text
    };
            }
          }
          .sec2{
               margin-top: -10px;
               margin-bottom: -10px;
            .maininput{
              background-color: ${props => props.theme.search};
             display: flex;
             border-radius: 5px;
             gap: 15px;
             padding: 10px 15px 10px 15px;
             input{
              outline: none;
              color: ${props => props.theme.iconcolor};
              border: none;
              width: 20.5vw;
               background-color: ${props => props.theme.search};
               &::placeholder{
                font-size: 14.5px;
                color: ${props => props.theme.iconcolor};
               }
             }
             .icon{
               font-size: 17px;
              color: ${props => props.theme.iconcolor};
             }

            }

          }
          }
          .slick{
            margin: auto;
            .gen{
            margin: auto;

               margin-left: 10px;
         }
            }
            .head{
              margin-top: -12px;
              margin-left: 20px;
              h5{
                color: ${props => props.theme.text};
                font-size: 20px;
              }
            }
            .chatgen{
                height: calc(100vh - 260px);
                margin-top: -20px;
       overflow: overlay;
         display: flex;
      flex-direction: column;
            ::-webkit-scrollbar {
        width: 5px;
        display: none;
      }
      :hover{
     
            ::-webkit-scrollbar {
        width: 5px;
            cursor: pointer;
   
        display: block;
        height: 20px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        padding-top: 30px;
        border-radius: 10px;
         display: none;
      }


      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #c1b6b69a;
        border-radius: 10px;
       height: 20px;
 display: block;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
    background: #c1b6b69a;
        width: 7px;
      }
    }
            }
          }
        }
      }
    
`


const Leftsidebar = () => {

  const [username,setUserName] = useState('')
const [User, setUser] = useState(null);
 const [err, setError]= useState(null)
const [loading,setLoading] = useState(true)
const HandleChange = (e) => {
  setUserName(e.target.value)
}

 useEffect(()=>{
const UserAvalability  = async ()=>{
  const usersRef = collection(db, "users");
  const usernameQuery = query(
    usersRef,
    where("displayName", ">=", username),
    orderBy("displayName"), // Order by displayName
    where("displayName", "<=", username + '\uf8ff'),
        startAt(username)
  );
  try {

    const unsubscribe = onSnapshot(usernameQuery, (querySnapshot) => {
      
      const SearchDelay = setTimeout(async ()=>{

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const data = doc.data()
                      
            const displayName = data.displayName.toLowerCase();
            setUser(data)
            setLoading(false)
            if (displayName.includes(username)) {
                 // console.log(doc.id, " => ", doc.data());
       
          
            }
          });
      
        }
      
        return () => {
          unsubscribe();
        clearTimeout(SearchDelay)
        };
        },300);
      })
  } catch (error) {
    console.log(error);
    setError(error)
    
  }
  
}

if(username.trim() !== ""){

  UserAvalability()
}else{
  setUser(null)
}
 },[username])


    return (
        <Container>
            <main>
                <div className="general">
                    <div className="container">
                        <section>
                            <div className="sec1">
                                <h4>Bilwills</h4>
                            </div>
                            <div className="sec2">
                                <div className="maininput">
                                    <div className="icon">
                                        <RiSearchLine />
                                    </div>

                                    <input type="search" name="" id="" placeholder="Search messages or users" onChange={HandleChange} value={username} />
                                </div>

                            </div>
                        </section>
                        <div className="slick">

                            <div className="gen">
                 
                            <Usersslick />

                            </div>
                        </div>
              <div className="head">
                  <h5>Recent</h5>
              </div>
              <div className="chatgen">

              <div className="chat">
                <Chat  User={User} loading={loading}/>
                </div>

              </div>
                    </div>
                </div>
            </main>
        </Container>
    )
}

export default Leftsidebar;
