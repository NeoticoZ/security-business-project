import { FC, ReactNode } from "react";
import { Container } from "./styles";

interface CaseContainerProps {
  children: ReactNode;
}

const CaseContainer: FC<CaseContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CaseContainer;
