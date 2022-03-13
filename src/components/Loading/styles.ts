import styled from "styled-components";
import { CgSpinner } from "../../styles/icons";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 999999999;

  background: var(--color--white);

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: spinner 1s linear infinite;
  }

  &.dontShow {
    display: none;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerIcon = styled(CgSpinner)`
  width: 4rem;
  height: 4rem;
`;
