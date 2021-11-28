import styled from 'styled-components'

export const MenuStyle = styled.div`
  position: fixed;
  left: 92%;
  display: flex;
  align-items: center;
  height: 100vh;
  z-index: 10;
  @media (max-width: 550px) {
    display: none;
  }

  & > div {
    height: 30%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;

    & > a:hover {
      transform: scale(1.2);
      transition: 1.1s;
    }

    & > a:hover::after {
      content: attr(title);
      position: relative;
      width: 20px;
      display: block;
      color: floralwhite;
      font-weight: 700;
      left: -75px;
      border-radius: 90px;
      top: -35px;
    }

    & > a {
      text-decoration: underline;
      text-underline-offset: 3px;
      color: grey;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      background-color: #2B2A2A;
      //display: flex;
      //flex-direction: column;
      //align-items: center;
      //justify-content: center;

      & > img {
        width: 60%;
        padding-top: 10px;
      }
    }

    & > a:hover {
      background-color: #FFB400;
    }
  }
`

