import styled from "styled-components"
import User2 from "../Resources/Images/userst.jpg";
import User3 from "../Resources/Images/userst2.jpg";
import User5 from "../Resources/Images/userst5.jpg";
import { RiFileTextFill } from "react-icons/ri";
import { RiImageFill } from "react-icons/ri"
import { Link } from "react-router-dom";
import { useState } from "react";
const Container = styled.div`
    
    .general{


    
            :active{
                  background-color: ${props => props.theme.search};

            }
            a{
                text-decoration: none;
            }
        .main{
             display: flex;
             margin-left: 10px;
             margin-right: 10px;
               justify-content: space-between;
               border-radius: 7px;
           
               cursor: pointer;
               &:hover{
                transition: 0.2s ease-in-out;
                   background-color: ${props => props.theme.search};
                   
               }
           
                  padding: 5px 14px 13px 14px;
             
            .user{
              display: flex;
              align-items: center;
              gap: 10px;
        
                    .imgonline {
        display: flex;
        position: relative;
      }
                  img{
                    margin-top: 10px;
                     object-fit: cover;
                      height: 36px;
                    
                      width: 36px;
                      border-radius: 50%;
               
            }
  .imgonline::after {
        content: '';

         width: 7px;
        height: 7px;
        top: 32px;
        right: -2.5px;

        border: 1.8px solid ${props => props.theme.online};
        border-radius: 50%;
        background: #06D59F;
        position: absolute;

      }
        .username{
            margin-top: -10px;
            .name{
                h5{
                    font-size: 15px;
                     color: ${props => props.theme.text};
                     font-weight: 600;
                }
            }
            .lstmsg{
                  margin-top: -20px;
                   line-height: 19px;
                     color: ${props => props.theme.iconcolor};
                     width: 250px;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     overflow: hidden;
                span{
                 font-size: 14px;
                     
                }
                p{
                     color: #7269ef;
                     margin-top: 0px;
                     margin-bottom: 0px;
                     font-weight: 500;
                     font-size: 13px;
                     padding-bottom: -5px;
                    display: flex;
                    align-items: center;
                    .animate-typing{
                 gap: 10px;
                  .dot{
                     -webkit-animation: wave 1.3s linear infinite;
                 animation: wave 1.3s linear infinite;
               
                 /* background: #fff; */
                  border-radius: 50%;
                  display: inline-block;
                  gap: 5px;
                  height: 4px;
                  margin-right: -1px;
                  opacity: .6;
                  width: 4px;
                   background: #7269ef;  

    
                  }
                  @keyframes wave {
                   0%,60%,to {
                
                 -webkit-transform: initial;
                   transform: none;
                   -webkit-transform: none;
                 }

                  30% {
                     -webkit-transform: translateY(-5px);
                      transform: translateY(-5px)
                     
                  }
            }
                  .dot:nth-child(2){
                        animation-delay: -1.1s;
                  }
                  .dot:nth-child(3){
                        animation-delay: -.9s;
                  }
              
                  .ms-1{
                        margin-left: 0.25rem!important;
                  }
                    }
                }
            }
            .sub{
                display: flex;
                 align-items: center;
                 justify-content: space-between;
                  overflow: visible;
                .sec1{
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    span{
                        margin-top: -4px;
                    }
                  
                }
                .sec2{
                    margin-right: -25px;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                     background: ${props => props.theme.newmsg};
            padding: 1px 8px;
            border-radius: 20px;
            span{
                text-align: center;
              font-size: 10px;
              font-weight: 700;
            color: #CF4467;
            }
            
                }
            }
        }

            }
            .time{
                margin-top: 10px;
                span{
                    font-size: 12px;
                    font-weight: 600;
                     color: ${props => props.theme.iconcolor};
                }
            }
        }
    }
`

const Chat = () => {
    const [chatopen, setChatopen]= useState(false)
    return (
        <Container>
            <div className="general">

                <Link to="/chatinfo">
                    <div className="main">
                        <div className="user">
                            <div className="imgonline">
                                <img src={User2} alt="" />
                            </div>
                            <div className="username">
                                <div className="name">
                                    <h5>Patrick Hendricks</h5>
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
                </Link>
               
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
                

            </div>
        </Container>
    )
}

export default Chat;
