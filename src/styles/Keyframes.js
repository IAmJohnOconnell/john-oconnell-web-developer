import { keyframes } from "styled-components"

export const FadeUpIn = keyframes`
  0% {
    -webkit-transform: translateY(30px);
            transform: translateY(30px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0px);
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
    -webkit-transform: translateY(0);
            transform: translateY(0);

  }
  50% {
    -webkit-transform: translateY(-1rem);
            transform: translateY(-1rem);
  }

  to {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
  }
`
