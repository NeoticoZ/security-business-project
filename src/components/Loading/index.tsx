import { FC } from "react";
import { Container, SpinnerIcon } from "./styles";

const Loading: FC = () => {
  return (
    <Container>
      <SpinnerIcon />
    </Container>
  );
};

export default Loading;
