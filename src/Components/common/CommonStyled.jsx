import styled from 'styled-components'

export const ContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1350px) {
    flex-direction: column;
    justify-content: center;
  }


  & > .image {
    margin: 50px 0;
    z-index: 1;
    position: absolute;
    left: 100px;
    background-color: #111;
    border-radius: 5%;
    width: 450px;
    //height: ;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1350px) {
      position: static;
      width: 350px;
    }
    @media (max-width: 330px) {
      position: static;
      width: 250px;
    }

    & > img {
      @media (max-width: 1350px) {
        border-radius: 80%;
        width: 350px;
        height: 350px;
      }
      @media (max-width: 330px) {
        border-radius: 80%;
        width: 250px;
        height: 250px;
      }
      box-shadow: 0 0 10px lightgrey;
      border-radius: 5%;
      width: 100%;
      object-fit: cover;

    }
  }
`

export const CommonContainer = styled.div`
  margin: auto 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const CommonStyle = styled(CommonContainer)`
  width: 50%;
  height: 100%;
  margin-bottom: 150px;
`

export const TestStyle = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //flex-wrap: wrap;
  //flex-direction: column;


  &:after {
    content: '';
    position: relative;
    display: block;
    top: -21px;
    width: 200px;
    height: 200px;
    background-color: fuchsia;
  }

  &:hover::after {
    transition-duration: 500ms;
    transform: translate(0, -200px);
  }

  &:before {
    content: '';
    position: relative;
    display: block;
    top: -200px;
    width: 200px;
    height: 200px;
    background-color: salmon;
  }

  &:hover::before {
    transition-duration: 500ms;
    transform: translate(0, 200px);
  }
`
