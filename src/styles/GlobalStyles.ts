import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --color--black: #151515;
  --color--black-500: #0a0a0a;
  --color--cyan-bluish-gray: #abb8c3;
  --color--gray-50: #f5f5f5;
  --color--gray-100: #e6e6e6;
  --color--gray-200: #a5a5a5;
  --color--gray-300: #9f9f9f;
  --color--gray-400: #757575;
  --color--gray-450: #6c6c6c;
  --color--gray-500: #3f403f;
  --color--white: #ffffff;
  --color--pale-pink: #f78da7;
  --color--red: #d32525;
  --color--vivid-red: #cf2e2e;
  --color--luminous-vivid-orange: #ff6900;
  --color--luminous-vivid-amber: #fcb900;
  --color--light-green-cyan: #7bdcb5;
  --color--vivid-green-cyan: #00d084;
  --color--pale-cyan-blue: #8ed1fc;
  --color--vivid-cyan-blue: #0693e3;
  --color--vivid-purple: #9b51e0;
  --gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
  --gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
  --gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
  --gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
  --gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
  --gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
  --gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
  --gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
  --gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
  --gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
  --gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
  --gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
  --font-size--small: 0.8125rem;
  --font-size--small-2: 0.875rem;
  --font-size--small-medium: 1.0625rem;
  --font-size--medium: 1.25rem;
  --font-size--large: 2.25rem;
  --font-size--x-large: 2.625rem;
  --font-size--extra-large: 6rem;
  --font-size--big: 8rem;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  font-size: var(--font-size--medium);
  font-family: 'Jost', sans-serif;

  color: var(--color--gray-500);

  line-height: 1.7;

  overflow-x: hidden;
}

strong, h1, h2, h3, h4, h5, h6 {
  color: var(--color--black)
}
`;
