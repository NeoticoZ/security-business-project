import { FC } from "react";
import CustomLink from "../CustomLink";
import {
  ArrowIcon,
  Container,
  CTAButtons,
  CutSection,
  Divider,
  Wrapper,
} from "./styles";

const CTASection: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Divider />
        <h2>Get easy and fast protection against all</h2>
        <p>
          Reduce attacker time with early detection and derailment of in-network
          threats. Built to cover all attack surfaces and methods of threats,
          Corzo hides critical data, misdirects attackers away from assets.
        </p>

        <CTAButtons>
          <CustomLink className="consultButton" href="/">
            Get Consult
            <ArrowIcon />
          </CustomLink>

          <CustomLink className="demoButton" href="/">
            Request Demo
            <ArrowIcon />
          </CustomLink>
        </CTAButtons>
      </Wrapper>

      <CutSection />
    </Container>
  );
};

export default CTASection;
