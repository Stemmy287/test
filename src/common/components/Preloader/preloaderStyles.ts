import styled, {keyframes} from "styled-components";
import {ReactComponent as SpinnerLogo} from "assets/icons/Property 1=Default.svg";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled(SpinnerLogo)`
  animation: ${rotate} 2s linear infinite;
  margin: 0 auto 39px auto;
`