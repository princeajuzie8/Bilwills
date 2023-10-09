import styled from "styled-components";
import { RiEmotionHappyLine } from "react-icons/ri";
import { RiAttachmentLine } from "react-icons/ri";
import { RiImageFill } from "react-icons/ri";
import { RiSendPlane2Fill } from "react-icons/ri";
import { useState } from "react";
import Picker from "emoji-picker-react";
import { Tooltip } from "@mui/material";
import { useRef, createRef } from "react";
import { useEffect } from "react";
import ImageDialog from "../Components/Dialog/imageDialog";
import Discard from "../Components/Dialog/Discard";
import { Discardcontextapi } from "../Context/discardcontext";
import Filedialog from "../Components/Dialog/Filedialog";
import { useAuthContext } from "../Context/Auth";
import { useChatContext } from "../Context/ChatContext";
import { updateDoc, arrayUnion,doc, Timestamp, serverTimestamp } from "firebase/firestore";
import {v4 as uuid} from "uuid"
import { db } from "../config/firebase/firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase/firebase";
const Container = styled.div`
  position: relative;
  section {
    height: 85px;
    width: auto;
    background-color: ${(props) => props.theme.body3};

    border-top: 1px solid ${(props) => props.theme.border};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .mart {
      .moji {
        position: absolute;
        bottom: 65px;
        right: 170px;

        .EmojiPickerReact {
          .epr-dark-theme {
            .--epr-emoji-size {
              font-size: 80px;
            }
          }
        }
      }
    }
    .imageaccept {
      position: absolute;
      bottom: 65px;
      left: 85px;
    }
    .filea {
      position: absolute;
      bottom: 65px;
      left: 140px;
    }
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      margin-bottom: 0px;
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        list-style: none;
        li {
          cursor: pointer;
          label {
            cursor: pointer;
          }
          input {
            outline: none;
          }
          .inpu {
            padding: 2px 20px;
            display: flex;
            border-radius: 8px;
            align-items: center;
            justify-content: center;
            background-color: ${(props) => props.theme.search};
            margin-left: -40px;
            input {
              background-color: ${(props) => props.theme.search};
              border: none;
              height: 40px;
              color: ${(props) => props.theme.iconcolor};
              &::placeholder {
                color: ${(props) => props.theme.iconcolor};
              }
            }
          }
          color: ${({ theme }) => theme.iconcolors};

          button {
            padding: 14px 15px;
            border-radius: 8px;
            background-color: ${({ theme }) => theme.iconcolors};
            display: flex;
            align-items: center;
            cursor: pointer;
            justify-content: center;
            color: white;
            border: none;
            .icon {
              font-size: 16px !important;
            }
          }
        }
      }
    }
  }
`;

const Chatfotter = ({ setOpendiscard }) => {
  const [Emoji, setEmoji] = useState(false);

  console.log("hello picture  llllllllllllllllllllllllllllllllllllllll")

  const { currentUser } = useAuthContext();
  const { data } = useChatContext();
  // const [textValue, setTextValue] = useState("");
  // const [ImageValue, setImageValue] = useState(null);
  // const [FileValue, setFileValue] = useState(null);

  const { Imgdialog, setImgdialog, fileDialog, setfileDialog } =
    Discardcontextapi();
  const [picture, setPicture] = useState(null);

  const inputRef = createRef();
  const [message, setMessage] = useState("");
  const [Cursorposition, setCursorposition] = useState();
  const [img, setimg] = useState("");
  const [discard, setDiscard] = useState(false);
  const [file, setFile] = useState({
    files: null,
  });

  const [imageName, setImageName] = useState("");
  const [imageSize, setImageSize] = useState("");
  const [filevideo, setFilevideo] = useState("");
  const [err, setErr] = useState(null)

  const toggleRef = useRef(null);
  useEffect(() => {
    const Handleclikoutside = (e) => {
      if (toggleRef.current && !toggleRef.current.contains(e.target)) {
        setEmoji(false);
      }
    };
    window.addEventListener("click", Handleclikoutside);
    return () => {
      window.removeEventListener("click", Handleclikoutside);
    };
  }, [toggleRef]);
  const Handleemoji = () => {
    setEmoji(!Emoji);
    inputRef.current.focus();
  };
  const Pickemoji = (emoji) => {
    const Ref = inputRef.current;
    Ref.focus();
    console.log(emoji);
    const selectedEmoji = emoji.emoji || emoji;
    console.log(selectedEmoji);
    const Start = message.substring(0, Ref.selectionStart);
    const end = message.substring(Ref.selectionStart);
    const combined = Start + selectedEmoji + end;
    setMessage(combined.toString());
    setCursorposition(Start.length + selectedEmoji.length);
  };

  useEffect(() => {
    inputRef.current.selectionEnd = Cursorposition;
    
  }, [Cursorposition]);

 

  const HandleFilechange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFile(reader.result);
    };

    setFile(file);

    setImageName(file.name);
    setImageSize(file.size);
    setImgdialog(false);
    setEmoji(false);
    setfileDialog(true);
  };
  const Handleremove = () => {
    setPicture(null);
    setFile(null);
  };

  const videoRef = useRef(null);

  const Handlesend = async (e)=>{
    e.preventDefault();
   
   if(picture){

    const storageRef = ref(storage, uuid());

const  uploadTask =   uploadBytesResumable(storageRef, picture);

uploadTask.on( 'state_changed', 
(snapshot) => {
  // Handle upload progress
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  const value = Math.round(progress)
  console.log(`Upload is ${value}% complete`);
},

  (error) => {
    setErr(error)
    console.log(err)
  }, 
  
  () => {
    
   getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    await updateDoc(doc(db, "chats", data.chatID),{
      messages: arrayUnion({
        id: uuid(),
        message,
        senderid: currentUser.uid,
        date: Timestamp.now(),
        img: downloadURL,
      })
     })
     console.log("download url :",downloadURL);

    });
    
  }
);
   }else {

     await updateDoc(doc(db, "chats", data.chatID),{
      messages: arrayUnion({
        id: uuid(),
        message,
        senderid: currentUser.uid,
        date: Timestamp.now()
      })
     })
   }
   await updateDoc(doc(db, "userChats", currentUser.uid),{
     [data.chatID + ".lastMessage"]:{
      message,
     },
     [data.chatID + ".date"] : serverTimestamp()
   })
   await updateDoc(doc(db, "userChats", data.users.uid),{
     [data.chatID + ".lastMessage"]:{
      message,
     },
     [data.chatID + ".date"] : serverTimestamp()
   })
   setMessage("")
   setPicture(null)
  }
  console.log(picture && picture.name)
  const Handleimagechange = (e) => {
    const url = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(url);
    reader.onload = () => {
      setPicture(url);
    };
    setPicture( e.target.files[0]);

    setImgdialog(true);
    console.log( e.target.files[0]);
    setfileDialog(false);
    setOpendiscard(false);
  };

  return (
    <Container>
      <section ref={toggleRef}>

        <input
          type="file"
          name=""
          id="input-img"
          accept="image/*"
          style={{ display: "none" }}
          onClick={(e) => (e.target.value = null)}
          onChange={(e)=>Handleimagechange(e)}
        />
        <input
          type="file"
          name=""
          id="input-file"
          accept="*/*"
          style={{ display: "none" }}
          onClick={(e) => (e.target.value = null)}
          onChange={HandleFilechange}
        />
        {/* <Emoji /> */}

        <div className="mart">
          {Emoji && (
            <div className="moji">
              <Picker
                theme="dark"
                lazyLoadEmojis="false"
                previewConfig={{
                  defaultEmoji: "false", // defaults to: "1f60a"
                  defaultCaption: "none", // defaults to: "What's your mood?"

                  showPreview: false,
                }}
                height={350}
                width={300}
                onEmojiClick={Pickemoji}
                autoFocusSearch={false}
              />
            </div>
          )}
        </div>
        <div className="imageaccept">
          {Imgdialog && (
            <ImageDialog
              picture={picture}
              setImgdialog={setImgdialog}
              setPicture={setPicture}
              setOpendiscard={setOpendiscard}
              inputRef={inputRef}
            />
          )}
        </div>

        <div className="filea">
          {fileDialog && (
            <Filedialog
              discard={discard}
              setDiscard={setDiscard}
              file={file}
              setFile={setFile}
              imageName={imageName}
              imageSize={imageSize}
              setfileDialog={setfileDialog}
              fileDialog={fileDialog}
              setOpendiscard={setOpendiscard}
              inputRef={inputRef}
            />
          )}
        </div>
        <form action="" onSubmit={Handlesend}>
          <ul>
            <li>
              <div className="inpu">
                <input
                  type="text"
                  name=""
                  id="search"
                  placeholder="Enter Message..."
                  size={70}
                  autoComplete="off"
                  height={40}
                  onChange={(e) => setMessage(e.target.value)}
                  ref={inputRef}
                  value={message}
                />{" "}
              </div>
            </li>
            <Tooltip title="Emoji" arrow placement="top">
              <li>
                <div className="emoji" onClick={() => Handleemoji()}>
                  <RiEmotionHappyLine />
                </div>
              </li>
            </Tooltip>

            <Tooltip title="Attached file" arrow placement="top">
              <li>
                <label htmlFor="input-file">
                  <div className="attach">
                    <RiAttachmentLine />
                  </div>
                </label>
              </li>
            </Tooltip>
 

            <Tooltip title="Images" arrow placement="top">
              <li>
                <label htmlFor="input-img">
                  <div className="image">
                    <RiImageFill />
                  </div>
                </label>
              </li>
            </Tooltip>
            <li>
              {" "}
              <button type="submit" onClick={Handlesend}>
                <RiSendPlane2Fill className="icon" />
              </button>
            </li>
          </ul>
        </form>
      </section>
    </Container>
  );
};

export default Chatfotter;
