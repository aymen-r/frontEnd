import styled from "styled-components";
import Button from "../../components/Login/Button";
import Icon from "../../components/Login/Icon";
import Input from "../../components/Login/Input";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./style.css";
import Layout from "../../components/Layout";
function LoginPage() {
  return (
    <Layout>
      <div className="login-container">
        <MainContainer>
          <WelcomeText>Welcome back</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <ButtonContainer>
            <Button content="Sign Up" />
          </ButtonContainer>
          <LoginWith>dont have an account?</LoginWith>
          <HorizontalRule />

          <Register>Register</Register>
        </MainContainer>
      </div>
    </Layout>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 30vw;
  margin-bottom: 1%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 70vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  //   cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #ffce34 0%, #ffce34 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
// `;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;
const Register = styled.h3`
  cursor: pointer;
`;
export default LoginPage;
