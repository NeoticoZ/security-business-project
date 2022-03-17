import styled from "styled-components";
import { CutSectionImg, MdOutlineArrowRightAlt } from "../../styles/icons";

export const Container = styled.section`
  background: url("./bg-red.jpg") bottom/cover;
  height: 75rem;
`;

export const Wrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Header = styled.header`
  color: var(--color--white);
  text-align: center;

  margin-top: 4rem;

  span {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.9375rem;
    letter-spacing: 3px;

    position: relative;

    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      background: var(--color--white);
      border-radius: 4rem;
      margin-right: 0.7rem;
      position: absolute;
      top: 0.5rem;
      left: -1rem;
    }
  }

  h2 {
    color: var(--color--white);
    font-family: "Big Shoulders Display", display;
    font-size: 3.8125rem;
  }
`;

export const ExpertiseCard = styled.div`
  width: 100%;
  height: 28rem;

  background: var(--color--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s ease-in-out;

  cursor: pointer;

  z-index: 2;

  > a {
    margin: 2.5rem;
    text-decoration: none;

    h3 {
      font-size: 1.75rem;
      font-family: "Big Shoulders Display", display;
      font-weight: 600;

      text-transform: uppercase;
      letter-spacing: 1px;
      color: black;

      margin-top: 1rem;

      z-index: 1;

      position: relative;
    }

    p {
      color: var(--color--gray-450);
      font-size: 1.125rem;

      margin-top: 1rem;
    }

    span {
      color: var(--color--red);
      font-weight: 500;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      margin-top: 1rem;
    }
  }

  &:hover {
    transform: translateY(-1rem);
  }
`;

export const ImageWrapper = styled.div`
  width: 5rem;
  height: 5rem;

  margin: 0 auto;

  position: relative;
  z-index: 1;

  img {
    width: 4rem;
    height: 4rem;
  }

  &::before {
    content: "";
    display: block;
    background: var(--color--gray-100);
    width: 7rem;
    height: 7rem;
    position: absolute;
    top: 1rem;
    left: -0.9rem;
    border-radius: 4rem;
    z-index: -99999;
    opacity: 0.5;
  }
`;

export const CutSection = styled(CutSectionImg)`
  fill: white;

  transform: rotateY(180deg);
  width: 100vw;
  height: 4rem;
`;

export const ArrowIcon = styled(MdOutlineArrowRightAlt)`
  width: 2.2rem;
  height: 2.2rem;
`;
