import styled from 'styled-components'

export const DivStyle = styled.div`
  position: absolute;
  width: 5px;
  height: 190px;
  background-color: #111;
  margin-left: 27px;
`
export const ChildDivStyle = styled.div`
  background-color: #FFB400;
  height: ${props => props.size}px;
`

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

  & > .divStyle {
    height: 35%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    //
    //& > a:hover {
    //  transform: scale(1.2);
    //  transition: 1.1s;
    //}
    //
    //& > a:hover::after {
    //  content: attr(title);
    //  position: relative;
    //  width: 20px;
    //  display: block;
    //  color: floralwhite;
    //  font-weight: 700;
    //  left: -75px;
    //  border-radius: 90px;
    //  top: -35px;
    //}
    //
    //& > a {
    //  z-index: 10;
    //  text-decoration: underline;
    //  text-underline-offset: 3px;
    //  color: grey;
    //  border-radius: 50%;
    //  width: 60px;
    //  height: 60px;
    //  background-color: #2B2A2A;
    //
    //
    //  & > img {
    //    width: 60%;
    //    padding-top: 10px;
    //  }
    //}
    //
    //& > a:hover {
    //  background-color: #FFB400;
    //}
  }
`

export const LinkStyle = styled.a`
  z-index: 10;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: grey;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: ${props => props.color};

  & > img {
    width: 60%;
    padding-top: 10px;
  }

  &:hover {
    background-color: #FFB400;
  }

  &:hover {
    transform: scale(1.2);
    transition: 1.1s;
  }

  &:hover::after {
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
`

