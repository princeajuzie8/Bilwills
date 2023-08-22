import styled from "styled-components"
import logo from "../Resources/Images/Logo1.svg"
import { RiUser2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { RiMessage3Line } from "react-icons/ri"
import { RiGroupLine } from "react-icons/ri"
import { RiContactsLine } from "react-icons/ri"
import { RiSettings5Line } from "react-icons/ri"
import { RiSunLine } from "react-icons/ri"
import { RiMoonLine } from "react-icons/ri"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from '@mui/material';

import Defauluserimg from "../Resources/Images/defaultuser.jpg"
const Container = styled.div`

    section{
       
      .general{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between; 
        gap: 20px;
         height: calc(100vh - 30px);
        .figure{
            height: 50px;
          a{

           img{
            margin-top: 25px;
          
          }
          }
        
        }

           ul{
              display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 0;
 border-radius: 20px;
 height: 420px;

 gap: 10px;
         li{
            padding: 14px 16px 14px 16px ;
            list-style: none;
          font-size: 25px;
          color: ${({ theme }) => theme.iconcolor};
          cursor: pointer;
          #close{
           
              color: ${({ theme }) => theme.iconcolor};
          }
          #open{
            display: none;
         
          }
          
        }
        .active{
           cursor: pointer;
           margin: auto;      
          border-radius: 30px;
          padding: 0;
         
           display: flex;
           align-items: center;
           justify-content: center;
            width: fit-content;
           border-radius: 5px;  
           
           background-color: ${({ theme }) => theme.activebg};
           li{
color: ${({ theme }) => theme.iconcolors};
           }
     
        }
     
          }
          .user{
            height: 10px;
            img{
              object-fit: cover;
               border-radius: 50%;
               cursor: pointer;
            }
          }
        }
    }
`

const Navbar = ({ Themetogler, theme }) => {

  

    return (
        <Container>

            <section>
                <div className="general">
                    <div className="figure">
                        <NavLink to="/">
                            <img src={logo} alt="" width={50} />
                        </NavLink>


                    </div>
                    <ul>
                        <NavLink to="/Profile" >
                            <Tooltip title="Profile" arrow placement="top">
                                <li>

                                    <RiUser2Line />


                                </li>
                            </Tooltip>
                        </NavLink>

                        <NavLink to="/" >
                            <Tooltip title="Chats" arrow placement="top">
                                <li>
                                    <RiMessage3Line />
                                </li>
                            </Tooltip>

                        </NavLink>

                        <NavLink to="/groups" >
                            <Tooltip title="Groups" arrow placement="top">
                                <li>
                                    <RiGroupLine />
                                </li>
                            </Tooltip>


                        </NavLink>

                        <NavLink to="/contacts" >
                            <Tooltip title="Contacts" arrow placement="top">

                                <li>
                                    <RiContactsLine />
                                </li>
                            </Tooltip>

                        </NavLink>

                        <NavLink to="/settings"  >
                            <Tooltip
                                title="Settings" arrow placement="top" >
                                <li>
                                    <RiSettings5Line />
                                </li>
                            </Tooltip>

                        </NavLink>


                        <Tooltip title="darktheme/lighttheme" arrow placement="right">
                            <li >

                                <RiMoonLine id="open" onClick={Themetogler} /> <RiSunLine id="close" onClick={ Themetogler} />

                            </li>

                        </Tooltip>




                    </ul>
                    <div className="user">
                        <img src={Defauluserimg} height={30} width={30} alt="" />
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Navbar
