import Navbar from "../Components/Navbar"
import styled from "styled-components"
import { HiOutlineDotsVertical } from "react-icons/hi"
import Userimg from "../Resources/Images/user.jpg"
import { RiRecordCircleFill } from 'react-icons/ri';
import AccordionWrapper from '../Context/Accordwrapper'
import AccordionItem from "../Components/AccordionItem"
import 'custom-react-accordion/dist/Accordion.css'
import { RiUser2Line } from "react-icons/ri";
import { IoMdAttach } from "react-icons/io";
import { RiDownload2Line } from "react-icons/ri"
import { BsThreeDots } from "react-icons/bs"
import { FiFileText } from "react-icons/fi";
import { RiImageFill } from "react-icons/ri"
import { useState } from "react"
import Fade from 'react-reveal/Fade';
import Dropdown from "react-dropdown-animated"
import { motion } from 'framer-motion';
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useRef } from "react"
import { useAuthContext } from "../Context/Auth";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Container = styled.div`
    main{
      display: grid;
    grid-template-columns: 0.4fr 1.9fr 4fr;
     .navbar {
      height: 100vh;
      background: ${props => props.theme.body};
    }
    .chats {
      height: 100vh;
      background: ${props => props.theme.body2};
      .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
       margin: -10px 15px 0px 15px;
        .sec1{
          h4{
            font-size: 25px;
            color: ${props => props.theme.text};
          }
        }
        .sec2{
          font-size: 20px;
           color: ${props => props.theme.iconcolor};
           cursor: pointer;
           position: relative;
           .toggle{
            position: absolute;
            right: 5px;
            padding-top: 0;
            height: 22vh;
            top: 25px;
             background: ${props => props.theme.body2};
          border: 1.2px solid ${props => props.theme.border};
          border-radius: 3px;
            width: 12vw;
box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
-webkit-box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
-moz-box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
              ul{
             padding-left: 0;
             padding-top: 0;
                li{
              
                  list-style: none;
                  padding-left: 0px;
                  margin-bottom: 5px;
                 padding: 5px 10px 5px 10px;
                     color: ${props => props.theme.iconcolor};
                    
                     font-size: 15px;
                  :hover{
                     transition: ease-out 0.3s;
                    background-color: ${props => props.theme.search};
                    color: ${props => props.theme.text};
                  }
                }
                li:nth-child(3){
           border-top: 1px solid ${props => props.theme.border};
                }
                
                    li:nth-child(1){
                   margin-top: -10px;
                }
              }
           
           }
        }
      }
      .user{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -10px;
        .secc1{
       
          img{
            height: 90px;
               border: 1px solid ${props => props.theme.border};
               padding: 2px;
            width: 90px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 0px !important;
          }
        }
        .secc2{
          margin-top: 0px;
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .li{
            margin-top: -20px;
            h5{

               color: ${props => props.theme.text};
               font-size: 20px;
            }
             .li2{
            display: flex;
            align-items: center;
            justify-content: center;
             margin-top: -20px;
             gap: 5px;
            .icon{
              font-size: 11px !important;
              color: #06D69F;
            }
            .sv{
              margin-top: -5px;
              span{

                 color: ${props => props.theme.iconcolor};
                
              }
            }
          }
          }
         
        }
      }
      .line{
        border: 1px solid ${props => props.theme.border} ;
        margin-bottom: 15px;
      }
      .About{
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: row;
        span{
          text-align: center;
           color: ${props => props.theme.iconcolor};
          width: 27vw;
          text-align: start;
        }
      }
      .mainAbout{
        height: 35vh;
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
        display: block;
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
 display: block;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
    background: #c1b6b69a;
        width: 7px;
      }
      }
    
   .sec1{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
 .plus {
     color: ${props => props.theme.text};
  font-size: 16px !important;
  transform: rotate(180deg);
  transition-timing-function: ease-in;
  transition: all 2s;
}
.minus{
      color: ${props => props.theme.text};
  font-size: 16px !important;
  transform: rotate(90deg);
  transition-timing-function: ease-in;
  transition: all 2s;
}
button {
  position: relative;
  display: flex;
  align-items: center;
     background: ${props => props.theme.body};
   border-radius: 5px 5px 0px 0px;
  border: none;
  height: 5vh;
  font-size: 1.2rem;
  width: 27vw;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 25px 1em 25px 1em;
}
button:hover{
  cursor: pointer;
     background: ${props => props.theme.body};
     outline: none;
     border-color:  ${props => props.theme.body};
}
button.active{
    cursor: pointer;
     background: ${props => props.theme.body};
     outline: none;
     border-color:  ${props => props.theme.body};
}
.panel-open {
  overflow: hidden;
  background: ${props => props.theme.body3};
  padding: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  border-radius: 0px;
  opacity:1;
  width:100%;
  height: auto;
  transition-timing-function: ease-in;
  transition: all 0.3s;
}
.panel-close { 
 background: ${props => props.theme.body3};
  box-sizing: border-box;
  padding: 0.5rem 1rem 0 1rem;
  opacity:0;
  width:100%;
  height:0;
  overflow: hidden;
  transition-timing-function: ease-out;
  transition: all 0.3s;
}
   }

   .general{
    display: flex;
    align-items: center;

    gap: 5px;
    .ic{
      font-weight: bolder;
      font-size: 15px !important;
        color: ${props => props.theme.text};
    }
    .sec{
        margin-bottom: 5px;
      span{
      
         font-size: 14px !important;
 color: ${props => props.theme.text};
      }
    }
   }
   .gent{
  .Main{
        margin-bottom: 10px;
      border: 1px solid ${props => props.theme.border};
      border-radius: 5px;
        padding: 10px 8px 10px 8px;
        margin-left: 2px;
        width: 93%;
       .file{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .sub{
          display: flex;
          align-items: center;
           gap: 10px;
   .iconss{
             padding: 18px 16px 18px 16px;
             background-color: #7269ef3d;
             border-radius: 8px;
            .sec1{
          color: #7269ef;
           font-size: 20px;
        }
        }
        .sec2{
            h4{
              margin-top: -5px;
              font-size: 14px;
     color: ${props => props.theme.text};
     margin-bottom: -1px;
            }
            span{
              font-size: 13px;
             color: ${({ theme }) => theme.iconcolor};
            }
        }
        }
     
        .sub2{
           display: flex;
          align-items: center;
          gap: 10px;
 
         .sec3{
          font-size: 18px;
             color: ${({ theme }) => theme.iconcolor};
             cursor: pointer;
        }
        .sec4{
             color: ${({ theme }) => theme.iconcolor};
              font-size: 18px;
              position: relative;
               cursor: pointer;
                .toggles{
            position: absolute;
            right: 5px;
            padding-top: 0;
            /* padding-top: 30px; */
           bottom: 20px;
       box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
-webkit-box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
-moz-box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
             background: ${props => props.theme.body2};
          border: 1.2px solid ${props => props.theme.border};
          border-radius: 3px;
            width: 12vw;
              ul{
            
             margin-top: 5px;
                li{
                  list-style: none;
                  padding-left: 0px;
                  margin-bottom: 0px;
                  
                 padding: 5px 10px 5px 10px;
                     color: ${props => props.theme.iconcolor};
                    
                     font-size: 15px;
                  :hover{
                     transition: ease-out 0.3s;
                    background-color: ${props => props.theme.search};
                    color: ${props => props.theme.text};
                  }
                }
                li:nth-child(3){
           border-top: 1px solid ${props => props.theme.border};
           
                }
                
                    li:nth-child(1){
                
                
                }
              }
           
           }
        }
        }

        
       }
    }
   }
  
   ul{
     margin-top: -30px;
     margin-left: -40px;
    li{
      list-style: none;
      text-decoration: none;
     
      h4{
      color: ${({ theme }) => theme.iconcolor};
      margin-bottom: 0px;
      font-size: 14px;
      font-weight: 400;
      }
      span{
          color: ${props => props.theme.text};
          font-family: Public Sans,sans-serif;
    font-weight: 600 !important;
      }
    }
   }
      }
    }
    .messages {
      height: 100vh;
      background: ${props => props.theme.body3};
    }


    }
`
const Profile = ({ Themetogler, theme }) => {
const {userInfo,currentUser, loading,logOut} = useAuthContext()
  const [sub, setSub] = useState(false)
  const [sub1, setSub1] = useState(false)
  const {userdata} = useSelector((state)=> state.user)
  const {Authcurrent} = useSelector((state)=> state.auth)

  const Toggle = () => {
    setSub(!sub)
  }
  const Toggle1 = () => {
    setSub1(!sub1)
  }
  console.log(currentUser)
  const toggleRef = useRef(null);
  useEffect(() => {
    const Handleclickoutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setSub1(false);

      }
    }
    window.addEventListener('click', Handleclickoutside);

    return () => {
      window.removeEventListener('click', Handleclickoutside);
    };
  }, [toggleRef])

  const toggleRef1 = useRef(null);
  useEffect(() => {
    const Handleclickoutside1 = (event) => {
      if (toggleRef1.current && !toggleRef1.current.contains(event.target)) {
        setSub(false);


      }
    }
    window.addEventListener('click', Handleclickoutside1);

    return () => {
      window.removeEventListener('click', Handleclickoutside1);
    };
  }, [toggleRef1])

  
 
  return (
    <Container >

      <main >
        <div className="navbar">
          <Navbar Themetogler={Themetogler} theme={theme} />
        </div>
        <div className="chats">
          <div className="head">
            <div className="sec1">
              <h4>My Profile</h4>
            </div>

            <div className="sec2" ref={toggleRef1}>
              <HiOutlineDotsVertical onClick={() => { Toggle() }} className="secc" />
              {sub &&

                <Fade top>
                  <div className="toggle">
                    <ul>

                      <li>Edit</li>
                      <li>Action</li>
                      <li>Another Action</li>
                    </ul>
                  </div>
                </Fade>


              }

            </div>

          </div>
          <div className="user">
            <div className="secc1">
              {loading ? 
                  <Skeleton
                  circle
                  height={92}
                  containerClassName="avatar-skeleton"
                  width={92}
              />
            :  <img src={ userInfo && userInfo.photoURL} alt="" />  }
      
         
            </div>
            <div className="secc2">
              <div className="li">
               
                   <h5>  {loading ? <Skeleton width={120} /> : userInfo &&  userInfo.displayName}</h5> 
                <div className="li2">
                  <div className="icon">
                    <RiRecordCircleFill />
                  </div>
                  <div className="sv">
                    <span>Active</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="line">

          </div>
          <div className="About">
            <span>
              If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
            </span>
          </div>
          <div className="mainAbout">
            <div className="sec1">
              <AccordionWrapper>
                <AccordionItem index={0} title={[
                  <div className="general">
                    <div className="ic">
                      <RiUser2Line />
                    </div>
                    <div className="sec">
                      <span>About</span>
                    </div>
                  </div>
                ]} description={[
                  <ul>
                    <li>
                      <h4>Name</h4>
                      <span>{userInfo.displayName}</span>
                    </li>
                    <li>
                      <h4>Email</h4>
                      <span>{loading ? <Skeleton width={200} /> : userInfo.email === null ?  `example@gmail.com` : userInfo.email}</span>
                    </li>
                    <li>
                      <h4>createdAt</h4>
                      <span>{loading ? <Skeleton width={90} /> : userInfo.createdAt}</span>
                    </li>
                    <li>
                      <h4>Location</h4>
                      <span>California, USA</span>
                    </li>
                  </ul>
                ]}>

                </AccordionItem>
                <AccordionItem index={2} title={[
                  <div className="general">
                    <div className="ic">
                      <IoMdAttach />
                    </div>
                    <div className="sec">
                      <span>Attached Files</span>
                    </div>
                  </div>
                ]} description={[
                  <div className="gent">
                    <div className="Main">
                      <div className="file">
                        <div className="sub">
                          <div className="iconss">
                            <div className="sec1">
                              <FiFileText />
                            </div>
                          </div>

                          <div className="sec2">
                            <h4>Admin-A.zip</h4>
                            <span>12.5 MB</span>
                          </div>
                        </div>
                        <div className="sub2">
                          <div className="sec3">
                            <RiDownload2Line />
                          </div>
                          <div className="sec4">
                            <BsThreeDots />


                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="Main">
                      <div className="file">
                        <div className="sub">
                          <div className="iconss">
                            <div className="sec1">
                              <RiImageFill />
                            </div>
                          </div>

                          <div className="sec2">
                            <h4>Admin-A.zip</h4>
                            <span>12.5 MB</span>
                          </div>
                        </div>
                        <div className="sub2">
                          <div className="sec3">
                            <RiDownload2Line />
                          </div>
                          <div className="sec4" ref={toggleRef}>
                            <BsThreeDots onClick={() => { Toggle1() }} />
                            {sub1 &&

                              <Fade top>
                                <div className="toggles">
                                  <ul>

                                    <li>Action</li>
                                    <li>Another Action</li>
                                    <li>Delete</li>
                                  </ul>
                                </div>
                              </Fade>


                            }
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                ]} />
              </AccordionWrapper>
              <button onClick={logOut}>logout</button>
            </div>

          </div>

        </div>
        <div className="messages">

        </div>
      </main>
    </Container>
  )
}

export default Profile
