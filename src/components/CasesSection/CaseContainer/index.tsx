import { FC, ReactNode } from "react";
import { Container } from "./styles";

interface CaseContainerProps {
  children: ReactNode;
}

// LÓGICA DO CAROUSEL
// 1. Pega a ordem de cada elemento e armazena no estado
// 2. Crie uma função que recebe um parâmetro e faz o seguinte:
// verifica se o valor recebido é maior que o valor do (estado - 4)
// e se ele é menor que o (estado * 4), se sim, adiciona uma classe
// ao elemento.

const CaseContainer: FC<CaseContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CaseContainer;
