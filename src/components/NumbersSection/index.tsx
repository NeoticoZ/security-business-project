import { FC } from "react";
import { Container, CutSection, Number, NumbersWrapper } from "./styles";

const numbersData = [
  {
    id: 1,
    numberValue: 14000,
    afterNumber: "+",
    numberInfo: "All time clients",
  },
  {
    id: 2,
    numberValue: 1000,
    afterNumber: "",
    numberInfo: "Clients in this year",
  },
  {
    id: 3,
    numberValue: 10,
    afterNumber: "BN+",
    numberInfo: "Attacks blocked",
  },
  {
    id: 4,
    numberValue: 30,
    afterNumber: "+",
    numberInfo: "Security modules",
  },
];

const NumbersSection: FC = () => {
  return (
    <Container>
      <CutSection top />
      <NumbersWrapper>
        {numbersData.map((numberData) => (
          <Number key={numberData.id}>
            <span>0{numberData.id}</span>
            <h3>{`${numberData.numberValue + numberData.afterNumber}`}</h3>
            <span className="numberInfo">{numberData.numberInfo}</span>
          </Number>
        ))}
      </NumbersWrapper>
      <CutSection bottom />
    </Container>
  );
};

export default NumbersSection;
