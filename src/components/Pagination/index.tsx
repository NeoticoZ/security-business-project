import React, { FC } from "react";
import { Container } from "./styles";

interface PaginationProps {
  secondType?: boolean;
}

const Pagination: FC<PaginationProps> = ({ secondType }) => {
  return (
    <Container className={secondType ? "secondType" : ""}>
      <button className="active" />
      <button />
      <button />
      <button />
    </Container>
  );
};

export default Pagination;
