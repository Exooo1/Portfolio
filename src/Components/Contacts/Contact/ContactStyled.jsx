import styled from 'styled-components'

export const ContactStyle = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > img {
    width: 10%;
  }

  & > div {
    & > h3 {
      color: #FFB400;
      height: 10px;
      font-size: 22px;
    }

    & > p {
      color: white;
      font-size: 15px;
    }

    margin-left: 10px;
    height: 92px;
  }
`