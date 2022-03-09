import styled from "styled-components";

import { CutSectionImg } from "../../styles/icons";

export const Container = styled.section`
  background: url("./features-bg.png") top;
`;

export const FeaturesWrapper = styled.div`
  max-width: 1260px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  padding: 3.6rem 0;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: var(--font-size--small);
    color: var(--color--gray-200);
  }

  h3 {
    font-family: "Big Shoulders Display", sans-serif;
    font-weight: 600;
    font-size: 1.75rem;

    text-transform: uppercase;
    letter-spacing: 1px;

    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      background: var(--color--red);
      border-radius: 4rem;

      margin-right: 0.7rem;
    }
  }

  p {
    font-size: 1.15rem;
    margin-bottom: 1rem;
  }

  &::after {
    content: "";
    display: block;
    width: 10rem;
    height: 2px;
    background: var(--color--red);
  }
`;

export const CutSection = styled(CutSectionImg)`
  fill: white;

  height: 100vw;
  height: 4rem;
`;
