import styled from 'styled-components'

export const EmailMain = styled.div`
  height: 360px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  & > button {
    border: solid 2px #FFB400;
    background-color: #1d1b19;
    color: white;
    font-size: 20px;
    width: 150px;
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
  }

  & > button:active {
    transition-duration: 100ms;
    border-right: solid;
    border-left: solid;
  }

  & > textarea {
    resize: none;
    border-radius: 10px;
    background-color: #1d1b19;
    display: block;
    margin: 0 auto;
    width: 315px;
    height: 100px;
    outline: none;
    border: solid 2px #FFB400;
    color: white;
    font-size: 25px;
  }

  & > textarea::placeholder {
    padding-left: 10px;
    color: grey;
  }
`

export const EmailStyle = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  & > input {
    outline: none;
    display: block;
    border: none;
    color: white;
    background-color: #1d1b19;
    border-bottom: solid 1.6px #FFB400;
    height: 40px;
    width: 205px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 16px;
  }

  & > input::placeholder {
    color: #B3B3B3;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 1px;
    opacity: 0.5;
    padding-left: 10px;
  }
`