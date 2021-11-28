import styled from 'styled-components'

export const ProjectsStyle = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #000000;

  & > .s {
    height: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  }


  & > .s > h2 {
    position: relative;
    top: -133px;
    letter-spacing: 3px;
    font-size: 60px;
    opacity: 0.2;
    height: 0;
    color: white;

  }

  & > .s > h1 {
    & > span {
      color: white;
    }

    margin-top: 50px;
    color: #FFB400;
    font-size: 30px;
  }
`