import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Imgs from "../../Resources/Images/userst4.jpg"
import { Fade } from "react-awesome-reveal";
import { RiDeleteBin5Line } from "react-icons/ri"
import Fileimg from "../../Resources/Images/file.png"
import Fileimg2 from "../../Resources/Images/file3.png"

import { BsFileEarmarkRichtext } from "react-icons/bs"
const Container = styled.div`
*{
  padding: 0;
  margin: 0;
}
    .gent{
            border-radius: 10px;
           border-radius: 10px;
             width:  fit-content;
               border: 1px solid ${props => props.theme.border};
            background: ${props => props.theme.body2};
                display: flex;
           
               
                justify-content: center;
                flex-direction: column;
              padding: 25px 20px ;
              span{
                margin-bottom: 12px;
                color: ${props => props.theme.text};
              }
      .hello{
       display: flex;
       align-items: center;
       justify-content: space-between;
        width: auto;
       .sec1{
        display: flex;
        gap: 10px;
      
        .img{
           
          img{
          height: 40px;
          width: 40px;
          border-radius: 10px;
          object-fit: contain;
         }
        }
         
         .value-name{

          display: flex;
          flex-direction: column;
          span:nth-child(1){
            font-size: 17px;
            margin-bottom: 5px;
            color: ${props => props.theme.text};
            text-overflow: ellipsis;
            overflow: hidden;
            width: 180px;
            white-space: nowrap;
          }
          span:nth-child(2){
            font-size: 13px;
            color: ${props => props.theme.iconcolor};
          }
         }
       }
       .sec2{
           color: ${props => props.theme.iconcolor};
           font-size: 18px;
           cursor: pointer;    
       }
      }
    }
`
const Filedialog = (props) => {
  const imageSize = props.imageSize;
  let sizeStr;

  if (imageSize < 1024) {
    sizeStr = `${imageSize} KB`;
  } else {
    sizeStr = `${(imageSize / (1024 * 1024)).toFixed(2)} MB`;
  }

  const Togref = useRef(null)

  const REFERS = props.inputRef;
  useEffect((e) => {
    const Ref = REFERS.current;
    Ref.focus()
    const Handleclickoutside = (e) => {
      if (Togref.current && !Togref.current.contains(e.target)) {
        props.setOpendiscard(true)
        Ref.focus()
      }

    }
    window.addEventListener('click', Handleclickoutside)
    return () => {
      window.removeEventListener('click', Handleclickoutside)
    }
  }, [Togref, REFERS])
  return (
    <Container>

      {props.fileDialog && (
        <Fade duration={500} cascade>
          <Container>
            <div className='gent' ref={Togref}>
              <span>Send File </span> 
              <div className="hello" ref={REFERS}>
                {/* <video src={props.filevideo}></video> */}
                {/* <video poster={props.file} width="320" height="240"></video> */}
                
                <div className="sec1">
                  <div className="img">
                    {props.file === "video" ? <BsFileEarmarkRichtext /> :      <img src={
                      Fileimg
                    } alt="" />}
                  </div>
                          <div className="value-name">
                    <span>{props.imageName}</span>
                    <span>{sizeStr}</span>
                  </div>
                </div>
                <div className="sec2" onClick={() => {
                  props.setfileDialog(false)
                  props.setFile({
                    files: null
                  })
                }}>
                  <RiDeleteBin5Line />
                </div>
              </div>

            </div>
          </Container>
        </Fade>
      )}

    </Container>

  )
}

Filedialog.propTypes = {
  // discard: PropTypes.shape({
  //   files: PropTypes.string.isRequired
  // }).isRequired
  // file: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired
}

export default Filedialog
