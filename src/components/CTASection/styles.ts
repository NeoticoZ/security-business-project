import styled from "styled-components";
import { CutSectionImg, MdOutlineArrowRightAlt } from "../../styles/icons";

export const Container = styled.section`
  height: 40rem;
  background: url("/world.jpg") center/cover;

  position: relative;
`;

export const Wrapper = styled.div`
  max-width: 1260px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  text-align: center;

  h2 {
    font-family: "Big Shoulders Display", display;
    font-weight: 700;
    font-size: 2.9375rem;
    text-transform: uppercase;
  }

  p {
    max-width: 60rem;

    margin-bottom: 1rem;

    font-size: 1.125rem;
    color: var(--color--gray-450);
  }
`;

export const Divider = styled.div`
  width: 0.125rem;
  height: 5rem;

  background: var(--color--red);

  margin: 0.5rem 0;
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    font-weight: 700;
    font-size: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem 1.4rem;
  }

  .consultButton {
    color: var(--color--white);
    background: var(--color--red);

    text-decoration: none;

    border-radius: 50px;

    svg {
      fill: var(--color--white);
    }
  }

  .demoButton {
    color: var(--color--red);

    text-decoration: none;

    border: 2px solid var(--color--red);
    border-radius: 50px;

    svg {
      fill: var(--color--red);
    }
  }
`;

export const ArrowIcon = styled(MdOutlineArrowRightAlt)`
  width: 2rem;
  height: 2rem;
`;

export const CutSection = styled(CutSectionImg)`
  fill: var(--color--white);

  transform: rotateX(180deg);
  width: 100vw;
  height: 4rem;

  position: absolute;
  bottom: 0;
`;
