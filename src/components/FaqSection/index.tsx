import { FC, useState } from "react";

import AccordionButton from "../AccordionButton";

import { Container, ImageWrapper, Wrapper, ContentWraper } from "./styles";

const FaqSection: FC = () => {
  const [activeButtonNumber, setActiveButtonNumber] = useState(1);

  function checkIfValueIsEqualsActiveNumber(value: number) {
    return value === activeButtonNumber;
  }

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src="./faq.png" alt="funcionários conversando" />
        </ImageWrapper>

        <ContentWraper>
          <span>Big name customers</span>

          <h2>Why Customers Choose Us</h2>

          <div>
            <AccordionButton
              isActive={checkIfValueIsEqualsActiveNumber(1)}
              changeActiveButtonNumber={() => setActiveButtonNumber(1)}
              buttonValue="Premium services and beyond your expectation"
            >
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss.
            </AccordionButton>

            <AccordionButton
              isActive={checkIfValueIsEqualsActiveNumber(2)}
              changeActiveButtonNumber={() => setActiveButtonNumber(2)}
              buttonValue="World class cyber security tech"
            >
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss.
            </AccordionButton>

            <AccordionButton
              isActive={checkIfValueIsEqualsActiveNumber(3)}
              changeActiveButtonNumber={() => setActiveButtonNumber(3)}
              buttonValue="Low maintenance required"
            >
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss.
            </AccordionButton>

            <AccordionButton
              isActive={checkIfValueIsEqualsActiveNumber(4)}
              changeActiveButtonNumber={() => setActiveButtonNumber(4)}
              buttonValue="Quick alert with auto action"
            >
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss.
            </AccordionButton>
          </div>
        </ContentWraper>
      </Wrapper>
    </Container>
  );
};

export default FaqSection;
