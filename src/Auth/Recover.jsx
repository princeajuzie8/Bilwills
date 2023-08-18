import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Resources/Images/Logo1.svg"
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
     
      img{
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
    background-color: white;
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
      .submit {
        margin-top: 10px;
        color: white;
        background-color: #7269ef;
        padding: 12px 130px;
        cursor: pointer;
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
`;
const Recover = () => {
  return (
    <Container>
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
            <form action="">
              <br />
              <input
                type="email"
                color="black"
                name=""
                id="name"
                required
                size={40}
                placeholder="Email"
              />
              <br />
              <input
                type="submit"
                value="Continue"
                className="submit"
                size={100}
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
          <p>&copy;2023 BILWILLS.</p>
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
