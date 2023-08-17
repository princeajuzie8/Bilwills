import styled from "styled-components";
import { Link } from "react-router-dom";
import signupby from "../Resources/Images/signup.png";
import bgoogle from "../Resources/Images/logingoogle.svg";
import bfacebook from "../Resources/Images/loginfacebook.svg";
import lline from "../Resources/Images/lline.svg";
import Logo from "../Resources/Images/Logo1.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {  useState  } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Main = styled.div`
  background-color: #fff;
  height: auto;
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
font-family: 'Manrope';

body {
  background: #efefef;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
};
  .buyeroverall {
    display: grid;
    grid-template-columns: 1.1fr 1.9fr;
  }

  .bsec1 {
    position: sticky;
    top: 0;
    z-index: 0;
    background-image: url(${signupby});
    background-position: center;
    background-size: cover;
    position: sticky;
    height: 100vh;
    width: 100%;



     

      .figure{
        margin-left: 35px;
      margin-top: 20px;
            height: 50px;
          a{

           img{
            margin-top: 25px;
          
          }
          }
        
        }
    
  }

  .bsec2 {
    background-color: #fff;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .buyernav {
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-self: auto;
      margin-top: 20px;

      p {
        text-decoration: none;
        font-family: "Manrope";
        font-size: 15px;
        color: #1b1c31;
        text-align: end;
        margin-right: 10px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-self: end;
      }

      a {
        text-decoration: none;

        span {
          font-weight: bold;
          color: #32cd32;
          font-size: 14px;
          margin-right: 5px;
          margin-left: 5px;
        }
      }
    }

    .Bform {
      text-align: center;
      margin-top: 10px;
      margin-bottom: 70px;
      padding: 20px 60px;
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f7f9fa;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

      .buyerinfo {
        display: flex;
        flex-direction: row;
        gap: 50px;
        font-size: 20px;
        margin-bottom: 5px;
        font-weight: 6600;

        .personal {
          h4 {
            font-size: 20px;
          }

          p {
            margin-top: 0;
            font-size: 12px;
            color: #7e7e7e;
          }
        }

        .business {
          h4 {
            font-size: 16px;
          }

          p {
            margin-top: 0;
            font-size: 12px;
            color: #7e7e7e;
          }
        }
      }

      .personalform {
        .orwith {
          display: flex;
          text-align: center;
          justify-content: center;
          padding: 10px;
          justify-items: center;
          align-content: center;

          hr {
            width: 20px;
            align-items: center;
          }

          p {
            font-size: 12px;
            padding: 0 4px;
          }

          img {
            margin: 0 4px;
            opacity: 40;
          }
        }

        .bregsocials {
          text-align: center;
          display: flex;
          flex-direction: row;
          margin-top: 10px;
          gap: 10px;
          justify-content: center;

          img {
            border: 1px solid #dedede;
            border-radius: 5px;

            :hover {
              border: 1px solid #36cc36;
              border-radius: 5px;
              cursor: pointer;
            }
          }
        }

        .loginform {
          .bregdetails {
            .a {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              padding: 0 1px;
            }
            width: 400px;
            input {
              margin-top: 14px;
              padding: 14px 15px 15px 15px;
              outline: none;
              border-radius: 5px;
              border: 1px solid #d9d9d9;
            }

            .valid {
              border: 1.8px solid #d9d9d9;
            }

            .invalid {
              border: 1.8px solid red;
            }

            .iforgot {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0;
              padding: 0;
            }

            .bf1 {
              margin-top: 14px;
              padding-bottom: 30px;
              align-items: center;
            }

            .bf1 a {
              text-decoration: none;
            }

            .bf1 p {
              font-size: 11px;
              color: #7e7e7e;
            }

            .bf1 p a {
              font-size: 11px;
              color: red;
            }

            .bf1 label {
              font-size: 11px;
              color: #32cd32;
              font-weight: 600;
              margin-left: 5px;
              margin-right: 20px;
            }

            .signupquest {
              margin-top: 12px;
              display: flex;
              align-items: center;
            }

            .signupquest2 {
              display: flex;
            }

            .phone {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 18px;
              padding: 0 1px;
              align-items: center;
              justify-content: space-between;
            }

            [type="submit"] {
              margin-top: 18px;
              padding: 12px 142px;
              outline: none;
              border-radius: 5px;
              font-size: 15px;
              font-weight: 500;
              color: gray;
              background-color: #efefef;
              cursor: pointer;
            }

            span {
              font-size: 11px;
              display: none;
            }

            .password {
              display: flex;
              flex-direction: row;
              border: 1px solid gray;
              height: fit-content;
              align-items: center;
              justify-content: space-between;
              border: 1px solid;
              margin-top: 14px;
              padding: 14px 15px 15px 15px;
              outline: none;
              border-radius: 5px;
              border: 1px solid #d9d9d9;
              background-color: #fff;

              input {
                margin: 0;
                padding: 0;
                outline: none;
                border: none;
              }

              #psopen {
                cursor: pointer;
              }
              #psclose {
                display: none;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`;

const SignUp = () => {

  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState();
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  let signupbtn = document.getElementById("signUpBtn");
  let popen = document.getElementById("psopen");
  let pclose = document.getElementById("psclose");
  let ptype = document.getElementById("password");

  const passwordopen = () => {
    console.log("clicked me");
    popen.style.display = "none";
    ptype.setAttribute("type", "text");
    pclose.style.display = "block";
  };

  const passwordclose = () => {
    console.log("clicked me");
    pclose.style.display = "none";
    ptype.setAttribute("type", "password");
    popen.style.display = "block";
  };

  const patterns = {
    fullnameregex: /^[a-zA-Z]+ [a-zA-Z]+$/,
    usernameregex:
      /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/,
    emailregex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    phoneregex: /^\d{11}$/,
    passwordregex:
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/,
  };

  const signUpValidate = (field, regex) => {
    if (regex.test(field.value)) {
      field.className = "valid";
    } else {
      field.className = "invalid";
    }

    if (
      fullname.length <= 0 ||
      username.length <= 0 ||
      email.length <= 0 ||
      dob.length === null ||
      password.length <= 0
    ) {
      signupbtn.style.background = "#efefef";
      signupbtn.style.color = "gray";
    } else {
      signupbtn.style.background = "#1b1c31";
      signupbtn.style.color = "aliceblue";
    }
  };


  return (
    <Main>
      <div className="buyeroverall">
        <div className="buyersec1 bsec1">
            <figure>


          <Link to="/">
            {" "}
         <img src={Logo} alt="" />
          </Link>
            </figure>
        </div>

        <div className="buyersec1 bsec2">
          <div className="buyernav">
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span> Login </span>
              </Link>
              
            </p>
          </div>

          <div className="Bform">
            <div className="buyerinfo">
              <div className="personal">
                <h4>Create your account</h4>
                <p>Getting started is easy.</p>
              </div>
            </div>

            <div className="personalform">
              <div className="bregsocials">
                <img
                  src={bgoogle}
                  alt=""
                  className="bgoogle"
                
                />
                <img
                  src={bfacebook}
                  alt=""
                
                />
              </div>

              <div className="orwith">
                <img src={lline} alt="" />
                <p> Or continue with </p>
                <img src={lline} alt="" />
              </div>

              <div className="loginform">
                <form action="" className="bregdetails" >
                  <div className="a">
                    {/* <input
                      type="text"
                      id="fullname"
                      placeholder="Fullname"
                      value={fullname}
                      size={20}
                      required
                      onChange={(e) => setFullName(e.target.value)}
                      onKeyUp={(e) =>
                        signUpValidate(e.target, patterns.fullnameregex)
                      }
                    /> */}
                    <input
                      type="text"
                      name="username"
                      id="lname"
                      placeholder="@username"
                      value={username}
                      size={50}
                      maxLength={18}
                      required
                      onChange={(e) => setUserName(e.target.value)}
                      onKeyUp={(e) =>
                        signUpValidate(e.target, patterns.usernameregex)
                      }
                    />{" "}
                  </div>
                  <span>
                    Username must contain alphanumeric and contain 5 - 12
                    characters{" "}
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    size={50}
                    value={email}
                    maxLength={60}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={(e) =>
                      signUpValidate(e.target, patterns.emailregex)
                    }
                    required
                  />{" "}
                  <span>
                    Username must contain alphanumeric and contain 5 - 12
                    characters{" "}
                  </span>
                  <div className="phone">
                    <PhoneInput
                      defaultCountry="US"
                      placeholder="Enter phone number"
                      value={value}
                      required
                      maxLength={15}
                      onChange={(e) => setValue()}
                      size={22}
                      name="phonenumber"
                    />
                    <input
                      type="date"
                      placeholder="DOB"
                      value={dob}
                      required
                      size={16}
                      max="2006-01-01"
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                    />
                  </div>
                  <span>
                    Username must contain alphanumeric and contain 5 - 12
                    characters{" "}
                  </span>
                  <div className="password">
                    <input
                      type="password"
                      name=""
                      id="password"
                      value={password}
                      placeholder="Password"
                      size={42}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyUp={(e) =>
                        signUpValidate(e.target, patterns.passwordregex)
                      }
                    />{" "}
                    <AiOutlineEyeInvisible
                      size={21}
                      id="psopen"
                      onClick={passwordopen}
                    />
                    <AiOutlineEye
                      size={21}
                      id="psclose"
                      onClick={passwordclose}
                    />
                  </div>
                  <span>
                    Username must contain alphanumeric and contain 5 - 12
                    characters{" "}
                  </span>
                  {/* <div className="signupquest">
                  <p>Do you want to become a seller </p>
                   <div className="signupquest2">
                        <label htmlFor="yes"> Yes </label>
                        <input type="radio" name="yesorno" value='yes' id="yes" />
                        <label htmlFor="no"> No </label>
                        <input type="radio" name="yesorno" value='no' id="no" />
                    </div> 
                </div> */}
                  <input
                    type="submit"
                    name=""
                    id="signUpBtn"
                    value="Create Account"
                 
                  />
                  <div className="bf1">
                    <p>
                      * By signing up, you agree to our{" "}
                      <Link to="/terms">Terms of Use </Link>
                      and to receive Bilwills <br /> emails {"&"} updates and
                      acknowledge that you read our{" "}
                      <Link to="/privacy">Privacy Policy.</Link>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SignUp;
