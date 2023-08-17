import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import imgg from "../Resources/Images/defaultuser.jpg"
import User2 from "../Resources/Images/user2.jpg"
import userst from "../Resources/Images/userst.jpg"
import userst2 from "../Resources/Images/userst2.jpg"
import userst3 from "../Resources/Images/userst3.jpg"
import userst4 from "../Resources/Images/userst4.jpg"

const Container = styled.div`
height: fit-content;
max-width: 28vw;

margin: auto;
margin-top: 20px;
      gap: 5px;
    .item{
    padding-top: 16px;
   
         .gen{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 52px;
            width: 73px;
            margin-top: 30px;
            border-radius: 7px;
        background-color: ${props => props.theme.search};
          position: relative;
                      .imgonline {
                        position: absolute;
                        bottom: 18px;
                    img{
                        object-fit: cover;
         height: 36px;
          width: 36px;
          border-radius: 50%;
            }
        display: flex;
        position: relative;
      }
      .imgonline::after {
        content: '';
    
         width: 7px;
        height: 7px;
        top: 25px;
        right: -1px;
    
        border: 1.8px solid ${props => props.theme.online};
        border-radius: 50%;
        background: #06D59F;
        position: absolute;
      }
      .name{
       display: flex;
       align-items: center;
     
        span{
                overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
        font-size: 13px!important;
        font-weight: 600;
            margin-top: -12px;
             text-align: center;
              color: ${props => props.theme.text};
        }
      }

         
       
             
         }
    }

`

const Usersslick = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        768: { items: 3 },
        1024: { items: 4 },
        1090: { items: 4.4 },
        
    };

  

  return (
      <Container>
          <div className="general">
              <AliceCarousel
                  mouseTracking
                  items={[
                      <div className="item" data-value="1">
                          <div className="gen">
                              <div className="imgonline">
                                  <img src={userst} alt="" />
                              </div>
                              <div className="name">
                                  <span>Patrick</span>
                              </div>
                          </div>
                      </div>,
                      <div className="item" data-value="2">
                          <div className="gen">
                              <div className="imgonline">
                                  <img src={userst2} alt="" />
                              </div>
                              <div className="name">
                                  <span>Doris</span>
                              </div>
                          </div>
                      </div>,
                      <div className="item" data-value="3">
                          <div className="gen">
                              <div className="imgonline">
                                  <img src={userst3} alt="" />
                              </div>
                              <div className="name">
                                  <span>Emily</span>
                              </div>
                          </div>
                      </div>,
                      <div className="item" data-value="4">
                          <div className="gen">
                              <div className="imgonline">
                                  <img src={userst4} alt="" />
                              </div>
                              <div className="name">
                                  <span>steve</span>
                              </div>
                          </div>
                      </div>,
                      <div className="item" data-value="5">
                          <div className="gen">
                              <div className="imgonline">
                                  <img src={User2} alt="" />
                              </div>
                              <div className="name">
                                  <span>Favour</span>
                              </div>
                          </div>
                      </div>,
                     
                     
                 
                  ]}
                  responsive={responsive}
                  disableDotsControls={true}
                  disableButtonsControls={true}
              />
          </div>
        
    </Container>
  )
}

export default Usersslick
