import styled from 'styled-components'

export const MainStyle = styled.div`
  background-color: #111;
  min-height: 80vh;
`
export const AvatarStyle = styled.div`
  box-shadow: 0 0 30px #FFB400;
  width: 700px;
  position: relative;
  top: 50px;
  left: -195px;
  height: 100vh;
  background-color: #FFB400;
  transform: matrix(1.00, 0.00, 0.30, 1.00, -21, -50);
  @media (max-width: 1350px) {
    display: none;
  }

  //& > img {
  //  transform: matrix(1, 0, 0, 1, 0, 0);
  //  position: relative;
  //  left: 400px;
  //  width: 50%;
  //  //height: 500px;
  //}
`

export const DescriptionStyle = styled.div`
  font-family: Ppopins, sans-serif;
  //background-color: green;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  & > h1 {
    font-size: 35px;
    font-weight: 800;
    letter-spacing: 1px;
    line-height: 30px;
    color: #FFB400;
    width: 60%;
    @media (max-width: 500px) {
      width: 90%;
      font-size: 33px;
    }
    @media (max-width: 330px) {
      width: 70%;
      font-size: 26px;
    }
  }

  & > h1:nth-child(2) {
    color: white;
  }

  & > p {
    @media (max-width: 500px) {
      width: 90%;
    }
    @media (max-width: 330px) {
      width: 70%;
    }
    color: white;
    width: 60%;
    font-weight: 500;
    font-size: 17px;
  }
`