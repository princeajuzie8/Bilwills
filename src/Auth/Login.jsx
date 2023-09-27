import styled from "styled-components";
import { Link } from "react-router-dom";
import signinbg from "../Resources/Images/signinbg.png";
import lgoogle from "../Resources/Images/logingoogle.svg";
import lfacebook from "../Resources/Images/loginfacebook.svg";
import lline from "../Resources/Images/lline.svg";
import { useState } from "react";
import Logo from "../Resources/Images/Logo1.svg"
import { useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import ReactiveButton from "reactive-button";
import toast, { Toaster } from "react-hot-toast"
import { getDocs, doc, collection, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FacebookAuthProvider } from "firebase/auth";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../utils/RegexUtils";
import { useAuthContext } from "../Context/Auth";
import { db } from "../config/firebase/firebase";
import bcrypt from "bcryptjs";
import { where, query, onSnapshot } from "firebase/firestore";
import { fetchUserDataFromFirestore } from "../Redux/persist";
import { Auth } from "../config/firebase/firebase";
import { setUser } from "../Redux/slice/AuthSlice";
import { usersLogin } from "../Redux/slice/UserSlice";

const Main = styled.div`
  background-color: #fff;
  * {
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
    }

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
  .Signinmain {
    display: grid;
    grid-template-columns: 1.9fr 1fr;

    .Signinsec1 {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .Loginnav {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;
        flex-direction: row;

        .lsignup {
          font-size: 14px;
          margin-left: 10px;
          padding-top: 15px;
          text-decoration: none;
          font-family: "Manrope";
          font-size: 15px;
          color: #1b1c31;
          text-align: end;
          margin-right: 10px;

          a {
            font-weight: bold;
            color: #7269ef;
            font-size: 14px;
            margin-right: 5px;
            margin-left: 5px;
            text-decoration: none;
          }
        }
      }

      .Loginform {
        text-align: center;
        padding: 40px 50px;
        margin-left: auto;
        margin-top: 20px;
        margin-right: auto;
        max-width: 500px;
        justify-content: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        background-color: #f7f9fa;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
          rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

        h4 {
          font-size: 20px;

          span {
            font-size: 14px;
          }
        }

        .loginform p {
          margin-top: 15px;
          font-size: 14px;
          margin-bottom: 20px;
          color: #2c2e56;
        }

        .loginsocials {
          text-align: center;
          display: flex;
          flex-direction: row;
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

        .orwith {
          display: flex;
          text-align: center;
          justify-content: center;
          justify-items: center;
          align-content: center;
          margin-top: 10px;
        }

        .orwith hr {
          width: 20px;
          align-items: center;
        }

        .orwith p {
          font-size: 12px;
        }

        .orwith img {
          margin: 0 4px;
          opacity: 90;
        }

        .logindetails {
          input {
            margin-top: 20px;
            padding: 15px 0 15px 15px;
            outline: none;
            border-radius: 5px;
            border: 1px solid #d9d9d9;
          }

          input.valid {
            border: 1.8px solid #d9d9d9;
          }

          input.invalid {
            border: 1.8px solid red;
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

        .forgot {
          text-align: start;
          margin-top: 25px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          p {
            font-size: 12px;
            color: #3c3a3a;
          }

          span {
            font-size: 12px;
            color: #3c3a3a;

            a {
              font-size: 13px;
              color: red;
              text-decoration: none;
            }
          }
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
      }
    }

    .Signinsec2 {
      position: sticky;
      top: 0;
      z-index: 0;
      background-image: url(${signinbg});
      background-position: center;
      background-size: cover;
      height: 100vh;
      width: 100%;
      text-align: end;

      a {
        text-decoration: none;
        font-family: "Manrope";
        font-size: 33px;
       
        font-weight: bold;
        color: #1b1c31;


        figure{
          margin-right: 30px;
          margin-top: 10px;
          img{
            height: 40px;
          }
        }
      }
    }
  }
  .go3958317564{
    padding-left: 10px;
  }
`;

const Login = () => {

const navigate = useNavigate()
  const {SignIn,GoogleSignin,FacebookSignin,updateUserInfo, userInfo,loading,setLoading} = useAuthContext()
  const [useremail, setuserEmail] = useState("");
  const [userpassword, setuserPassword] = useState("");
  const dispatch = useDispatch()
  let loginbtn = document.getElementById("loginbtn");
  const [state, setState] = useState("idle");
  let popen = document.getElementById("psopen");
  let pclose = document.getElementById("psclose");
  let ptype = document.getElementById("password");
  const [isValidData, setIsValidData] = useState(true);
  const { userdata } = useSelector((state) => state.user);
  const [universalError, setUniversalError] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    username: "",
    password: "",
    dob: "",
  });

  const getButtonColor = () => {
    if (
      useremail.length > 0 &&
      userpassword.length > 0 &&
    
      isValidData
    ) {
      return "#7269ef"; // Blue color when all conditions are met
    } else {
      return "#efefef"; // Grey color when conditions are not met
    }
  };
  function validateLogin(fieldName, regex, value, errorMessage) {
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


  const getFirebaseErrorCode = (error) => {
    if (error.code) {
      // Split the error message to extract the specific error code
      const errorCode = error.code.split('/')[1];
      return errorCode;
    }
    return 'Unknown error';
  };

  console.log("userinfo", userInfo);
  
  const HandleLogWithEmail = async (e) => {
    e.preventDefault();
    const allFieldsValid = Object.keys(errorMessages).every(
      (field) => !errorMessages[field]
    );
    setIsValidData(allFieldsValid);
    if (!allFieldsValid || !useremail || !userpassword) {
      const notify = () =>
        toast.error(`Fields may be empty or invalid`, {
          style: {
            borderRadius: '10px',
            padding: '6px 14px',
            fontSize: '13px',
          },
          position: 'top-right',
          duration: 4000,
        });
  
      notify();
      return;
    }
  
    try {
      setState('loading');
  
      // Sign in the user using Firebase Authentication
      await SignIn( useremail, userpassword);
  
      // Fetch user data from Firestore based on the user's UID (assuming user UID is available in auth.currentUser)
      const userDocRef = doc(db, 'users', Auth.currentUser.uid);
      const userDocSnapshot = await getDoc(userDocRef);
      console.log("snapshort",userDocSnapshot );
  
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
       
        // Update user info (replace this with your actual function)
        dispatch(
          usersLogin({
            displayName: userData.displayName,
            email: userData.email,
            id: userData.uid,
            dob: userData.dob,
            phone:userData.phone,
            photoURL: userData.photoURL,
          })
        );
        updateUserInfo(userData)
        console.log("userinfo", userInfo);
        console.log("userdata fire", userData);
  
        let toastId = toast.success('Logged in successfully! 🚀', {
          style: {
            borderRadius: '10px',
            padding: '6px 14px',
            fontSize: '13px',
          },
          position: 'top-right',
          duration: 4000,
        });
  
        setTimeout(() => {
          toast.dismiss(toastId);
          navigate('/');
        }, 1000);
  
        setState('success');
      }
    } catch (error) {
      console.error(error);
      setState('error');
  
      const notify = () =>
        toast.error(`${getFirebaseErrorCode(error)}`, {
          style: {
            borderRadius: '10px',
            padding: '6px 14px',
            fontSize: '13px',
          },
          position: 'top-right',
          duration: 4000,
        });
  
      notify();
    }
  };
  
 const CreateWithGoogle = async (e) =>{
  e.preventDefault();

  try {
    const SignUpGoogle = await GoogleSignin();
    const googleUser = SignUpGoogle.user;
   
    if (googleUser) {
      const originalDisplayName = googleUser.displayName || "";
      const cleanedDisplayName = originalDisplayName.replace(
        /[^a-zA-Z\s]/g,
        ""
      );

      // Replace consecutive spaces with an empty string
      const trimmedDisplayName = cleanedDisplayName.replace(/\s+/g, "");

      console.log("Cleaned displayName:", trimmedDisplayName);
      const timestamp = new Date(); // Convert Firestore timestamp to a JavaScript Date object
      const formattedDate = `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()}`;
      await setDoc(doc(db, "users", googleUser.uid), {
        displayName: trimmedDisplayName,
        email: googleUser.email,
        uid: googleUser.uid,
        dob: null,
        phoneNumber: null,
        photoURL: googleUser.photoURL,
        createdAt: formattedDate,
      });
      await setDoc(doc(db, "userChats", googleUser.uid), {
          
      })

      dispatch(
        usersLogin({
          displayName: trimmedDisplayName,
          email: googleUser.email,
          uid: googleUser.uid,
          dob: null,
          phoneNumber: googleUser.Phone,
          photoURL: googleUser.photoURL,
          createdAt: formattedDate,
        })
      );
      // updateUserInfo(userdata);
      let toas = toast.success("Successfully created! 🚀", {
        position: "top-right",
        duration: 4000,
      });
      setTimeout(() => {
        toast.dismiss(toas);
        navigate("/ ");
      }, 1000);
    }
  }catch (error) {
      console.log(error)
      toast.error(`${getFirebaseErrorCode(error)}`,{  style: {
        borderRadius: '10px',
        padding: '6px 14px',
        fontSize: '13px',
      },  position: "top-right", duration: 4000});
  
     }
  }
 const LogWithFacebook = async (e) =>{
  e.preventDefault();
  try {
    const SignUpFacebook = await FacebookSignin();
    const FacebookUser = SignUpFacebook.user;

    if (FacebookUser) {
      const credential =
        FacebookAuthProvider.credentialFromResult(SignUpFacebook);
      const accessToken = credential.accessToken;
      // fetch facebook graph api to get user actual profile picture
      const pictureResponse = await fetch(
        `https://graph.facebook.com/${FacebookUser.providerData[0].uid}/picture?type=large&access_token=${accessToken}`
      );

      // const pictureBlob = await pictureResponse.blob();

      // // Create object URL for rendering (not for storing)
      const originalDisplayName = FacebookUser.displayName || "";
      const cleanedDisplayName = originalDisplayName.replace(
        /[^a-zA-Z\s]/g,
        ""
      );

      // Replace consecutive spaces with an empty string
      const trimmedDisplayName = cleanedDisplayName.replace(/\s+/g, "");
      // const pictureObjectURL = URL.createObjectURL(pictureBlob);
   
      const timestamp = new Date(); // Convert Firestore timestamp to a JavaScript Date object
      const formattedDate = `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()}`;
      await setDoc(doc(db, "users", FacebookUser.uid), {
        displayName: trimmedDisplayName,
        email: FacebookUser.email,
        uid: FacebookUser.uid,
        dob: null,
        phoneNumber: null,
        photoURL: pictureResponse.url,
        createdAt: formattedDate,
      });
      // updateUserInfo(userdata);
      await setDoc(doc(db, "userChats", FacebookUser.uid), {
          
      })
      dispatch(
        usersLogin({
          displayName: trimmedDisplayName,
          email: FacebookUser.email,
          uid: FacebookUser.uid,
          dob: null,
          phoneNumber: FacebookUser.Phone,
          photoURL: pictureResponse.url,
          createdAt: formattedDate,
        })
      );
      let toas = toast.success("Successfully created! 🚀", {
        position: "top-right",
        duration: 4000,
      });
      setTimeout(() => {
        toast.dismiss(toas);
        navigate("/login");
      }, 1000);
    }
  } catch (error){
    toast.error(`${getFirebaseErrorCode(error)}`,{  style: {
      borderRadius: '10px',
      padding: '6px 14px',
      fontSize: '13px',
    },  position: "top-right", duration: 4000});

  }


 }

  return (
    <Main>
      <div className="Signinmain">
        <div className="Signinsec1">
          <div className="Loginnav">
            {/* <Link to="/" className="logo">
              {" "}
              Quick<span>baya</span>{" "}
            </Link> */}
            <div className="lsignup">
              <p>
                Don’t have an account? <Link to="/signup"> Sign Up</Link>{" "}
              </p>
            </div>
          </div>

          <div className="Loginform">
            <div className="loginform">
              <h4>
                Hello 👋,  Welcome Back! 
              </h4>
              <p>Login into your account</p>
            </div>

            <div className="loginsocials" >
              <img
                src={lgoogle}
                alt=""
                className="lgoogle"
                onClick={CreateWithGoogle}
              />
              <img
                src={lfacebook}
                alt=""
                className="lfacebook"
               onClick={LogWithFacebook}
              />
            </div>

            <div className="orwith">
              <img src={lline} alt="" />
              <p> Or continue with </p>
              <img src={lline} alt="" />
            </div>

            <form action="" className="logindetails"  onSubmit={HandleLogWithEmail}>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                value={useremail}
                size={52}
                required
                onChange={(e) => {
                  setuserEmail(e.target.value);
                  validateLogin(
                    "email",
                    EMAIL_REGEX,
                    e.target.value,
                    "Please enter a valid email address."
                  );
                }}
              />{" "}
              <br required />
              {errorMessages.email && useremail && <span>{errorMessages.email}</span>}
              <div className="password">
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Password"
                  size={42}
                  required
                  value={userpassword}
                  onChange={(e) => {
                    setuserPassword(e.target.value);
                    validateLogin(
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
                <AiOutlineEye size={21} id="psclose" onClick={passwordclose} />
              </div>
              {errorMessages.password && userpassword && (
                    <span>{errorMessages.password}</span>
                  )}
              <ReactiveButton
                         type="submit"
                         id="signUpBtn"
            buttonState={state}
            onClick={HandleLogWithEmail}
            loadingText="Loading"
            idleText="Submit"
            successText="Done"
            rounded
           
            style={{
              background: getButtonColor(),
              color: getButtonColor() === "#efefef" ? "gray" : "aliceblue",
            }}
          
        />
              <div className="forgot">
                <p>Dont remember your password? </p>
                <span>
                  Click here,{" "}
                  <Link to="/recover"> Forgot Password </Link>{" "}
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="Signinsec2">
          <Link to="/">
            {" "}
          <figure>
            <img src={Logo} alt="" />
          </figure>
          </Link>
        </div>
      </div>
      <Toaster />
    </Main>
  );
};

export default Login;
