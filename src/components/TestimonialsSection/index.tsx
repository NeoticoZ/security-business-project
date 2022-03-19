import { FC } from "react";
import Pagination from "../Pagination";
import {
  Card,
  CardsWrapper,
  Container,
  Divider,
  TestimonialsWrapper,
} from "./styles";

const testimonials = [
  {
    id: 1,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.",
    imageUrl: "/person-1.jpg",
    personName: "Mason Miller",
    position: "CEO, Apple",
  },
  {
    id: 2,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.",
    imageUrl: "/person-2.jpg",
    personName: "Jack Miller",
    position: "CEO, Microsoft",
  },
];

const TestimonialsSection: FC = () => {
  return (
    <Container>
      <TestimonialsWrapper>
        <Divider />

        <header>
          <span>Testimonial</span>

          <h2>What they say abount us</h2>
        </header>

        <CardsWrapper>
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <p>{testimonial.text}</p>

              <div className="person">
                <div className="imageWrapper">
                  <img
                    src={testimonial.imageUrl}
                    alt="black and white image of a man wearing glasses smiling."
                  />
                </div>

                <div className="personInfo">
                  <strong>{testimonial.personName}</strong>

                  <span>{testimonial.position}</span>
                </div>
              </div>
            </Card>
          ))}
        </CardsWrapper>

        <Pagination secondType />
      </TestimonialsWrapper>
    </Container>
  );
};

export default TestimonialsSection;
