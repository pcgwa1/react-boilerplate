import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity:0;
    visibility: visible;
  }

  to {
    opacity:1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity:1;
  }

  to {
    opacity:0;
    visibility: hidden;
  }
`;

export const PageContainer = styled.div`
  position: relative;
  //width: 100vw;
  height: 100vh;
  //background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`; 

const Page = styled.div`
  width: 100%;
  height: 200%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  h2 {
    color: #0d47a1;
  }
  p {
    font-size: 1rem;
    max-width: 400px;
    margin: 20px auto;
    color: #37474f;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #4776e6;
    border-radius: 5px;
    background-image: linear-gradient(
      to right,
      #4776e6 0%,
      #8e54e9 51%,
      #4776e6 100%
    );
  }

  img {
    border-radius: 50%;
  }
`;

export const PageWrapper = styled(Page)`
  &.page-enter {
    animation: ${fadeIn} 0.2s forwards;
  }
  &.page-exit {
    animation: ${fadeOut} 0.2s forwards;
  }
`;
