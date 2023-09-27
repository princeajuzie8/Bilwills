import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Resources/Images/Logo1.svg";
import { useAuthContext } from "../Context/Auth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { EMAIL_REGEX } from "../utils/RegexUtils";
import ReactiveButton from "reactive-button";
import { useNavigate } from "react-router-dom";
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
    padding: 80px 100px;
    border: none;
    background-color: #f7f9fa;
    border-radius: 5px;

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
      input {
        outline: none;
        border: 1px solid #d9d9d9;
        padding: 15px 0 15px 15px;
        color: black;
        font-family: sans-serif;
        border-radius: 5px;
        background-color: transparent;
        margin-bottom: 10px;
      }
     #signUpBtn {
              margin-top: 15px;

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
            span {
              font-size: 11px;
              display: block;
              color: red;
            }
      .signup {
        margin-top: 5%;
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
const Recover = () => {
  const { ResetPassword } = useAuthContext();
  const [email, setEmail] = useState("");
  const [isValidData, setIsValidData] = useState(true);
  const [universalError, setUniversalError] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    email: "",
  });
  const [state, setState] = useState("idle");

  const getButtonColor = () => {
    if (email.length > 0 && isValidData) {
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

  const navigate = useNavigate();
  const getFirebaseError = (error) => {
    if (error.code) {
      const errorCode = error.code.split("/")[1];
      return errorCode;
    }
    return "unknown error";
  };
  const HandleReset = async (e) => {
    e.preventDefault();
    const allFieldsValid = Object.keys(errorMessages).every(
      (field) => !errorMessages[field]
    );
    setIsValidData(allFieldsValid);
    if (!allFieldsValid || !email  ) {
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
    try {
     await ResetPassword(email);
     const taoster = toast.success(
       `a Reset Password link has been send to this ${email}`,
       {
         style: {
           borderRadius: "10px",
           padding: "6px 14px",
           fontSize: "13px",
         },
         position: "top-right",
         duration: 4000,
       }
     );
     setState('success');

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
      console.log(error);
      setState("error");
    }
  };
  const date = new Date().getFullYear();
  return (
    <Container>
      <Toaster />
      <div className="general">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="background">
          <h4>Reset your password</h4>

          <div className="text">
            <p>
              Enter the email address associated with your account
              <br />
              and we will send you a link to reset your password
            </p>
          </div>

          <div className="form">
            <form action="" onSubmit={HandleReset}>
              <br />
              <input
                type="email"
                color="black"
                name=""
                id="name"
                size={40}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateLogin(
                    "email",
                    EMAIL_REGEX,
                    e.target.value,
                    "Please enter a valid email address."
                  );
                }}
              />
              <br />
              {errorMessages.email && email && <span>{errorMessages.email}</span>}
              <br />
              <ReactiveButton
                type="submit"
                id="signUpBtn"
                buttonState={state}
                onClick={HandleReset}
                loadingText="Loading"
                idleText="Submit"
                successText="Done"
                rounded
                style={{
                  background: getButtonColor(),
                  color: getButtonColor() === "#efefef" ? "gray" : "aliceblue",
                }}
              />
            </form>
            <div className="signup">
              <p>
                Already have an account? <Link to={"/login"}>LogIn </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>&copy;{date} BILWILLS.</p>
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
    </Container>
  );
};

export default Recover;
