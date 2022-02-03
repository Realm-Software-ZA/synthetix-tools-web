import React, { FunctionComponent } from "react";

import Background1 from "../../assets/img/background-1.jpg";
import Background2 from "../../assets/img/background-2.jpg";
import Background3 from "../../assets/img/background-3.jpg";
import Background4 from "../../assets/img/background-4.jpg";

const backgrounds = [Background1, Background2, Background3, Background4];

interface SectionProps {
  i: number;
}

const Section: FunctionComponent<SectionProps> = ({ i }) => (
  <div>
    <img src={backgrounds[i]} alt="section" />
  </div>
);

export default Section;
