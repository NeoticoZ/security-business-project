import { FC, ReactNode } from "react";

import { Container } from "./styles";

interface GridProps {
  children?: ReactNode;
  columnsAmount?: string;
  gap?: string;
}

const Grid: FC<GridProps> = ({ children, columnsAmount, gap }) => {
  return (
    <Container columnsAmount={columnsAmount} gap={gap}>
      {children}
    </Container>
  );
};

export default Grid;
