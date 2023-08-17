import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Leftsidebar from "../Components/leftsidebar";
import Chatnav from "./Chatnav";
import Chatfotter from "./Chatfotter";
import Convers from "./convers";
import Discard from "../Components/Dialog/Discard";
import { useState } from "react";
import ImageDialog from "../Components/Dialog/imageDialog";
import { Discardcontextapi } from "../Context/discardcontext";
import Filedialog from "../Components/Dialog/Filedialog";
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
      .message{
     nav{

      }
      main{
       height: calc(100vh - 176px);
    
         display: flex;
      flex-direction: column;
      overflow: overlay;
    
            ::-webkit-scrollbar {
        width: 5px;
       
  
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
      footer{
     margin-bottom: 0px;
      }
      }
 
    }}
  }
`;


const Main = ({ theme, Themetogler }) => {
  const { Opendiscard, setOpendiscard } = Discardcontextapi()
  const [Openimgdialog, setOpenimgdialog] = useState(false)
  const [FileDialogs, setFiledDialog] = useState(false)
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
          <div className="message">
            <nav>
              <Chatnav />
            </nav>
            <main>
              <Convers />
        
            </main>
            <footer>
              <Chatfotter setOpendiscard={setOpendiscard} />
            </footer>
          </div>
        
         
        </div>
      </main>
      {FileDialogs && <Filedialog />}

      {Openimgdialog && <ImageDialog  />}
      {Opendiscard && <Discard />}
      
    </Container>
  );
};


export default Main;
