import { FC } from "react";
import CustomLink from "../CustomLink";

import {
  ArrowIcon,
  ButtonsWrapper,
  Container,
  CutSection,
  Divider,
  HeroContent,
} from "./styles";

const Hero: FC = () => {
  return (
    <Container>
      <HeroContent>
        <header>
          <h2>Corzo Corp</h2>
          <h1>Cyber Security Expert</h1>
        </header>

        <Divider />

        <section>
          <p>
            Protect your organization agains cyber threats by ensuring the
            appropriate security controls are in place.
          </p>

          <ButtonsWrapper>
            <button className="playButton">
              <img src="./slider-video-player.png" alt="ícone de play" />
            </button>

            <a href="/" className="callToAction">
              Get a free consultation
              <ArrowIcon />
            </a>
          </ButtonsWrapper>
        </section>

        <CustomLink href="/">
          Our Services <ArrowIcon />
        </CustomLink>
      </HeroContent>

      <CutSection />
    </Container>
  );
};

export default Hero;
