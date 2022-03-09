import { FC } from "react";

import { Container, CutSection, FeaturesWrapper, InfoWrapper } from "./styles";

const FeaturesSection: FC = () => {
  return (
    <Container>
      <FeaturesWrapper>
        <InfoWrapper>
          <span>01</span>

          <h3>Easy to generate</h3>

          <p>
            We are a leader in endpoint protection solutions by industry
            analysts, independent testing organi- zations and security
            professionals.
          </p>
        </InfoWrapper>

        <InfoWrapper>
          <span>02</span>

          <h3>Easy to generate</h3>

          <p>
            We are a leader in endpoint protection solutions by industry
            analysts, independent testing organi- zations and security
            professionals.
          </p>
        </InfoWrapper>

        <InfoWrapper>
          <span>03</span>

          <h3>Easy to generate</h3>

          <p>
            We are a leader in endpoint protection solutions by industry
            analysts, independent testing organi- zations and security
            professionals.
          </p>
        </InfoWrapper>
      </FeaturesWrapper>
    </Container>
  );
};

export default FeaturesSection;
