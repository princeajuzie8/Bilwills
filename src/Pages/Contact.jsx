import Navbar from "../Components/Navbar"
import styled from "styled-components"
import { RiUserAddLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { RiSearchLine } from "react-icons/ri";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { BsThreeDotsVertical } from "react-icons/bs"
import Tooltip from "@mui/material/Tooltip";
import Fade from 'react-reveal/Fade';
import { useRef, useEffect, useState } from "react";
import {RiShareLine} from "react-icons/ri"
import { MdBlockFlipped } from "react-icons/md"
import { RiDeleteBinLine } from "react-icons/ri"
const Container = styled.div`
    main{
      display: grid;
    grid-template-columns: 0.4fr 1.9fr 4fr;
     .navbar {
      height: 100vh;
      background: ${props => props.theme.body};
    }
    .chat{
      background: ${props => props.theme.body2};
      height: 100vh;
       .chats {
      height: calc(100vh - 95vh);
/* 
      background: ${props => props.theme.body2}; */
      .sec1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px 0px 20px;
        height: 17vh;
         background: ${props => props.theme.body2};
        .head{
          h4{
            font-size: 25px;
            color: ${props => props.theme.text};
          }
        }
        .icon{
          a{
            text-decoration: none;
            color: ${props => props.theme.iconcolor};
            font-size: 18px;
          }

        }
      }
      .sec2{
        height: 8vh;
        width: auto;
         background-color: ${props => props.theme.body2};
             padding-right: 2px;
               margin-bottom: 0px;
               display: flex;
               align-items: center;
               justify-content: center;
               width: 30vw;
               padding-bottom: 10px;
            .maininput{
              background-color: ${props => props.theme.search};
             display: flex;
             align-items: center;
              margin-left: 0px;
             gap: 15px;
             padding: 10px 19px 10px 19px;
             input{
              outline: none;
              color: ${props => props.theme.iconcolor};
              border: none;
              width: 20vw;
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
          .sec{
           background: ${props => props.theme.body2};
  .sec3{
         margin-top: 20px;
       height: 73.2vh;
       overflow: overlay;
        padding: 0px;
        margin: 0;
         display: flex;
      flex-direction: column;
        ::-webkit-scrollbar {


        display: none;
      }


      :hover{
        padding: 0px;
     ::-webkit-scrollbar {
        width: 5px;
        display: block;
         overflow: overlay;
        position: fixed;
      }

      /* Track */
      ::-webkit-scrollbar-track {

          display: block;
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

          display: block;
      }
      }

      .usercont1{
        .sec1{
       h4{
        margin-left: 10px;
        color: ${props => props.theme.iconcolors};
        font-weight: 700;
       }
        }
         ul{
          li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 25px;
            margin-left: -10px;
            margin-bottom: 30px;
            cursor: pointer;
            .username{
                  color: ${props => props.theme.text};
            }
            .icon{
                  color: ${props => props.theme.iconcolor};
                  margin-right: 5px;
                  position: relative;
                       .toggless{
            position: absolute;
               right: 5px;
            /* padding-top: 30px; */
           bottom: 25px;
            padding: 10px;
             background: ${props => props.theme.body2};
          border: 1.2px solid ${props => props.theme.border};
          border-radius: 3px;
            width: 12vw;
            box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
-webkit-box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
-moz-box-shadow: -1px -1px 22px 3px rgba(0,0,0,0.23);
              ul{
              padding-right: 0px;
           
             padding: 0px;
             margin-top: 5px;
                li{
                  list-style: none;
                  padding-left: 0px;
                  margin-bottom: 0px;
              display: flex;
              align-items: center;
              width: 12vw;
              
              justify-content: space-between;
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

           
                }
                
                    li:nth-child(2){
                
                }
              }
           
           }
            }
          }
         }
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
const Contact = ({ Themetogler, theme  }) => {
  const [sub1, setSub1] = useState(false)
  const toggleRef1 = useRef(null);
  const Toggle1 = () => {
    setSub1(!sub1)
  }
  useEffect(() => {
    const Handleclickoutside1 = (event) => {
      if (toggleRef1.current && !toggleRef1.current.contains(event.target)) {
        setSub1(false);


      }
    }
    window.addEventListener('click', Handleclickoutside1);

    return () => {
      window.removeEventListener('click', Handleclickoutside1);
    };
  }, [toggleRef1])
  return (
    <Container>
      <main>
        <div className="navbar">
          <Navbar Themetogler={Themetogler} theme={theme} />
        </div>
        <div className="chat">
          <div className="chats">
            <div className="general">
              <div className="sec1">
                <div className="head">
                  <h4>Contacts</h4>
                </div>
                <div className="icon">
                  <Tooltip title="Add Contact" placement="bottom">
                    <Link to="/">

                      <RiUserAddLine />
                    </Link>
                  </Tooltip>

                </div>
              </div>
              <div className="sec2">
                <div className="maininput">
                  <div className="icon">
                    <RiSearchLine />
                  </div>

                  <input type="search" name="" id="" placeholder="Search users.." />
                </div>

              </div>
              <div className="sec">
                <div className="sec3">
                  <div className="usercont1">
                    <div className="sec1">
                      <h4>A</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="usercont1">
                    <div className="sec1">
                      <h4>B</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                    </ul>
                  </div>  <div className="usercont1">
                    <div className="sec1">
                      <h4>c</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon" ref={toggleRef1}>
                          <BsThreeDotsVertical onClick={() => { Toggle1() }} />
                          {sub1 &&

                            <Fade top>
                              <div className="toggless">
                                <ul>

                                  <li><div className="test">Share</div><div className="icons"><RiShareLine /></div></li>
                                  <li><div className="test">Block</div><div className="icons"><MdBlockFlipped /></div></li>
                                  <li><div className="test">Remove</div><div className="icons"><RiDeleteBinLine /></div></li>

                                </ul>
                              </div>
                            </Fade>


                          }
                        </div>
                      </li>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="usercont1">
                    <div className="sec1">
                      <h4>A</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="usercont1">
                    <div className="sec1">
                      <h4>A</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="usercont1">
                    <div className="sec1">
                      <h4>A</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                      <li>
                        <div className="username">
                          <span>Albert Rodarte</span>

                        </div>

                        <div className="icon">
                          <BsThreeDotsVertical />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
       
        <div className="messages">

        </div>
      </main>
    </Container>
  )
}

export default Contact
