import styled, { css } from "styled-components";

import { AiOutlineMinus, AiOutlinePlus } from "../../styles/icons";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;

  padding: 0.6rem 0;

  border-bottom: 1px solid var(--color--gray-100);

  button {
    width: 100%;
    height: 40px;

    background: none;
    border: 0;

    cursor: pointer;

    text-align: start;
    font-size: 1.625rem;
    font-family: "Big Shoulders Display", display;

    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const AccordionContent = styled.p`
  max-width: 600px;
  height: 0;

  opacity: 0;
  visibility: hidden;

  font-size: 1.125rem;

  transition: height 0.1s ease-in-out;

  &.show {
    height: 8rem;

    opacity: 1;
    visibility: visible;

    margin: 0.8rem 1.9rem;
  }
`;

const iconCSS = css`
  width: 1rem;
  height: 0.8rem;

  fill: var(--color--red);
`;

export const MinusIcon = styled(AiOutlineMinus)`
  ${iconCSS}
`;

export const PlusIcon = styled(AiOutlinePlus)`
  ${iconCSS}
`;
