import styled, { css } from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "../../styles/icons";

interface Props {
  hoverElement?: string;
}

export const Container = styled.nav`
  width: 100%;

  background: var(--color--black-500);

  position: sticky;
  top: 0;

  z-index: 10;
`;

export const NavbarWrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLinks = styled.div<Props>`
  display: flex;
  position: relative;

  a {
    text-decoration: none;
    text-transform: uppercase;
    line-height: 4.25rem;
    font-size: var(--font-size--small);
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--color--gray-100);

    padding-right: 2rem;

    display: flex;
    align-items: center;

    position: relative;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;

    position: absolute;
    bottom: 1rem;

    left: ${(props) =>
      props.hoverElement === "home"
        ? "0"
        : props.hoverElement === "about"
        ? "5rem"
        : props.hoverElement === "services"
        ? "12rem"
        : props.hoverElement === "blog" && "18.84rem"};

    background: var(--color--red);

    border-radius: 4rem;

    transition: all 0.3s;
  }
`;

export const DropdownLink = styled.div`
  position: relative;

  .dropdownContent {
    display: none;
    width: 15rem;

    position: absolute;
    top: 4.25rem;
    padding: 1rem;

    background: var(--color--white);

    a {
      color: var(--color--gray-400);

      line-height: initial;
      font-weight: 400;
      letter-spacing: 0;
      text-transform: none;
      font-size: var(--font-size--small-medium);

      transition: color 0.2s;

      &:hover {
        color: var(--color--red);
      }
    }
  }

  &:hover .dropdownContent {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      color: var(--color--gray-100);
      transition: color 0.2s;

      &:hover {
        color: var(--color--red);
      }
    }
  }

  .button {
    color: white;
    background: var(--color--red);

    height: 4.25rem;
    padding: 0 1.5rem;

    text-decoration: none;
    line-height: 4.25rem;
    font-size: var(--font-size--small-medium);
    font-weight: 600;

    transition: color, background 0.2s;

    &:hover {
      background: var(--color--white);
      color: var(--color--black);
    }
  }
`;

const iconCSS = css`
  width: 100%;
  height: 1rem;
`;

export const FacebookIcon = styled(FaFacebookF)`
  ${iconCSS}
`;

export const LinkedinIcon = styled(FaLinkedinIn)`
  ${iconCSS}
`;

export const PinterestIcon = styled(FaPinterestP)`
  ${iconCSS}
`;

export const TwitterIcon = styled(FaTwitter)`
  ${iconCSS}
`;

export const InstagramIcon = styled(FaInstagram)`
  ${iconCSS}
`;
