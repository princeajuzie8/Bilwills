import styled from "styled-components";
import Internetbg from "../Resources/Images/internet.svg";

const Container = styled.div`
  * ::before,
  ::after {
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;
  height: 100vh;
  background-color: transparent;
  width: 100vw;
  margin-top: auto;
  img {
    object-fit: cover;
    width: 60%;
    height: 70%;
  }
`;
const NoInternet = () => {
  return (
    <Container>
      <img src={Internetbg} alt="" draggable={false}/>
    </Container>
  );
};

export default NoInternet;
