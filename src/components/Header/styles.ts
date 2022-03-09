import styled from "styled-components";

export const Container = styled.header`
  max-width: 1260px;
  margin: 0.8rem 2rem 0;

  display: none;

  nav {
    display: flex;

    a {
      border-right: 1px solid var(--color--gray-100);

      padding-right: 1rem;

      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;

      color: var(--color--gray-300);

      font-size: var(--font-size--small);

      transition: color 0.2s;

      &:last-child {
        border: none;
      }

      & + a {
        padding-left: 1rem;
      }

      &:hover {
        color: var(--color--red);
      }
    }
  }

  @media (min-width: 1260px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1150px) {
    display: block;
  }
`;

export const HeaderBody = styled.div`
  height: 5.5625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & .logoWrapper {
    width: 9rem;
    height: 1.9375rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  & .contactInfo {
    display: flex;
    align-items: center;

    .iconWrapper {
      width: 2.375rem;
      height: 2.1875rem;

      margin-right: 1.25rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    div {
      display: flex;
      flex-direction: column;

      font-size: 1.0625rem;

      text-transform: capitalize;

      strong {
        font-weight: 500;

        a {
          text-decoration: underline;
        }
      }
    }
  }
`;
