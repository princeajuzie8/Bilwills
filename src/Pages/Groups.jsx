import Navbar from "../Components/Navbar"
import styled from "styled-components"
import { RiGroupLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { RiSearchLine } from "react-icons/ri";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Tooltip from "@mui/material/Tooltip";
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
      .general{

          .sec1{
         display: flex;
         align-items: center;
         justify-content: space-between;
         margin: 0px 20px 0px 20px;
         .head{
           h4{
             font-size: 25px;
             color: ${props => props.theme.text};
           }
         }
         .icons{
           a{
             text-decoration: none;
             color: ${props => props.theme.iconcolor};
             font-size: 18px;
           }
 
         }
       }
       .sec2{
                margin-top: -10px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30vw;
                padding-bottom: 10px;
             .maininput{
               background-color: ${props => props.theme.search};
              display: flex;
              align-items: center;
             
              gap: 15px;
              padding: 10px 19px 10px 19px;
              input{
               outline: none;
               color: ${props => props.theme.iconcolor};
               border: none;
               width: 22vw;
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
           .sec3{
                margin-top: 40px;
        height: 70vh;
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
    .subsec1{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: 15px;
        padding-left: 20px;
    
        cursor: pointer;
        .groupname{
            display: flex;
            align-items: center;
            justify-content: center;
             padding: 7px 12px 7px 12px;
                border-radius: 50%;
                background-color: #7269ef3d;
                    align-items: center;

            span{
                color: ${propss => propss.theme.iconcolors};
               
            }
        }
        .tittle{
            h4{
                font-weight: 500;
                  color: ${props => props.theme.text};
            }
        }
        :hover{
            transition: ease-out 0.3s;
            border-radius: 5px;
            width: 87%;
               background-color: ${props => props.theme.search};
        }
    }
    .subsec2{
      display: flex;
        align-items: center;
        gap: 20px;
        margin-left: 15px;
        padding-left: 20px;
        cursor: pointer;
        .groupname{
            display: flex;
            align-items: center;
            justify-content: center;
             padding: 7px 12px 7px 12px;
                border-radius: 50%;
                background-color: #7269ef3d;
                    align-items: center;

            span{
                color: ${propss => propss.theme.iconcolors};
               
            }
        }
        .tittle{
             display: flex;
            align-items: center;
            justify-content: space-between;
          width: 21vw;
            h4{
             
                  font-weight: 500;
                  color: ${props => props.theme.text};
            }
        }
        .newmsg{
            margin-top: 5px;
            background: ${props => props.theme.newmsg};
            padding: 0px 5px 0px 5px;
            border-radius: 5px;
            color: #CF4467;
            span{
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: 500;
            }
        }
        :hover{
            transition: ease-out 0.3s;
            border-radius: 5px;
            width: 87%;
               background-color: ${props => props.theme.search};
        }
    }
   .subsec3{
      display: flex;
        align-items: center;
     
        gap: 20px;
        margin-left: 15px;
        padding-left: 20px;
        cursor: pointer;
        .groupname{
            display: flex;
            align-items: center;
            justify-content: center;
             padding: 7px 12px 7px 12px;
                border-radius: 50%;
                background-color: #7269ef3d;
                    align-items: center;

            span{
                color: ${propss => propss.theme.iconcolors};
               
            }
        }
        .title{
            display: flex;
            align-items: center;
            justify-content: space-between;
          width: 21vw;
          .min{
              h4{

                  font-weight: 500;
                  color: ${props => props.theme.text};
            }
          }
          
             .newmsg{
                float: right;
            margin-top: 5px;
            background: ${props => props.theme.newmsg};
            padding: 0px 5px 0px 5px;
            border-radius: 5px;
            color: #CF4467;
            span{
               
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              font-weight: 500;
            }
        }
        }
       

        :hover{
            transition: ease-out 0.3s;
            border-radius: 5px;
            width: 87%;
               background-color: ${props => props.theme.search};
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
const Groups = ({ Themetogler, theme }) => {
    return (
        <Container>
            <main>
                <div className="navbar">
                    <Navbar Themetogler={Themetogler}  theme={theme}/>
                </div>
                <div className="chats">
                    <div className="general">
                        <div className="sec1">
                            <div className="head">
                                <h4>Groups</h4>
                            </div>
                            <div className="icons">
                                <Tooltip title="Create group" placement="bottom">
                                    <Link to="/">

                                        <RiGroupLine />
                                    </Link>
                                </Tooltip>

                            </div>
                        </div>
                        <div className="sec2">
                            <div className="maininput">
                                <div className="icon">
                                    <RiSearchLine />
                                </div>

                                <input type="search" name="" id="" placeholder="Search groups.." />
                            </div>

                        </div>

                        <div className="sec3">
                            <div className="subsec1">
                                <div className="groupname">
                                    <span>
                                        G
                                    </span>
                                </div> 
                                <div className="tittle">
                                    <h4>#General</h4>
                                </div>
                          </div>
                            <div className="subsec2">
                                <div className="groupname">
                                    <span>
                                    R
                                    </span>
                                </div> 
                                <div className="tittle">
                                    <h4>#Reporting</h4>
                                    <div className="newmsg">
                                        <span>23+</span>
                                    </div>
                                </div>
                               
                          </div>
                            <div className="subsec3">
                                <div className="groupname">
                                    <span>
                                        D
                                    </span>
                                </div> 
                                <div className="title">
                                    <div className="min">

                                    <h4>#Designer</h4>
                                    </div>
                                    <div className="newmsg">
                                        <span>new</span>
                                    </div>
                                </div>
                            </div>
                            <div className="subsec1">
                                <div className="groupname">
                                    <span>
                                        D
                                    </span>
                                </div>
                                <div className="tittle">
                                    <h4>#Developers</h4>
                                </div>
                            </div>
                            <div className="subsec3">
                                <div className="groupname">
                                    <span>
                                        P
                                    </span>
                                </div>
                                <div className="title">
                                    <div className="min">

                                        <h4>#Project-aplha</h4>
                                    </div>
                                    <div className="newmsg">
                                        <span>new</span>
                                    </div>
                                </div>
                            </div>
                            <div className="subsec1">
                                <div className="groupname">
                                    <span>
                                        S
                                    </span>
                                </div>
                                <div className="tittle">
                                    <h4>#Snacks</h4>
                                </div>
                            </div>
                            <div className="subsec2">
                                <div className="groupname">
                                    <span>
                                        B
                                    </span>
                                </div>
                                <div className="tittle">
                                    <h4>#Bright-right</h4>
                                    <div className="newmsg">
                                        <span>23+</span>
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

export default Groups
