import { FC } from "react";
import CustomLink from "../CustomLink";
import Pagination from "../Pagination";
import CaseContainer from "./CaseContainer";
import { CaseElement, Container, Divider } from "./styles";

const casesData = [
  {
    id: 1,
    title: "System integration",
    category: "Geo Motor",
    image: "/case1.jpg",
  },
  {
    id: 2,
    title: "Empower banking industry",
    category: "Bank of America",
    image: "/case2.jpg",
  },
  {
    id: 3,
    title: "More secure trading platform",
    category: "London trade station",
    image: "/case3.jpg",
  },
  {
    id: 4,
    title: "Infrastructer security",
    category: "government",
    image: "/case4.jpg",
  },
  {
    id: 5,
    title: "Service update interruption",
    category: "Corzo patch",
    image: "/case5.jpg",
  },
  {
    id: 6,
    title: "Unauthorized access",
    category: "Corporate's infrastructure",
    image: "/case6.jpg",
  },
  {
    id: 7,
    title: "Malware attack protection",
    category: "Apple corp",
    image: "/case7.jpg",
  },
];

const CasesSection: FC = () => {
  return (
    <Container>
      <Divider />

      <header>
        <span>How we helped customers</span>

        <h2>From case studies</h2>
      </header>

      <CaseContainer>
        {casesData.map((cases) => (
          <CaseElement key={cases.id} imageUrl={cases.image}>
            <CustomLink href="/">{cases.title}</CustomLink>
            <span>{cases.category}</span>
          </CaseElement>
        ))}
      </CaseContainer>

      <Pagination />
    </Container>
  );
};

export default CasesSection;
