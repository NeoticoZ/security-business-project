import styled from "styled-components";

export const Container = styled.section`
  width: 1200px;

  margin: 0 auto;
`;

export const SponsorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 6rem;
  margin-bottom: 8rem;
`;

export const Sponsor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  img {
    width: 9.375rem;
    height: 4.6875rem;
  }

  span {
    font-family: "Big Shoulders Display", display;
    font-size: var(--font-size--small-2);

    text-transform: uppercase;
    letter-spacing: 3px;

    color: var(--color--gray-200);
  }

  &::after {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    background: var(--color--red);
    border-radius: 4rem;
    margin-top: 0.8rem;
  }
`;
