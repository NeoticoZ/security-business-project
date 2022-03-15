import { FC } from "react";
import { Container, Sponsor, SponsorsWrapper } from "./styles";

const sponsors = [
  {
    id: 1,
    logo: "/abstrate.png",
    name: "Astrate",
  },
  {
    id: 2,
    logo: "/nitrox.png",
    name: "Nitrox",
  },
  {
    id: 3,
    logo: "/wirox.png",
    name: "Wirox",
  },
  {
    id: 4,
    logo: "/datatel.png",
    name: "Datatel",
  },
  {
    id: 5,
    logo: "/boxy.png",
    name: "Boxy",
  },
  {
    id: 6,
    logo: "/corniz.png",
    name: "Corniz",
  },
];

const SponsorsSection: FC = () => {
  return (
    <Container>
      <SponsorsWrapper>
        {sponsors.map((sponsor) => (
          <Sponsor key={sponsor.id}>
            <img src={sponsor.logo} alt="sponsor logo" />
            <span>{sponsor.name}</span>
          </Sponsor>
        ))}
      </SponsorsWrapper>
    </Container>
  );
};

export default SponsorsSection;
