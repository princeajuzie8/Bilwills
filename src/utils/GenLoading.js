import styled from "styled-components"
import { InfinitySpin } from "react-loader-spinner"

const Container =   styled.div`
  background: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

`

const GenLoading = () => {
  return (
    <Container>

      <InfinitySpin 
  width='200'
  color="#36404a"
/>
    </Container>
  )
}

export default GenLoading
