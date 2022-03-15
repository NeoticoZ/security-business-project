import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  margin-top: 3rem;
  margin-bottom: 3rem;

  button {
    width: 1.6875rem;
    height: 0.25rem;

    background: var(--color--gray-100);

    border: 0;

    border-radius: 4rem;

    cursor: pointer;

    &.active {
      background: var(--color--red);
    }
  }
`;
