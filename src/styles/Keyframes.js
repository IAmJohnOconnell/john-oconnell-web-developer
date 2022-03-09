import { keyframes } from "styled-components"

export const FadeUpIn = keyframes`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
export const Hop = keyframes`
  from {
    transform: translateY(0);

  }
  50% {
    transform: translateY(-1rem);
  }

  to {
          transform: translateY(0);
  }
`
