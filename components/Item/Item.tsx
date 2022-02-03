import React, { FunctionComponent } from "react";
import Tilt from "react-parallax-tilt";
import Image from 'next/image';

const Item: FunctionComponent<ItemEntity> = ({
  title,
  description,
  link,
  grid,
  element,
}) => {
  return (
    <div className="mb-24">
      <div className="relative flex items-center justify-center mb-5">
        <Tilt className="parallax-effect" perspective={1000}>
          <div className="inner-element flex-wrap w-[40%]">
            <Image src={`/img/elements/element${grid}.png`} width={300} height={300} alt="grid" />
          </div>
          <Image src={`/img/grids/grid${grid}.png`}  width={300} height={300}  alt="grid" />
        </Tilt>
      </div>

      <div className="text-white font-bold gt-america text-2xl text-left mb-3">
        {title}
      </div>
      <div className="text-white text-left text mb-2">{description}</div>
      <a
        className="text-primary font-bold gt-america font-bold text-[16px] text-left block"
        rel="noopener noreferrer"
        target="_blank"
        href={link.url}
      >
        {link.text}
      </a>
    </div>
  );
};

export default Item;
