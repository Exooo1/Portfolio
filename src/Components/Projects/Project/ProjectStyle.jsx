import styled from 'styled-components'

export const ProjectStyle = styled.div`
  cursor: pointer;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  //background-color: greenyellow;

  &:after {
    content: '';
    position: relative;
    top: -153.5px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    visibility: hidden;
  }

  &:before {
    visibility: hidden;
    color: #FFB400;
    content: attr(title);
    font-size: 20px;
    font-weight: 800;
    z-index: 10;
    position: relative;
    top: 170px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
  }

  &:hover::before {
    visibility: visible;
    color: white;
  }

  &:hover::after {
    visibility: visible;
    background-color: #FFB400;
    transition-duration: 500ms;
    transform: translate(0, -147px);
    //display: block;
  }

  & > img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  & > p {
    color: white;
  }
`