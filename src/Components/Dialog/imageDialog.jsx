import styled from "styled-components";
import AvatarEditor from 'react-avatar-editor'
import upload from "../../Resources/Images/upload.png"
import upload2 from "../../Resources/Images/user1.jpg"
import { Fade } from "react-awesome-reveal";
import { RiDeleteBin5Line } from "react-icons/ri"
import { useRef, useState } from "react";
import { useEffect } from "react";
import Discard from "./Discard";
import { Discardcontextapi } from "../../Context/discardcontext";

const Container = styled.div`
/* position: absolute; */

*{
    padding: 0;
    margin: 0;
}
    .general{
        /* height: calc(100vh - 65%); */
        .container{
    

            .main{
                      position: relative;
           z-index: 100;
              height: 70%;
           width: 60%;
            padding: 10px 0px;
            border-radius: 5px;
            padding-right: -10px;
            background: ${props => props.theme.body2};
                display: flex;
                justify-content: center;
                gap: 20px;
                img{
                    object-fit: contain;
                     height: 70%;
                     width: 65%;
                     margin-left: 10px;
                }
                .icon{
                    color: ${props => props.theme.iconcolor};
                    font-size: 20px;
                    height: fit-content;
                    width: fit-content;
                    cursor: pointer;
                }
                 .discard{
          
            }
            }
           
        }
    }
`

const ImageDialog = ({ picture, setImgdialog, setPicture, inputRef }) => {
    const{setOpendiscard}= Discardcontextapi()
   
    const Togref = useRef(null)
    const Refs = inputRef
  
    useEffect((e) => {
        const Ref = Refs.current;
        Ref.focus();
        const Handleclickoutside = (e) => {
            if (Togref.current && !Togref.current.contains(e.target)) {
    
                
                setOpendiscard(true)
                Ref.focus();
            } 
           
        }
        window.addEventListener("click", Handleclickoutside)
        return () => {
            window.removeEventListener("click", Handleclickoutside)
           
            
        }
    }, [Togref, Refs])
    
  
  
  return (
      <Container>
          <Fade top>
              <div className="general">
             
                  <div className="container" ref={Togref}>
              
                      
                      <div className="main" ref={inputRef} >
                         
                          <img src={picture} alt="" />
                          <div className="icon">
                              <RiDeleteBin5Line onClick={() => {
                                  setImgdialog(false)
                                  setPicture(null)
                              }} />
                          </div>
                          <div className="discard">
                            
                          </div>
                      </div>
                 
                    
                     
                  </div>
            
              </div> 
      </Fade>
          
    </Container>
  )
}

export default ImageDialog
