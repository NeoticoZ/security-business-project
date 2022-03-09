import { FC, useState } from "react";

import CustomLink from "../CustomLink";

import {
  Container,
  NavbarWrapper,
  DropdownLink,
  NavigationLinks,
  SocialLinks,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  InstagramIcon,
} from "./styles";

interface NavbarProps {
  active?: string;
}

const Navbar: FC<NavbarProps> = ({ active }) => {
  const [hoverElement, setHoverElement] = useState("");

  function handleSetHoverElement(name: string) {
    setHoverElement(name);
  }

  return (
    <Container>
      <NavbarWrapper>
        <NavigationLinks hoverElement={hoverElement ? hoverElement : active}>
          <div
            onMouseOver={() => handleSetHoverElement("home")}
            onMouseOut={() => handleSetHoverElement(active)}
          >
            <CustomLink href="/">Home</CustomLink>
          </div>

          <div
            onMouseOver={() => handleSetHoverElement("about")}
            onMouseOut={() => handleSetHoverElement(active)}
          >
            <CustomLink href="/">About Us</CustomLink>
          </div>

          <DropdownLink>
            <div
              data-testid="Services"
              onMouseOver={() => handleSetHoverElement("services")}
              onMouseOut={() => handleSetHoverElement(active)}
            >
              <CustomLink href="/">Services</CustomLink>
            </div>

            <div
              className="dropdownContent"
              onMouseOver={() => handleSetHoverElement("services")}
              onMouseOut={() => handleSetHoverElement(active)}
            >
              <CustomLink href="/">Endpoint Security</CustomLink>

              <CustomLink href="/">Security & It operations</CustomLink>

              <CustomLink href="/">Cloud Security</CustomLink>
            </div>
          </DropdownLink>

          <div
            onMouseOver={() => handleSetHoverElement("blog")}
            onMouseOut={() => handleSetHoverElement(active)}
          >
            <CustomLink href="/">Blog</CustomLink>
          </div>
        </NavigationLinks>

        <SocialLinks>
          <div>
            <CustomLink href="/">
              <FacebookIcon />
            </CustomLink>

            <CustomLink href="/">
              <LinkedinIcon />
            </CustomLink>

            <CustomLink href="/">
              <PinterestIcon />
            </CustomLink>

            <CustomLink href="/">
              <TwitterIcon />
            </CustomLink>

            <CustomLink href="/">
              <InstagramIcon />
            </CustomLink>
          </div>

          <CustomLink className="button" href="/">
            Get Consult
          </CustomLink>
        </SocialLinks>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
