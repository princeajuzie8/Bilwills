import styled from "styled-components";
import user from "../Resources/Images/userst.jpg";
import Image from "../Resources/Images/DAY 10.png";
import { HiDotsVertical } from "react-icons/hi";
import { RiTimeLine } from "react-icons/ri";
import { RiDownload2Line } from "react-icons/ri";
import { RiMoreFill } from "react-icons/ri";
import { RiFileTextFill } from "react-icons/ri";
const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .gen {
    .me {
      .All {
        display: flex;
        margin: 30px 0px 20px 30px;
        align-items: end;
        .user {
          img {
            height: 37px;
            width: 37px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        .contain {
          display: flex;
          margin: 0;
          .chatcontent {
            .sec1 {
              display: flex;

              .chatbg {
                width: 75%;

                position: relative;
                max-width: max-content;
                background-color: #7269ef;
                margin-bottom: 1px;
                padding: 15px;
                border-radius: 8px 8px 8px 0px;
                display: flex;
                flex-direction: column;
                align-items: end;
                gap: 10px;

                .msgtext {
                  color: #fff;
                  font-weight: 500;
                  font-size: 15px;
                  span {
                    display: block;
                  }
                }
                .image {
                  .mainimage {
                    display: none;
                    h4 {
                      margin: -7px 0px 10px 0px;
                    }
                    .imagecontent {
                      display: flex;

                      img {
                        position: relative;
                        height: 150px;
                        width: 150px;
                        border-radius: 5px;
                        margin-left: 0px;
                        object-fit: cover;
                      }
                      ul {
                        list-style: none;
                        display: flex;
                        gap: 20px;
                        align-items: center;
                        position: absolute;
                        top: 160px;
                        font-size: 18px;
                        left: 100px;
                        li {
                          cursor: pointer;
                        }
                      }
                    }
                  }
                }
                .file {
                  .allfile {
                    display: none;
                    margin-left: 40px;
                    .filecontent {
                      display: flex;
                      gap: 10px;
                      align-items: center;

                      background: ${(props) => props.theme.body3};
                      border-radius: 5px;
                      padding: 8px 10px;
                      .filedetails {
                        p {
                          width: 130px;
                          text-overflow: ellipsis;
                          white-space: nowrap;
                          overflow: hidden;
                          font-size: 14px;
                          color: ${(props) => props.theme.text};
                        }
                        span {
                          display: block;
                          font-size: 12px;
                          color: ${({ theme }) => theme.iconcolor};
                        }
                      }
                      .icon {
                        color: ${({ theme }) => theme.iconcolor};
                        cursor: pointer;
                      }
                      .fileicon {
                        padding: 17px 16px 17px 16px;
                        background-color: #7269ef3d;
                        border-radius: 5px;
                        .sec1 {
                          color: #7269ef;
                          font-size: 20px;
                        }
                      }
                    }
                  }
                }
                .typing {
                  .typiniganimate {
                    display: none;
                    p {
                      color: #e8e6fc;
                      margin-top: 0px;
                      margin-bottom: 0px;
                      font-weight: 500;
                      font-size: 13px;
                      padding-bottom: -5px;
                      display: flex;
                      align-items: center;

                      span {
                        display: block;
                      }
                      .animate-typing {
                        gap: 10px;
                        .dot {
                          -webkit-animation: wave 1.3s linear infinite;
                          animation: wave 1.3s linear infinite;

                          /* background: #fff; */
                          border-radius: 50%;
                          display: inline-block;
                          gap: 5px;
                          height: 4px;
                          margin-right: -1px;
                          opacity: 0.6;
                          width: 4px;
                          color: #f8f7fe;
                          background: #f8f7fe;
                        }
                        @keyframes wave {
                          0%,
                          60%,
                          to {
                            -webkit-transform: initial;
                            transform: none;
                            -webkit-transform: none;
                          }

                          30% {
                            -webkit-transform: translateY(-5px);
                            transform: translateY(-5px);
                          }
                        }
                        .dot:nth-child(2) {
                          animation-delay: -1.1s;
                        }
                        .dot:nth-child(3) {
                          animation-delay: -0.9s;
                        }

                        .ms-1 {
                          margin-left: 0.25rem !important;
                        }
                      }
                    }
                  }
                }
                .typing.typinganimate + .worldClock {
                  display: none;
                }

         .worldclock {
                  display: block;
                  margin-bottom: -10px;

                  .time {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    color: #b6b1f7;
                    font-size: 12px;
                    font-weight: 500;
                    gap: 2px;
                    .icon {
                      margin-top: 4px;

                      font-weight: 700;
                    }
                    .color {
                    }
                  }
                }
              }

      

              .dot {
                font-size: 17px;
                color: ${(props) => props.theme.iconcolor1};
                cursor: pointer;
              }
            }
            .chatcomplete {
              display: flex;
              width: 0;
              height: 0;
              border-top: 11px solid #7269ef;
              border-right: 11px solid transparent;
            }
            .username {
              margin-top: 7px;
              font-size: 14px;
              font-weight: 500;
              color: ${(props) => props.theme.iconcolor};
            }
          }
        }
      }
    }
    .you {
      margin-right: 10px;
      .All {
        flex-direction: row-reverse;
        margin: 30px 0px 20px 30px;
        align-items: end;
        .user {
          img {
            height: 37px;
            width: 37px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        .contain {
          flex-direction: row-reverse;
          margin: 0px 10px 0px 0px;
       
          .chatcontent {
            /* flex-direction: row-reverse; */
            display: flex;
            flex-direction: column;
           align-items: end;
            .sec1 {
              flex-direction: row-reverse;
              ::after{
            display: flex;

            width: 1px;
            height: 1px;

            border-top: 11px solid ${(props) => props.theme.search};
            border-left: 11px solid transparent;
            border-right: none;
          }
              .chatbg {
                width: 75%;

                max-width: max-content;

                background-color: ${(props) => props.theme.search};
                margin-bottom: 1px;
                padding: 15px;
                border-radius: 8px 8px 0px 8px;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 10px;

                .msgtext {
                  color: #fff;
                  font-weight: 500;
                  font-size: 15px;
                }
                .image {
                  .mainimage {
                    /* display: none; */
                    h4 {
                      margin: -7px 0px 10px 0px;
                    }
                    .imagecontent {
                      display: flex;
                      flex-direction: row-reverse;
                      img {
                        position: relative;
                        height: 150px;
                        width: 150px;
                        border-radius: 5px;
                        margin-left: 0px;
                        object-fit: cover;
                      }
                      ul {
                        list-style: none;
                        display: flex;
                        gap: 20px;
                        align-items: center;
                        position: absolute;
                        top: 160px;
                        font-size: 18px;
                        left: 100px;
                        li {
                          cursor: pointer;
                        }
                      }
                    }
                  }
                }
                .worldclock {
                  display: flex;
                  align-items: end;
                  .time {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    color: #abb4d2;
                    font-size: 12px;
                    font-weight: 500;
                    gap: 2px;
                    .icon {
                      margin-top: 4px;
                      font-weight: 700;
                    }
                    .color {
                    }
                  }
                }
              }

              .dot {
                font-size: 17px;
                color: ${(props) => props.theme.iconcolor1};
                cursor: pointer;
              }
            }
            .chatcomplete {
              display: flex;
              flex-direction: row-reverse;
             justify-content: end;
              width: 1px;
              height: 1px;

              border-top: 11px solid ${(props) => props.theme.search};
              border-left: 11px solid transparent;
              border-right: none;
            }
            .username {
              display: flex;
              flex-direction: row-reverse;
              font-size: 14px;
              font-weight: 500;
              color: ${(props) => props.theme.iconcolor};
            }
          }
        }
      }
    }
  }
`;

const Convers = () => {
  return (
    <Container>
      <div className="gen">
        <div className="me you">
          <div className="All">
            <div className="user">
              <img src={user} alt="" />
            </div>
            <div className="contain">
              <div className="chatcontent">
                <div className="sec1">
                  <div className="chatbg">
                    <div className="msgtext file typing image">
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate nemo minima reiciendis quisquam est
                        necessitatibus laborum sunt doloribus sint, vel
                        consectetur unde dolor corporis aut nesciunt voluptatum
                        illum alias nobis! Dignissimos illum beatae consectetur
                        ipsa maiores laudantium, fugit molestias nam iste alias
                        necessitatibus dolorum itaque officia magnam tempore vel
                        aliquam quas corporis quae blanditiis ab. Sapiente alias
                        vero, cumque officia maiores eveniet, sit distinctio
                        facilis neque dicta dolorem cupiditate! Harum beatae
                        quam soluta dolorem consectetur accusantium, aut magni
                        impedit. Voluptatum dolorem perferendis quo blanditiis
                        praesentium! Deleniti nobis optio quo laudantium
                        reprehenderit corporis doloribus, eligendi saepe dolor,
                        ipsa inventore nemo ea.
                      </span>
                      <div className="mainimage">
                        <h4>Images</h4>
                        <div className="imagecontent">
                          <img src={Image} alt="" />
                          <ul>
                            <li>
                              <RiDownload2Line />
                            </li>
                            <li>
                              <RiMoreFill />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="allfile">
                        <h4>File</h4>
                        <div className="filecontent">
                          <div className="fileicon">
                            <div className="sec1">
                              <RiFileTextFill />
                            </div>
                          </div>
                          <div className="filedetails">
                            <p>10.pngqqqqqqqqqqqqqqqqqqq</p>
                            <span>15.5MB</span>
                          </div>
                          <div className="icon">
                            <RiDownload2Line />
                          </div>
                          <div className="icon">
                            <RiMoreFill />
                          </div>
                        </div>
                      </div>
                      <div className="typiniganimate">
                        <p>
                          typing
                          <span className="animate-typing">
                            <span className="dot ms-1"></span>
                            <span className="dot ms-1"></span>
                            <span className="dot ms-1"></span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="worldclock">
                      <div className="time">
                        <div className="icon">
                          <RiTimeLine />
                        </div>
                        <div className="clock">
                          <p>01:05</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dot">
                    <HiDotsVertical />
                  </div>
                </div>

                <div className="chatcomplete"></div>
                <div className="username">
                  <span>Patrick Hendricks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="imageupload"></div>
        </div>
        <div className=" you me">
          <div className="All">
            <div className="user">
              <img src={user} alt="" />
            </div>
            <div className="contain">
              <div className="chatcontent">
                <div className="sec1">
                  <div className="chatbg">
                    <div className="msgtext">
                      <span>
                        Hello prince 🔥
                      </span>
                    </div>
                    <div className="worldclock">
                      <div className="time">
                        <div className="icon">
                          <RiTimeLine />
                        </div>
                        <div className="clock">
                          <p>01:05</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dot">
                    <HiDotsVertical />
                  </div>
                </div>

                <div className="chatcomplete"></div>
                <div className="username">
                  <span>Patrick Hendricks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Convers;
