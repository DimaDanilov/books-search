import styled, { keyframes } from "styled-components";

type LoaderType = {
  width?: string;
  [x: string]: any;
};

export const Loader = ({ width, ...props }: LoaderType) => {
  return (
    <LdsGrid width={width} {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LdsGrid>
  );
};

const loaderAnimation = keyframes`
    0%, 100% {
      opacity: 0.9;
    }
    50% {
      opacity: 0;
    }
`;

const LdsGrid = styled.div<{ width?: string; [x: string]: any }>`
  display: inline-block;
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.width || "80px"};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  & div {
    position: absolute;
    width: 15%;
    height: 15%;
    border-radius: 50%;
    background: #3c3c3c;
    animation: ${loaderAnimation} 1.2s linear infinite;
  }
  & div:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  & div:nth-child(2) {
    top: 10%;
    left: 40%;
    animation-delay: -0.4s;
  }
  & div:nth-child(3) {
    top: 10%;
    left: 70%;
    animation-delay: -0.8s;
  }
  & div:nth-child(4) {
    top: 40%;
    left: 10%;
    animation-delay: -0.4s;
  }
  & div:nth-child(5) {
    top: 40%;
    left: 40%;
    animation-delay: -0.8s;
  }
  & div:nth-child(6) {
    top: 40%;
    left: 70%;
    animation-delay: -1.2s;
  }
  & div:nth-child(7) {
    top: 70%;
    left: 10%;
    animation-delay: -0.8s;
  }
  & div:nth-child(8) {
    top: 70%;
    left: 40%;
    animation-delay: -1.2s;
  }
  & div:nth-child(9) {
    top: 70%;
    left: 70%;
    animation-delay: -1.6s;
  }
`;
