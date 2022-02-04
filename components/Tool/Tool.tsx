import React, { FunctionComponent } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { ToolProps } from "./ITool";
import PortableText from "react-portable-text";

const Tool: FunctionComponent<ToolProps> = ({
  title,
  emblemImage = "",
  gridImage = "",
  body,
  link,
}) => {
  console.log(emblemImage);
  console.log(gridImage);

  if (!title) return null;

  return (
    <div className="mb-24">
      <div className="relative flex items-center justify-center mb-5">
        <Tilt className="parallax-effect" perspective={1000}>
          <div className="inner-element flex-wrap w-[40%]">
            <Image src={emblemImage} width={300} height={300} alt="grid" />
          </div>
          <Image src={gridImage} width={300} height={300} alt="grid" />
        </Tilt>
      </div>

      <div className="md:ml-1 2xl:ml-8">
        <div className="text-white font-bold gt-america text-2xl text-left mb-3">
          {title}
        </div>
        <div className="text-white text-left text mb-2">
          <PortableText content={body} />
        </div>
        <a
          className="text-primary font-bold gt-america font-bold text-[16px] text-left block"
          rel="noopener noreferrer"
          target="_blank"
          href={link}
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default Tool;
