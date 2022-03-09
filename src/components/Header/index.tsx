import { FC } from "react";

import { Container, HeaderBody } from "./styles";
import CustomLink from "../CustomLink";

const Header: FC = () => {
  return (
    <Container>
      <nav>
        <CustomLink href="/">Investors</CustomLink>
        <CustomLink href="/">Media Center</CustomLink>
        <CustomLink href="/">Location</CustomLink>
        <CustomLink href="/">Contact</CustomLink>
      </nav>

      <HeaderBody>
        <div className="logoWrapper">
          <img src="./hp3-logo.png" alt="logo" />
        </div>

        <div className="contactInfo">
          <div className="iconWrapper">
            <img src="./hp3-top-contact-icon-1.png" alt="ícone de contato" />
          </div>

          <div>
            <span>Have any questions?</span>

            <strong>
              Call now <a>+1-234-2566</a>
            </strong>
          </div>
        </div>
      </HeaderBody>
    </Container>
  );
};

export default Header;
