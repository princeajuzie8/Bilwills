import Navbar from "../Components/Navbar"
import styled from "styled-components"
import { HiOutlineDotsVertical } from "react-icons/hi"
import Userimg from "../Resources/Images/user.jpg"
import { BsRecordFill } from "react-icons/bs"
import AccordionWrapper from '../Context/Accordwrapper'
import AccordionItem from "../Components/AccordionItem";
import 'custom-react-accordion/dist/Accordion.css'
import { RiEditFill, RiPencilFill, RiUser2Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from "react"
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
          display: none;
           color: ${props => props.theme.iconcolor};
           cursor: pointer;
        }
      }
      .user{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -10px;
        .secc1{
         display: flex;
         position: relative;
                 .icns{
           position: absolute;
           background: ${props => props.theme.search};
           :hover{

               background: ${props => props.theme.search1};
           }
           padding: 8px 10px 8px 10px;
           border-radius: 50%;
           color: ${props => props.theme.text};
           cursor: pointer;
           top: 58px;
           right: -2px;
        }
       
          img{
          
            height: 90px;
            width: 90px;
             border: 1.5px solid ${props => props.theme.border};
               padding: 4px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 0px !important;
          }
        }
        .secc2{
          margin-top: 0px;
          margin-bottom: 40px;
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
             margin-top: -25px;
             cursor: pointer;
             gap: 2px;
            .icon{
              font-size:  15px !important;
              color:  ${props => props.theme.iconcolor};
            }
            .sv{
              margin-top: -4px;
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
        margin-top: -20px;
        margin-bottom: 20px;
                }
      .About{
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: row;
         display: none;
        span{
          text-align: center;
           color: ${props => props.theme.iconcolor};
          width: 27vw;
          text-align: start;
        }
      }
      .mainAbout{
        margin-top: 20px;
        height: 45vh;
       overflow: overlay;
        padding: 0px;
        margin: 0;
         display: flex;
      flex-direction: column;
           ::-webkit-scrollbar {
  
        position: absolute;
        display: none;
      }

      /* Track */
      ::-webkit-scrollbar-track {
      
        display: none;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #c1b6b69a;
        border-radius: 10px;
        display: none;

      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
    background: #c1b6b69a;
        width: 7px;
        display: none;
      }
      :hover{
        padding: 0px;
     ::-webkit-scrollbar {
        width: 5px;
        display: block;
        position: absolute;
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
        width: 7px;
          display: block;
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
  margin-top: 0px;
  padding: 23px 1em 23px 1em;
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
        display: none;
    }
    .sec{
        margin-bottom: 5px;
      span{
         font-family: Public Sans,sans-serif;
    font-weight: 600;
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
         margin-right: 5px;
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
               cursor: pointer;
        }
        }

        
       }
    }
   }
   .privacy{
   .sec2{
        display: flex;
        align-items: center;
        justify-content: space-between;
         border-bottom: 1.5px solid ${props => props.theme.border};
        .tittle{
            
            h5{
            color: ${props => props.theme.text};
             font-family: Public Sans,sans-serif;
             font-weight: 600;
            }
        }
        .option{
            display: flex;
            align-items: center;
            padding: 8px 12px 8px 12px;
           background: ${props => props.theme.body2};
            color: ${props => props.theme.text};
            cursor: pointer;
            gap: 5px;
            border-radius: 5px;
            span{
                 font-family: Public Sans,sans-serif;
                 font-weight: 400;
                font-size: 13px;
            }
        }
    }
    .sub2{
        border-bottom: transparent;
    }
    hr{
         
    }
   }
  
   ul{
     margin-top: -30px;
     margin-left: -40px;
    li{
      list-style: none;
      text-decoration: none;
     .editicon{
        cursor: pointer;
        margin-top: -10px;
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 12px 10px 12px;
        gap: 5px;
          background: ${props => props.theme.body};
          border-radius: 5px;
        font-size: 13px;
       color: ${props => props.theme.text};
        h4{
            margin-top: -5px;
             color: ${props => props.theme.text};
        }
     }
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
   .help{
    .sec{
        margin-top: -10px;
           border-bottom: 1.5px solid ${props => props.theme.border};
           h5{
            font-size: 14px;
            font-weight: 500;
           color: ${props => props.theme.iconcolor};
           } 
    }
   }
      }
    }
    .messages {
      height: 100vh;
      background: ${props => props.theme.body3};
    }


    
`

const Style = styled.div`
  div {
    cursor: pointer;
  width: 33px;
  height: 16px;
  position: relative;
  background:   #eee;
  border-radius: 30px;
  border: none;
  outline: none;
  transition: background 0.4s;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    background: #B9B9BF;
    border-radius: 20px;
    transition: all 0.2s cubic-bezier(0, 0, 0.46, 1.82);
    transition: all 0.2s cubic-bezier(0.24, 1.74, 0.92, 0.85);
  }

  &:active {
    span {
      width: 30px;
      
    }

    &.on span {
      margin-left: -32px;
   
    }

  }

  &.on {
    background: ${props => props.theme.iconcolors};
    span {
        background: #fff;
      left: 100%;
      margin-left: -15px;
    }
  }
}

`;
const Settings = ({ Themetogler }) => {
    const [on, setOn] = useState(true);

    const handleToggle = () => {
        setOn(prevOn => !prevOn);
    
    };
    return (
        <Container>
            <main>
                <div className="navbar">
                    <Navbar Themetogler={Themetogler} />
                </div>
                <div className="chats">
                    <div className="head">
                        <div className="sec1">
                            <h4>Settings</h4>
                        </div>
                        <div className="sec2">
                            <HiOutlineDotsVertical />
                        </div>
                    </div>
                    <div className="user">
                        
                        <div className="secc1">
                            <div className="icns">
                                <RiPencilFill />
                            </div>
                            <img src={Userimg} alt="" />
                        </div>
                        <div className="secc2">
                            <div className="li">
                                <h5>Patricia Smith</h5>
                                <div className="li2">
                                    <div className="sv">
                                        <span>Available</span>
                                    </div>
                                    <div className="icon">
                                        <MdOutlineKeyboardArrowDown />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                  <div className="line"></div>
                    <div className="mainAbout">
                        <div className="sec1">
                            <AccordionWrapper>
                                <AccordionItem index={0} title={[
                                    <div className="general">
                                        <div className="ic">
                                            <RiUser2Line />
                                        </div>
                                        <div className="sec">
                                            <span>Personal info</span>
                                        </div>
                                    </div>
                                ]} description={[
                                    <ul>
                                        <li>
                                            <h4>Name</h4>
                                            <span>Patricia Smith</span>
                                            <div className="editicon">
                                               
                                                    <RiEditFill />
                                                    <h4>Edit</h4>
                                          
                                            </div>
                                        </li>
                                        <li>
                                            <h4>Email</h4>
                                            <span>patriciasmith@gmail.com</span>
                                        </li>
                                        <li>
                                            <h4>Time</h4>
                                            <span>11:40 AM</span>
                                        </li>
                                        <li>
                                            <h4>Location</h4>
                                            <span>California, USA</span>
                                        </li>
                                    </ul>
                                ]}>

                                </AccordionItem>
                                <AccordionItem index={1} title={[
                                    <div className="general">
                                        <div className="ic">
                                            <RiUser2Line />
                                        </div>
                                        <div className="sec">
                                            <span>Privacy</span>
                                        </div>
                                    </div>
                                ]} description={[
                                    <div className="privacy">
                                        <div className="sec2">
                                            <div className="tittle">
                                                <h5>Profile photo</h5>
                                            </div>
                                            <div className="option">
                                                <span>Everyone</span>
                                                <MdOutlineKeyboardArrowDown />
                                            </div> 
                                          
                                        </div>
                                     
                                        <div className="sec2">
                                            <div className="tittle">
                                                <h5>Last seen</h5>
                                            </div>
                                            <div className="optio">
                                                <Style>
                                                    <div onClick={handleToggle} className={on ? "on" : "off"}>
                                                        <span />
                                                    </div>
                                                </Style>
                                            </div>
                                           
                                        </div>
                                     
                                        <div className="sec2">
                                            <div className="tittle">
                                                <h5>Status</h5>
                                            </div>
                                            <div className="option">
                                                <span>Everyone</span>
                                                <MdOutlineKeyboardArrowDown />
                                            </div> 
                                           
                                        </div>
                            
                                        <div className="sec2">
                                            <div className="tittle">
                                                <h5>Read receipts</h5>
                                            </div>
                                            <div className="optio">
                                                <Style>
                                                    <div onClick={handleToggle} className={on ? "on" : "off"}>
                                                        <span />
                                                    </div>
                                                </Style>
                                            </div>
                                          
                                        </div>
                                   
                                        <div className="sec2 sub2">
                                            <div className="tittle">
                                                <h5>
                                                    Groups
                                                </h5>
                                            </div>
                                            <div className="option">
                                                <span>Everyone</span>
                                                <MdOutlineKeyboardArrowDown />
                                            </div> 
                                           
                                        </div>
                                 
                                 </div>
                                ]}>

                                </AccordionItem>
                                <AccordionItem index={2} title={[
                                    <div className="general">
                                        <div className="ic">
                                            <RiUser2Line />
                                        </div>
                                        <div className="sec">
                                            <span>Security</span>
                                        </div>
                                    </div>
                                ]} description={[
                                    <div className="privacy">
                                        <div className="sec2 sub2">
                                            <div className="tittle">
                                                <h5>Show security notification</h5>
                                            </div>
                                            <div className="optio">
                                                <Style>
                                                    <div onClick={handleToggle} className={on ? "on" : "off"}>
                                                        <span />
                                                    </div>
                                                </Style>
                                            </div>

                                        </div>
                                   </div>
                                ]}>

                                </AccordionItem>
                                <AccordionItem index={3} title={[
                                    <div className="general">
                                        <div className="ic">
                                            <RiUser2Line />
                                        </div>
                                        <div className="sec">
                                            <span>Help</span>
                                        </div>
                                    </div>
                                ]} description={[
                                    <div className="help">
                                        <div className="sec">
                                            <h5>FAQs</h5>
                                        </div>
                                        <div className="sec">
                                            <h5>Contact</h5>
                                        </div>
                                        <div className="sec">
                                            <h5>Terms & Privacy policy</h5>
                                        </div>
                                     </div>
                                ]}>

                                </AccordionItem>
                               
                            </AccordionWrapper>
                        </div>

                    </div>
                </div>
                <div className="messages">

                </div>
            </main>
        </Container>
    )
}

export default Settings;
