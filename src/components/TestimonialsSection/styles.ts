import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 40rem;

  background: url("/bg-testimonials.jpg") center/cover;
`;

export const TestimonialsWrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  padding-top: 5rem;

  header {
    text-align: center;

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
      font-weight: 500;

      text-transform: capitalize;
    }
  }
`;

export const CardsWrapper = styled.div`
  max-width: 1260px;
  width: 100%;
  height: auto;

  margin-top: 4rem;

  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const Card = styled.div`
  width: 100%;

  border-right: 3px solid var(--color--red);
  padding: 2rem;

  background: var(--color--white);

  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.07);

  p {
    font-family: "Playfair Display", serif;
  }

  .person {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    .imageWrapper {
      width: 3.4375rem;
      height: 3.4375rem;

      img {
        width: 100%;
        height: 100%;

        border-radius: 4rem;
      }
    }

    .personInfo {
      display: flex;
      flex-direction: column;

      strong {
        font-family: "Big Shoulders Display", display;
        font-weight: 500;
        font-size: var(--font-size--small-medium);

        letter-spacing: 2px;
        text-transform: uppercase;

        color: var(--color--red);
      }

      span {
        font-size: var(--font-size--small-2);
        font-weight: 500;

        color: var(--color--gray-400);
      }
    }
  }
`;

export const Divider = styled.div`
  width: 0.125rem;
  height: 5rem;

  background: var(--color--red);

  margin: 0 auto 1.8rem; ;
`;
