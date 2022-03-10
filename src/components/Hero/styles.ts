import styled from "styled-components";

import { CutSectionImg, MdOutlineArrowRightAlt } from "../../styles/icons";

export const Container = styled.section`
  max-height: 45rem;
  height: 110vh;
  background: url("./slider-bg-3.jpg") center/cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-top: 1px solid var(--color--gray-100);
`;

export const HeroContent = styled.div`
  max-width: 1260px;
  width: 100%;

  margin: 6rem auto 2rem;

  position: relative;

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: var(--color--white);
    text-decoration: none;

    position: absolute;
    right: 0;
    bottom: -3rem;

    color: white;
    background: var(--color--red);

    height: 5rem;
    padding: 0 1rem;

    line-height: 4.25rem;
    font-weight: 500;

    transition: color, background 0.2s;

    &:hover {
      background: var(--color--white);
      color: var(--color--red);
    }
  }

  &,
  h1,
  h2 {
    color: var(--color--white);
  }

  header {
    font-family: "Big Shoulders Display", sans-serif;

    h2 {
      line-height: 7rem;
      font-size: var(--font-size--extra-large);
      font-weight: 100;
    }

    h1 {
      line-height: 10rem;
      font-size: var(--font-size--big);
    }
  }

  section {
    p {
      max-width: 33.5625rem;
      margin-bottom: 2rem;
    }
  }
`;

export const Divider = styled.div`
  background: var(--color--red);
  width: 3.75rem;
  height: 0.15rem;

  margin: 2.5rem 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    border: 0;
    background: none;
    position: relative;

    cursor: pointer;

    &.playButton {
      img {
        width: 4.6rem;
        height: 4.6rem;

        border-radius: 4rem;

        outline: 0 solid rgba(211, 37, 37, 0.3);
        transition: outline 0.35s cubic-bezier(1, 2, 0.9, 1);
      }

      &:hover {
        img {
          outline-width: 8px;
        }
      }
    }
  }

  .callToAction {
    color: var(--color--white);
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    transition: color 0.2s;

    &:hover {
      color: var(--color--red);
    }
  }
`;

export const CutSection = styled(CutSectionImg)`
  fill: white;

  transform: rotateX(180deg);
  width: 100vw;
  height: 4rem;
`;

export const ArrowIcon = styled(MdOutlineArrowRightAlt)`
  width: 2.2rem;
  height: 2.2rem;
`;
