import { FC, FormEvent, ReactNode, useEffect, useMemo, useState } from "react";

import { Container, AccordionContent, PlusIcon, MinusIcon } from "./styles";

interface AccordionButton {
  buttonValue?: string;
  children?: ReactNode;
  isActive?: boolean;
  changeActiveButtonNumber?: () => void;
}

const AccordionButton: FC<AccordionButton> = ({
  buttonValue,
  children,
  isActive,
  changeActiveButtonNumber,
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (changeActiveButtonNumber) {
      setShowContent(true);
    }
  }, []);

  useMemo(() => {
    if (!isActive && showContent) {
      setShowContent(false);
    }
  }, [isActive, showContent]);

  function handleShowAccordionContent(e: FormEvent) {
    e.preventDefault();

    changeActiveButtonNumber();
    setShowContent(true);
  }

  return (
    <Container>
      <button onClick={handleShowAccordionContent}>
        {showContent ? <MinusIcon /> : <PlusIcon />}
        {buttonValue}
      </button>

      <AccordionContent className={showContent ? "show" : ""}>
        {children}
      </AccordionContent>
    </Container>
  );
};

export default AccordionButton;
