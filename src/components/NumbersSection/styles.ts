import styled from "styled-components";
import { CutSectionImg } from "../CutSectionImg";

interface CutSectionImgProps {
  top?: boolean;
  bottom?: boolean;
}

export const Container = styled.section`
  width: 100%;
  height: 35rem;
  background: url("/bg-numbers.jpg") right/cover;

  position: relative;
`;

export const NumbersWrapper = styled.div`
  max-width: 1260px;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
`;

export const Number = styled.div`
  width: 30rem;

  span {
    display: flex;
    font-size: var(--font-size--small);
    color: var(--color--gray-200);

    margin-bottom: 2.8rem;

    &.numberInfo {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.9375rem;
      letter-spacing: 2px;
      color: var(--color--red);
    }
  }

  h3 {
    font-family: "Big Shoulders Display", display;
    font-size: 3.8125rem;
    font-weight: 500;

    line-height: 5rem;

    color: var(--color--white);
  }

  &::after {
    content: "";
    display: block;
    width: 7rem;
    height: 3px;
    background: var(--color--red);
  }
`;

export const CutSection = styled(CutSectionImg)<CutSectionImgProps>`
  fill: var(--color--white);

  transform: ${(props) =>
    props.bottom ? "rotateX(180deg);" : "rotateY(180deg);"};
  width: 100vw;
  height: 4rem;

  position: absolute;

  /* Receives a prop and positions the img. */
  ${(props) => props.top && "top: 0;"}
  ${(props) => props.bottom && "bottom: 0;"}
`;
