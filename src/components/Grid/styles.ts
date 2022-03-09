import styled from "styled-components";

interface Props {
  columnsAmount?: string;
  gap?: string;
}

export const Container = styled.div<Props>`
  display: grid;

  grid-template-columns: ${(props) =>
    props.columnsAmount
      ? `repeat(${props.columnsAmount}, 1fr)`
      : "repeat(3, 1fr)"};

  gap: ${(props) => props.gap && props.gap};
`;
