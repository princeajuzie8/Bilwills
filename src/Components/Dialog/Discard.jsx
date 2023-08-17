import styled from "styled-components"
import { Discardcontextapi } from "../../Context/discardcontext"
import { useRef } from "react"
import { useEffect } from "react"


const Container = styled.div`
/* *{
    margin: 0;
    padding: 0;
} */
position: absolute;
top: 0;
               left: 0;
              right: 0;
              z-index: 100;

        .discard{
                
                height: 100vh;
                width: 100vw;
                background-color: #00000091;
                    display: flex;
                align-items: center;
                justify-content: center; 
               bottom: 0;
               .content{
                    display: flex;
                align-items: center;
                justify-content: center; 
                flex-direction: column;
                height: 30%;
                width: 40%;
                background-color: #fff;
                  border-radius: 5px;
                  border: 1px solid ${props => props.theme.border};
                     background: ${props => props.theme.body3};
                     .sec1{
                        span{
                            color: ${props => props.theme.text};
                            font-size: 22px;
                        }
                     }
                     .sec2{
                        h6{
                              color: ${props => props.theme.iconcolor};
                              font-size: 13px;
                        }
                     }
                     .sec3{
                        display: flex;
                        gap: 10px;
                        button{
                         padding: 10px 80px 10px 80px;
                         border: none;
                         cursor: pointer;
                         border-radius: 5px;
                         color: ${props => props.theme.text};
                        }
                         button:nth-child(2){
    background-color: ${props => props.theme.search};
                         }
                         button:nth-child(1){
                             background-color: ${({ theme }) => theme.iconcolors};
                         }
                     }
            }
        }
`

const Discard = ({ }) => {
    const { Opendiscard, setOpendiscard, Imgdialog, setImgdialog, fileDialog, setfileDialog } = Discardcontextapi()

        const Togrefss = useRef();

        const Discard2 = () => {
            setImgdialog(false);
            setOpendiscard(!Opendiscard);
            setfileDialog(false)
    };
    const discards  = () => {
        setOpendiscard(false)
       
    }

    const handleClick = (e) => {
        e.stopPropagation();
    
    }

    return (
        <Container onClick={handleClick}>
            <div className="discard" ref={Togrefss}>

                <div className="content" >
                    <div className="sec1">
                        <span>Discard unsent message?</span>
                    </div>
                    <div className="sec2">
                        <h6>Your Attached media won't be sent if you leave this screen.</h6>
                    </div>
                    <div className="sec3">
                        <button onClick={() => Discard2()}>Discard</button>
                        <button onClick={() => discards()} >return to Media</button>
                    </div>
                </div>
               
            </div>


        </Container>
    )
}

export default Discard
