import styled, {keyframes} from 'styled-components'

export const ModalStyle = styled.div`
  border-radius: 15px;
  border: solid 2px darkgrey;
  min-width: 350px;
  width: 70%;
  background-color: #000000;
  overflow: auto;
  height: 70vh;
  @media (max-width: 720px) {
    height: 82vh;
  }
`
export const ModalHeadStyle = styled.div`

  @media (max-width: 720px) {
    margin: 10px 0;
    & > button {
      display: block;
      position: absolute;
      top: -85px;
    }
  }
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;

  & > button {
    :hover > hr {
      transition: 500ms;
      transform: rotate(0deg);
      top: 0px;
    }

    :hover :first-child {
      top: 0px;
    }

    :hover {
      background-color: #FFB400;
    }

    & > :first-child {
      position: relative;
      top: 5px;
      transform: rotate(-45deg);
    }

    & > hr {
      width: 45px;
      position: relative;
      top: -7px;
      border: none;
      transform: rotate(45deg);
      background-color: white;
      height: 6px;
      border-radius: 90px;
    }

    margin: 80px 0;
    align-self: flex-start;
    cursor: pointer;
    border: solid 2px #FFB400;
    background-color: #000000;
    border-radius: 90px;
    width: 60px;
    height: 60px;
    color: black;
  }
`
const h2Animation = keyframes`
  from {
    transform: translate(250px, 0px);
  }
  to {
    //transform: translate(0px, 0px);
  }
`

export const AboutMeStyle = styled.div`
  & > h2 {
    animation: ${h2Animation} 1s linear;
    position: relative;
    top: -93px;
    letter-spacing: 3px;
    font-size: 60px;
    opacity: 0.2;
    height: 0;
    color: white;
  }

  & > h1 {
    & > span {
      color: white;
    }

    margin-top: 50px;
    height: 0;
    color: #FFB400;
    font-size: 30px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > .personalInfo {
    width: 100%;
    //background-color: silver;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    & > .exp {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;

      & > .childExp {
        margin: 10px 0;
        width: 240px;
        height: 170px;

        & > div {
          border-radius: 10px;
          background-color: #000000;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          height: 170px;
          border: solid 1px grey;
          text-align: left;

          & > h1 {
            height: 0;
            font-size: 50px;
            padding-left: 20px;
            color: #FFB400;
          }

          & > p {
            & > span {
              font-size: 30px;
            }

            width: 150px;
            align-self: flex-end;
            padding-left: 45px;
            color: white;
            font-size: 20px;
          }
        }
      }
    }

    & > div {
      & > button {
        &:hover {
          transition: 1s;
          background-color: #FFB400;
        }

        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:after {
          display: flex;
          justify-content: center;
          color: white;
          font-weight: 700;
          border-radius: 90px;
          content: '\\21E9';
          font-size: 30px;
          position: relative;
          top: 0;
          left: 19px;
          width: 38.5px;
          height: 38px;
          background-color: #FFB400;
        }

        background-color: #000000;
        border: solid 1px #FFB400;
        font-size: 17px;
        border-radius: 90px;
        width: 180px;
        height: 40px;

        & > a {
          text-decoration: none;
          color: white;
        }
      }

      & > h2 {
        color: white
      }

      & > div {
        & > div {
          width: 250px;

          & > p {
            & > span {
              color: white;
            }

            & > a {
              color: white;
            }

            font-size: 16px;
            color: darkgrey;
            font-weight: 600;
          }
        ;
        }

        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }

      width: 500px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;

    }
  }
`
