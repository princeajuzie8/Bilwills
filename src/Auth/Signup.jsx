import styled from "styled-components";
import { Link } from "react-router-dom";
import signupby from "../Resources/Images/signup.png";
import bgoogle from "../Resources/Images/logingoogle.svg";
import bfacebook from "../Resources/Images/loginfacebook.svg";
import lline from "../Resources/Images/lline.svg";
import Logo from "../Resources/Images/Logo1.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  userCreateWithEmail,
  userCreateWithGoogle,
  usersLogin,
  usersLogout,
} from "../Redux/slice/UserSlice";
import { TiTick } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import {  useAuthContext } from "../Context/Auth";
import CircularProgress from "@mui/material";
import { RotatingLines } from "react-loader-spinner";
import { db } from "../config/firebase/firebase";
import bcrypt from "bcryptjs";
import { FacebookAuthProvider } from "firebase/auth";
import { Auth } from "../config/firebase/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { where, query, onSnapshot } from "firebase/firestore";
import ReactiveButton from "reactive-button";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  USERNAME_REGEX,
  DOB_REGEX,
} from "../utils/RegexUtils";
import toast, { Toaster } from "react-hot-toast";
import Cookies from 'js-cookie';
const Main = styled.div`
  background-color: #fff;
  height: auto;
  margin: 0;
  font-family: "Manrope";

  body {
    background: #efefef;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
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
    height: 100vh;
    width: 100%;

    .figure {
      margin-top: 0px;

      height: 50px;
      a {
        // padding-top: 50px;

        img {
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
      margin-top: 10px;

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
          color: #7269ef;
          font-size: 14px;
          margin-right: 5px;
          margin-left: 5px;
        }
      }
    }

    .Bform {
      * {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
      }

      text-align: center;
      margin-top: 10px;
      margin-bottom: 20px;
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
              border: 1px solid #7269ef;
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

              .inputfile {
                .sec1 {
                  position: relative;
                  .sec2 {
                    position: absolute;
                    left: 350px;
                    right: 1px;
                    top: 30px;
                    bottom: 5px;
                  }
                }
              }
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
              margin-top: 30px;
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
              color: #7269ef;
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
              margin-top: 15px;

            padding-block: 10px;
              outline: none;
              border-radius: 5px;
              font-size: 15px;
              font-weight: 500;

              cursor: pointer;
              .content{
                color: black;
                font-weight: bold;
              }
            }

            span {
              font-size: 11px;
              display: block;
              color: red;
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
  const  {signUp, GoogleSignin,FacebookSignin} = useAuthContext()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userdata } = useSelector((state) => state.user);
  const { Authcurrent } = useSelector((state) => state.auth);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState(null);
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [profileImg, setProfileImg] = useState(userdata.photoURL);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [userCresidential, setUserCresidential] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidData, setIsValidData] = useState(true);
  const [universalError, setUniversalError] = useState("");
  const [state, setState] = useState("idle");
  const [value, setValue] = useState("");

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    username: "",
    password: "",
    dob: "",
  });

  let signupbtn = document.getElementById("signUpBtn");
  let popen = document.getElementById("psopen");
  let pclose = document.getElementById("psclose");
  let ptype = document.getElementById("password");

  const getButtonColor = () => {
    if (
      !isUsernameTaken &&
      username.length > 0 &&
      email.length > 0 &&
      dob.length > 0 &&
      password.length > 0 &&
      Phone &&
      isValidData
    ) {
      return "#7269ef"; // Blue color when all conditions are met
    } else {
      return "#efefef"; // Grey color when conditions are not met
    }
  };
  

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

  function signUpValidate(fieldName, regex, value, errorMessage) {
    if (!regex.test(value)) {
      setUniversalError("");
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [fieldName]: errorMessage,
      }));
      setIsValidData(false);
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
        
      }));
      setIsValidData(true);

      setUniversalError("");
    }
  }

  // const signUpValidate = (field, regex)  => {

  //   if (regex.test(field.value)) {
  //     field.className = "valid";
  //   } else {
  //     field.className = "invalid";
  //   }

  //   if (

  //     username.length <= 0 ||
  //     email.length <= 0 ||
  //     dob.length === null ||
  //     // isUsernameTaken ||
  //     password.length <= 0
  //   ) {
  //     signupbtn.style.background = "#efefef";
  //     signupbtn.style.color = "gray";
  //     signupbtn.setAttribute("disable", true)
  //   } else {
  //     signupbtn.style.background = "#1b1c31";
  //     signupbtn.style.color = "aliceblue";
  //     signupbtn.removeAttribute("disable")
  //   }
  // };

  const CreateWithGoogle = async () =>{
     try {
       const SignUpGoogle = await GoogleSignin()
       const googleUser = SignUpGoogle.user;

       if(googleUser){

      console.log(googleUser.photoURL)
    await setDoc(doc(db, "users", googleUser.uid), {
      displayName: googleUser.displayName,
      email: googleUser.email,
      password: null,
      uid: googleUser.uid,
      dob: null,
      phoneNumber: null,
      photoURL: googleUser.photoURL,
    });
  
    dispatch(
      userCreateWithGoogle({
        displayName: googleUser.displayName,
        email: googleUser.email,
        password: null,
        uid: googleUser.uid,
        dob: null,
        phoneNumber: googleUser.Phone,
        photoURL: googleUser.photoURL,
      })
           )
       }

     } catch (error) {
      console.log(error)
      
     }
  }
  const CreateWithFacebook = async () =>{
     try {
       const SignUpFacebook = await FacebookSignin()
       const FacebookUser = SignUpFacebook.user;

       if(FacebookUser){

        const credential = FacebookAuthProvider.credentialFromResult(SignUpFacebook);
        const accessToken = credential.accessToken;
        // fetch facebook graph api to get user actual profile picture
        const pictureResponse = await fetch(`https://graph.facebook.com/${FacebookUser.providerData[0].uid}/picture?type=large&access_token=${accessToken}`);
        
        // const pictureBlob = await pictureResponse.blob();
  
        // // Create object URL for rendering (not for storing)
        // const pictureObjectURL = URL.createObjectURL(pictureBlob);
       setProfileImg(pictureResponse.url);
       console.log(pictureResponse.url )
    await setDoc(doc(db, "users", FacebookUser.uid), {
      displayName: FacebookUser.displayName,
      email: FacebookUser.email,
      password: null,
      uid: FacebookUser.uid,
      dob: null,
      phoneNumber: null,
      photoURL: pictureResponse.url,
    });
  
    dispatch(
      userCreateWithGoogle({
        displayName: FacebookUser.displayName,
        email: FacebookUser.email,
        password: null,
        uid: FacebookUser.uid,
        dob: null,
        phoneNumber: FacebookUser.Phone,
        photoURL: pictureResponse.url,
      })
           )
       }

     } catch (error) {
      console.error(error);

      setState("error");
      const notify = () =>
      toast.error(`${getFirebaseErrorCode(error)}`, {   position: "top-right", duration: 4000});

      notify();
      
     }
  }
  useEffect(() => {
    console.log({ "name": userdata.displayName });
  }, [userdata.displayName]);
 
  const getFirebaseErrorCode = (error) => {
    if (error.code) {
      // Split the error message to extract the specific error code
      const errorCode = error.code.split('/')[1];
      return errorCode;
    }
    return 'Unknown error';
  };


  const HandleCreateWithEmail = async (e) => {
    const authToken = Cookies.get("authtoken")
    // console.log(authToken)
    e.preventDefault();
    
    const allFieldsValid = Object.keys(errorMessages).every(
      (field) => !errorMessages[field]
    );
    setIsValidData(allFieldsValid);
    if (!allFieldsValid || !username || !email || !password || !Phone || !dob) {
      const notify = () =>
        toast.error(`Fields may be empty or invalid`, {
          duration: 4000,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#333",
            padding: "6px 14px",
            color: "#fff",
            fontSize: "13px",
          },
        });

      notify();

      return;
    } else {
    }
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      setState("loading");

      if (isUsernameTaken === false) {
       
      
        const userCresidential  = await  signUp(
         
          email,
          hashedPassword
        );

        setUserCresidential(userCresidential);
        console.log(userCresidential);
       console.log(email)
        await setDoc(doc(db, "users", userCresidential.user.uid), {
          displayName: username,
          email: email,
          password: hashedPassword,
          uid: userCresidential.user.uid,
          dob: dob,
          phoneNumber: Phone,
          photoURL: profileImg,
        });
      
        dispatch(
          userCreateWithEmail({
            displayName: username,
            email: email,
            password: hashedPassword,
            id: userCresidential.user.uid,
            dob: dob,
            phone: Phone,
            photoURL: profileImg,
          })
        );
        let toas =  toast.success('Successfully created! 🚀', {   position: "top-right", duration: 4000});
        setTimeout(()=>{
         toast.dismiss(toas)
          // navigate("/login");
        },1000)
    
          setState('success');
      
      }else{
        setState("error");
        toast.error(`username is taken`, {   position: "top-right", duration: 4000});
       


      }

      console.log("username is taken");
    } catch (error) {
      console.error(error);
      setState("error");
      const notify = () =>
      toast.error(`${getFirebaseErrorCode(error)}`, {   position: "top-right", duration: 4000});

      notify();

     
    } 
  };

  useEffect(() => {
    const checkUsernameAvailability = async () => {
      if (username.trim() !== "") {
        if (!USERNAME_REGEX.test(username)) return;
        setIsLoading(true);
        const SearchDelay = setTimeout(async () => {
          const usersRef = collection(db, "users");
          const usernameQuery = query(
            usersRef,
            where("displayName", "==", username)
          );

          const unsubscribe = onSnapshot(usernameQuery, (querySnapshot) => {
            setIsLoading(false);
            if (!querySnapshot.empty) {
              setIsUsernameTaken(true);
              console.log("taken");
              
            } else {
              setIsUsernameTaken(false);
              console.log("available");
            }
          });

          return () => {
            unsubscribe();
            clearTimeout(SearchDelay);
          };
        }, 300);
      } else {
        setIsUsernameTaken(false);
        setIsLoading(false);
      }
    };
 
  


    checkUsernameAvailability();
  }, [username]);



  return (
    <Main>
      <div className="buyeroverall">
        <div className="buyersec1 bsec1">
          <figure>
            <Link to="/">
              {" "}
              <img
                src={Logo}
                alt=""
                style={{
                  marginLeft: "0px",
                }}
              />
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
                <img src={bgoogle} alt="" className="bgoogle" onClick={()=>{
                  CreateWithGoogle()
                }} />
                <img src={bfacebook} alt="" onClick={()=>{CreateWithFacebook()}}/>
              </div>

              <div className="orwith">
                <img src={lline} alt="" />
                <p> Or continue with </p>
                <img src={lline} alt="" />
              </div>

              <div className="loginform">
                <form
                  action=""
                  className="bregdetails"
                  onSubmit={HandleCreateWithEmail}
                >
                  <div className="a">
                    <div className="inputfile">
                      <div className="sec1">
                        <input
                          type="text"
                          name="username"
                          id="lname"
                          placeholder="@username"
                          value={username}
                          autoComplete="off"
                          size={50}
                          maxLength={18}
                          required
                          onChange={(e) => {
                            setUserName(e.target.value);
                            signUpValidate(
                              "username",
                              USERNAME_REGEX,
                              e.target.value,
                              "username start with letter, may include numbers or underscore(_)"
                            );
                          }}
                        />{" "}
                        <div className="sec2">
                          {!isLoading &&
                            !isUsernameTaken &&
                            username.trim() !== "" && (
                              <TiTick
                                style={{
                                  color: "green",
                                }}
                              />
                            )}
                          {isUsernameTaken && !isLoading && (
                            <FaTimes
                              style={{
                                color: "red",
                              }}
                            />
                          )}

                          {isLoading && (
                            <RotatingLines
                              height={20}
                              width={20}
                              color="#4fa94d"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                              ariaLabel="oval-loading"
                              secondaryColor="#4fa94d"
                              strokeWidth={2}
                              strokeWidthSecondary={2}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {errorMessages.username && username && (
                    <span>{errorMessages.username}</span>
                  )}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    size={50}
                    value={email}
                    maxLength={60}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      signUpValidate(
                        "email",
                        EMAIL_REGEX,
                        e.target.value,
                        "Please enter a valid email address."
                      );
                    }}
                    required
                  />{" "}
                  {errorMessages.email && email && <span>{errorMessages.email}</span>}
                  <div className="phone">
                    <PhoneInput
                      defaultCountry="US"
                      placeholder="Enter phone number"
                      value={Phone}
                      required
                      maxLength={15}
                      // onChange={(e) => setPhone(e.target.value)}
                      onChange={setPhone}
                      size={22}
                      name="phonenumber"
                    />
                    {!isPossiblePhoneNumber(String(value)) && value ? (
                      <span>Enter a valid phone</span>
                    ) : (
                      ""
                    )}
                    <input
                      type="date"
                      placeholder="DOB"
                      value={dob}
                      required
                      size={16}
                      max="2006-01-01"
                      onChange={(e) => {
                        setDob(e.target.value);
                        signUpValidate(
                          "dob",
                          DOB_REGEX,
                          e.target.value,
                          "Enter a valid date"
                        );
                      }}
                    />
                  </div>
                  {errorMessages.dob && <span>{errorMessages.dob}</span>}
                  <div className="password">
                    <input
                      type="password"
                      name=""
                      id="password"
                      value={password}
                      placeholder="Password"
                      size={42}
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                        signUpValidate(
                          "password",
                          PASSWORD_REGEX,
                          e.target.value,
                          "Password must be 8 characters or more with at least one uppercase letter, one lowercase letter, one digit, and one special character (@#$%^&*!)"
                        );
                      }}
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
                  {errorMessages.password && password && (
                    <span>{errorMessages.password}</span>
                  )}
                  {/* <ReactiveButton
                  
                  
                   
                    name=""
                    block={true}
                    value="Create Account"
                    buttonState={state}
                   
                    loadingText="Loading"
                    successText="Done"
                    onClick={HandleCreateWithEmail}
                    className="loginsubmitbtn"
                   
                  /> */}
                        <ReactiveButton
                         type="submit"
                         id="signUpBtn"
            buttonState={state}
            onClick={HandleCreateWithEmail}
            loadingText="Loading"
            idleText="Submit"
            successText="Done"
            rounded
           
            style={{
              background: getButtonColor(),
              color: getButtonColor() === "#efefef" ? "gray" : "aliceblue",
            }}
          
        />
                  <div className="bf1">
                    {universalError && (
                      <span className="errorMessage">{universalError}</span>
                    )}

                    <p>
                      * By signing up, you agree to our{" "}
                      <Link to="/terms">Terms of Use </Link>
                      and to receive Bilwills <br /> emails {"&"} updates and
                      acknowledge that you read our{" "}
                      <Link to="/privacy">Privacy Policy.</Link>{" "}
                    </p>
                  </div>
            
                </form>
                {/* <img src={userdata.photoURL} alt="" />
                <p>{userdata.displayName}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </Main>
  );
};

export default SignUp;
