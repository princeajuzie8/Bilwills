import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Leftsidebar from "../Components/leftsidebar";
import { useState } from "react";
import Usersslick from "../Components/Userslick";
import Discard from "../Components/Dialog/Discard";
import Chat from "../Chats/Chat";
import Main from "../Chats/Main";
// const Button = styled.button`
//   background: ${({ theme }) => theme.body};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   padding: 0.6rem;
// `;
const Container = styled.div`
position: relative;
  main {
    display: grid;
    grid-template-columns: 0.4fr 1.9fr 4fr;
    .navbar {
      height: 100vh;
      background: ${props => props.theme.body};
    }
    .chats {
      width: fit-content;
      height: 100vh;
      background: ${props => props.theme.body2};
    }
    .messages {
      height: 100vh;
      background: ${props => props.theme.body3};
    }
  }
`;


const Home = ({ theme, Themetogler }) => {
  return (
    <Container>

      {/* <Button onClick={Themetogler}></Button> */}
      <main>
        <div className="navbar">

          <Navbar Themetogler={Themetogler} />
        </div>
        <div className="chats">
          <Leftsidebar />
        </div>

        <div className="messages">
          {/* <Main /> */}
        </div>
      </main>
    
     
    </Container>
  );
};


export default Home
