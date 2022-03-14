import styled, {keyframes} from 'styled-components'

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
const spanAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const h1Animation = keyframes`
  from {
    font-size: 10px;
    opacity: 0.3;
    transform: translate(0px, -250px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const DescriptionStyle = styled.div`
  font-family: Ppopins, sans-serif;
  //background-color: green;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  & > button {
    :hover {
      transition: 1s;
      background-color: #FFB400;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    :after {
      display: flex;
      justify-content: center;
      color: white;
      font-weight: 700;
      border-radius: 90px;
      content: '\\21E8';
      font-size: 40px;
      position: relative;
      top: 0;
      left: 7px;
      width: 50px;
      height: 50px;
      background-color: #FFB400;
    }

    cursor: pointer;
    font-weight: 800;
    color: white;
    background-color: #000000;
    height: 50px;
    border-radius: 90px;
    border: solid 1px #FFC446;
  }

  & > .animationText {
    animation: ${h1Animation} 900ms linear;
  }

  & > h1 {
    & > span {
      animation: ${spanAnimation} 500ms linear infinite;
    }

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