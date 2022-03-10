import styled from "styled-components";

export const Container = styled.section`
  background: url("./faq-bg.png") center bottom/cover;
`;

export const Wrapper = styled.div`
  max-width: 1260px;
  height: 45rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  max-width: 35rem;
  max-height: 35.625rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentWraper = styled.div`
  span {
    font-weight: 500;
    font-size: var(--font-size--small-2);
    letter-spacing: 3px;
    text-transform: uppercase;

    color: var(--color--red);

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

  h2 {
    font-size: 3.6875rem;
    font-weight: 700;
    font-family: "Big Shoulders Display", display;
  }
`;
