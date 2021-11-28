import styled from 'styled-components'

export const SkillStyled = styled.div`
  box-shadow: ${props => props.boxColor || "0 0 10px black"};
  margin: 30px 0;
  width: 400px;
  min-height: 550px;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }

  & > p {
    font-size: 18px;
    color: ${props => props.colorText || "white"};
  }

  & > h2 {
    font-size: 30px;
    color: white;
    font-weight: 800;
  }

  & > div {
    box-shadow: 0 0 30px white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px white;
    height: 140px;
    border-radius: 50%;
    width: 140px;
    //background-color: #bafff1;
  }

  & > div > img {
    width: 50%;
  }

`