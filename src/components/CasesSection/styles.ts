import styled from "styled-components";

interface Props {
  imageUrl?: string;
}

export const Container = styled.section`
  background: url("/bg-cases.jpg") no-repeat top;

  overflow-x: hidden;

  header {
    text-align: center;
    height: 12rem;

    span {
      color: var(--color--red);

      font-weight: 500;
      font-size: var(--font-size--small-2);
      letter-spacing: 3px;
      text-transform: uppercase;

      display: inline-flex;
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
      font-family: "Big Shoulders Display", display;
      font-weight: 700;

      text-transform: capitalize;
    }
  }
`;

export const Divider = styled.div`
  width: 0.125rem;
  height: 5rem;

  background: var(--color--red);

  margin: 0.5rem auto 1.8rem;
`;

export const CaseElement = styled.div<Props>`
  width: 25vw;
  height: 28.1035rem;

  background: ${(props) => `url(${props.imageUrl}) center/cover`};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

  padding: 2rem 2.3rem;

  a {
    font-size: 1.875rem;
    font-family: "Big Shoulders Display", display;
    font-weight: 600;

    text-decoration: none;
    text-transform: capitalize;

    color: var(--color--white);

    border-bottom: 1px solid var(--color--red);
  }

  span {
    font-size: var(--font-size--small);

    letter-spacing: 2px;
    text-transform: uppercase;

    color: var(--color--white);
  }
`;
