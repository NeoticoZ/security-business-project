import { FC } from "react";
import { Container, SpinnerIcon } from "./styles";

interface LoadingProps {
  dontShow?: boolean;
}

const Loading: FC<LoadingProps> = ({ dontShow }) => {
  return (
    <Container className={dontShow ? "dontShow" : ""}>
      <SpinnerIcon />
    </Container>
  );
};

export default Loading;
