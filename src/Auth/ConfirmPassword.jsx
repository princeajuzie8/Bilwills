import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Resources/Images/Logo1.svg";
import { useState, useEffect } from "react";
import { PASSWORD_REGEX, CONFIRM_REGEX } from "../utils/RegexUtils";
import { useAuthContext } from "../Context/Auth";
import ReactiveButton from "reactive-button";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }
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

  .logo {
    margin-top: 50px;
    text-align: center;

    a {
      text-decoration: none;
      font-family: "Manrope";
      font-size: 33px;
      font-weight: bold;
      color: #1b1c31;
      margin-bottom: 35px;
      display: flex;
      align-items: center;

      img {
        height: 45px;
      }

      span {
        color: #7269ef;
      }
    }
  }
  .background {
    width: fit-content;
    margin-top: 10px;
    padding: 50px 80px;
    border: none;
    background-color: #f7f9fa;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.4s;
    margin-left: auto;
    margin-right: auto;
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    h4 {
    }

    .text {
      margin: 15px;

      p {
        margin-top: 10px;
        font-size: 12px;
        font-weight: normal;
        word-spacing: 1px;
        color: #666161;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
      }
      .sec1 {
        display: flex;
        align-items: center;
      position: relative;
        width: 100%;
        gap: 5px;
        :nth-child(2) {
        }
        .eye{
          position: absolute;
          top: 15px;
          right: 0;
          left: 350px;
          font-size: 18px;
          bottom: 7;
        }
      }
      input {
        outline: none;
        border: 1px solid #d9d9d9;
        padding: 15px 0 15px 15px;
        color: black;
        font-family: sans-serif;
        border-radius: 5px;
        width: calc(400px + 2px); 
        background-color: transparent;
        margin-bottom: 10px;
      }

      #signUpBtn {
              margin-top: 10px;

            padding-block: 10px;
              outline: none;
              border-radius: 5px;
              font-size: 15px;
              font-weight: 500;

              cursor: pointer;
            }
            .content{
              color: black;
              font-weight: bold;
            }
            .error {
              font-size: 11px;
              margin-top: -10px;
              display: block;
            width: 300px;
              color: red;
            }
      .signup {
        margin-top: 0%;
        align-items: center;
        p {
          font-size: 13px;
          font-weight: normal;
          color: gray;
          a {
            margin-left: 6px;
            font-size: 14px;
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 30px;
    p {
      font-size: 14px;
      font-weight: 450;
      text-align: center;
      margin-right: 15px;
      font-size: 12px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
  .go3958317564 {
    padding-left: 10px;
  }

`;

const UseQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};
const ConfirmPassword = () => {
  const { ConfirmPassword, Passwordchange } = useAuthContext();
  const { auth } = useSelector((state) => state.auth);
  const [passWordeye,setPasswordeye] = useState(true)
  const [passWordeye2,setPasswordeye2] = useState(true)
  const [newPaasword, setNewpassword] = useState("");
  const [conPaasword, setconpassword] = useState("");
  const [isValidData, setIsValidData] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const [state, setState] = useState("idle");
  const [universalError, setUniversalError] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    password: "",
    Confirmpassword: "",
  });
  const navigate = useNavigate();

  const query = UseQuery();
  console.log(query.get("oobCode"));
  const getFirebaseError = (error) => {
    if (error.code) {
      const errorcode = error.code.split("/")[1];
      return errorcode;
    }
    return "unkwown error";
  };

  const getButtonColor = () => {
    if (newPaasword === conPaasword&& isValidData &&  conPaasword !== "") {
      return "#7269ef"; // Blue color when all conditions are met
    } else {
      return "#efefef"; // Grey color when conditions are not met
    }
  };
  const toggleEye = ()=>{
    setPasswordeye((prev)=> !prev)
  }
  const toggleEyes = ()=>{
    setPasswordeye2((prev)=> !prev)
  }

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

 
    useEffect(() => {
    if (!isInitialRender) {
      if (newPaasword === conPaasword && conPaasword !== '') {
        setPasswordMatch(true);
      } else if (newPaasword !== '' && newPaasword !== conPaasword){
        setPasswordMatch(false);
      }

      // Clear the message after 3 seconds (3000 milliseconds)
      const timer = setTimeout(() => {
        setPasswordMatch(null);
      }, 1000);

      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
    } else {
      setIsInitialRender(false);
    }
  }, [newPaasword, conPaasword, isInitialRender]);
  const Reset = async (e) => {
    e.preventDefault();
    const allFieldsValid = Object.keys(errorMessages).every(
      (field) => !errorMessages[field]
    );
    setIsValidData(allFieldsValid);
    if (!allFieldsValid || !newPaasword || !conPaasword  === newPaasword) {
      const notify = () =>
      toast.error(`Fields may be empty or invalid`, {  style: {
        borderRadius: '10px',
        padding: '6px 14px',
        fontSize: '13px',
      },  position: "top-right", duration: 4000}
      );
  
    notify();
   
    
      return;
    } else {
    }
    setState("loading");
    if (newPaasword !== conPaasword) {
      toast.error(`password did not match`, {
        style: {
          borderRadius: "10px",
          padding: "6px 14px",
          fontSize: "13px",
        },
        position: "top-right",
        duration: 4000,
      });
      setState("error");
      return;
    }

    if (!query.get("oobCode") || !conPaasword) {
     
      toast.error(`Invalid input: oobCode and Paasword are required.`, {
        style: {
          borderRadius: "10px",
          padding: "6px 14px",
          fontSize: "13px",
        },
        position: "top-right",
        duration: 4000,
      });
      setState("error");
       throw new Error('Invalid input: oobCode and Paasword are required')

      // Display the error message to the user, e.g., using a toast or alert.
      return;
    }
    try {
      await ConfirmPassword(query.get("oobCode"), conPaasword);
      //  await ConfirmPassword(conPaasword)
      setState("sucesss");
      console.log(conPaasword);
      const taoster = toast.success(`password Reset successfully`, {
        style: {
          borderRadius: "10px",
          padding: "6px 14px",
          fontSize: "13px",
        },
        position: "top-right",
        duration: 4000,
      });

      setTimeout(() => {
        toast.dismiss(taoster);
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error(`${getFirebaseError(error)}`, {
        style: {
          borderRadius: "10px",
          padding: "6px 14px",
          fontSize: "13px",
        },
        position: "top-right",
        duration: 4000,
      });
      setState("error");
      console.log(error);
    }
  };
  const year = new Date().getFullYear()
  return (
    <Container>
      <div className="general">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="background">
          <h4>Reset your password:</h4>

          <div className="text">
            <p>
              Enter the email address associated with your account
              <br />
              and we will send you a link to reset your password
            </p>
          </div>

          <div className="form">
            <form action="" onSubmit={Reset}>
              <div className="sec1">
                <br />
                {/* <label htmlFor="name">New Password:</label> */}
                <input
                  type={passWordeye2 ? "password" : "text"}
                  color="black"
                  name=""
                  id="name"
                  required
                  
                  placeholder="New Password"
                  onChange={(e) => {
                    setNewpassword(e.target.value);
                    validateLogin(
                      "password",
                      PASSWORD_REGEX,
                      e.target.value,
                      "Password must be 8 characters or more with at least one uppercase letter, one lowercase letter, one digit, and one special character (@#$%^&*!)"
                    );
                  }}
                />
                  {passWordeye2 ? <AiOutlineEyeInvisible onClick={toggleEyes} className="eye"/>   : <AiOutlineEye onClick={toggleEyes} className="eye"/>}
              </div>
             
              {errorMessages.password && newPaasword && (
                    <span className="error">{errorMessages.password}</span>
                  )}
              <div className="sec1">
                <br />
                {/* <label htmlFor="name">Confirm Password:</label> */}
                <input
                  type={passWordeye ? "password" : "text"}
                  color="black"
                  name=""
                  id="name"
                  required

                 
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setconpassword(e.target.value);
                   
                  }}
                />
                {passWordeye? <AiOutlineEyeInvisible onClick={toggleEye} className="eye"/>   : <AiOutlineEye onClick={toggleEye} className="eye"/>}
              </div>
              {passwordMatch === true ?  (
              
                <span style={{ color: 'green',
              fontSize: "11px", }}>Passwords match!</span>
      ) : passwordMatch === false ? (
        <span style={{ color: 'red',fontSize: "11px",  }}>Passwords do not match.</span>
      ) : null /* Only show the message when passwords are checked */}

               
              <br />
              <ReactiveButton
                type="submit"
                id="signUpBtn"
                buttonState={state}
              onClick={()=>{Reset()}}
                loadingText="Loading"
                idleText="Submit"
                successText="Done"
                block={true}
                rounded
                disabled={newPaasword === conPaasword&& isValidData &&  conPaasword !== ""? false : true}
                style={{
                  background: getButtonColor(),
                  color: getButtonColor() === "#efefef" ? "gray" : "aliceblue",
                }}
              />
            </form>
            <div className="signup">
              <p>
                Already have an account? <Link to={"/login"}>Login In </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>&copy;{year} BILWILLS.</p>
          <p>
            <a href="helpcenter">Help Center</a>
          </p>
          <p>
            <a href="privacy">Privacy</a>
          </p>
          <p>
            <a href="terms">Terms</a>
          </p>
        </div>
      </div>
      <Toaster />
    </Container>
  );
};

export default ConfirmPassword;
