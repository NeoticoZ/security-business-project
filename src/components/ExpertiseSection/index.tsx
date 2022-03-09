import { FC } from "react";

import CustomLink from "../CustomLink";
import Grid from "../Grid";

import {
  Container,
  Wrapper,
  ExpertiseCard,
  Header,
  ArrowIcon,
  ImageWrapper,
  CutSection,
} from "./styles";

const ExpertiseSection: FC = () => {
  return (
    <Container>
      <CutSection />

      <Wrapper>
        <Header>
          <span>Our expertise</span>

          <h2>Solution For Business Challenges</h2>
        </Header>

        <Grid columnsAmount="3" gap="2rem">
          <ExpertiseCard>
            <CustomLink href="/">
              <ImageWrapper>
                <img src="./endpoint-icon.png" alt="endpoint icon" />
              </ImageWrapper>

              <h3>Endpoint Security</h3>

              <p>
                Detect and deny attacker lateral movement across all attack
                vectors.
              </p>

              <CustomLink href="/">
                Learn More <ArrowIcon />
              </CustomLink>
            </CustomLink>
          </ExpertiseCard>

          <ExpertiseCard>
            <CustomLink href="/">
              <ImageWrapper>
                <img src="./endpoint-icon.png" alt="endpoint icon" />
              </ImageWrapper>

              <h3>Endpoint Security</h3>

              <p>
                Detect and deny attacker lateral movement across all attack
                vectors.
              </p>

              <CustomLink href="/">
                Learn More <ArrowIcon />
              </CustomLink>
            </CustomLink>
          </ExpertiseCard>

          <ExpertiseCard>
            <CustomLink href="/">
              <ImageWrapper>
                <img src="./endpoint-icon.png" alt="endpoint icon" />
              </ImageWrapper>

              <h3>Endpoint Security</h3>

              <p>
                Detect and deny attacker lateral movement across all attack
                vectors.
              </p>

              <CustomLink href="/">
                Learn More <ArrowIcon />
              </CustomLink>
            </CustomLink>
          </ExpertiseCard>

          <ExpertiseCard>
            <CustomLink href="/">
              <ImageWrapper>
                <img src="./endpoint-icon.png" alt="endpoint icon" />
              </ImageWrapper>

              <h3>Endpoint Security</h3>

              <p>
                Detect and deny attacker lateral movement across all attack
                vectors.
              </p>

              <CustomLink href="/">
                Learn More <ArrowIcon />
              </CustomLink>
            </CustomLink>
          </ExpertiseCard>

          <ExpertiseCard>
            <CustomLink href="/">
              <ImageWrapper>
                <img src="./endpoint-icon.png" alt="endpoint icon" />
              </ImageWrapper>

              <h3>Endpoint Security</h3>

              <p>
                Detect and deny attacker lateral movement across all attack
                vectors.
              </p>

              <CustomLink href="/">
                Learn More <ArrowIcon />
              </CustomLink>
            </CustomLink>
          </ExpertiseCard>

          <ExpertiseCard>
            <CustomLink href="/">
              <ImageWrapper>
                <img src="./endpoint-icon.png" alt="endpoint icon" />
              </ImageWrapper>

              <h3>Endpoint Security</h3>

              <p>
                Detect and deny attacker lateral movement across all attack
                vectors.
              </p>

              <CustomLink href="/">
                Learn More <ArrowIcon />
              </CustomLink>
            </CustomLink>
          </ExpertiseCard>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default ExpertiseSection;
