import styled from 'styled-components'

export const ContactsStyle = styled.div`
  background-color: #1d1b19;
  min-height: 60vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  & > h1 {
    height: 30px;
    font-size: 35px;
    color: #FFB400;
  }

  & > .containerContacts {
    background-color: #1d1b19;
    width: 100%;
    //margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    & > div {
      //background-color: blue;
      height: 360px;
      width: 500px;
    }

    & > .contactStyle {
      width: 550px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  }

  & > div {
    height: 4px;
    margin: 1px 0;
    width: 190px;
    background-color: white;
    border-radius: 90px;
  }

  & > div:nth-child(3) {
    height: 4px;
    margin: 1px 0;
    width: 120px;
  }
`