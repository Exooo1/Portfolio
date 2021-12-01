import styled, {keyframes} from 'styled-components'

const h2Animation = keyframes`
  from {
    transform: translate(250px, 0px);
  }
  to {
    //transform: translate(0px, 0px);
  }
`

export const SkillsStyle = styled.div`
  min-height: 100vh;
  background-color: #1d1b19;

  & > .containerSkills {
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
  }
`