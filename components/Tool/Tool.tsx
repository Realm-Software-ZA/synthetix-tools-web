import React, { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { blockContentToPlainText } from "react-portable-text";

import { truncate } from "../../helpers";
import { ToolEntity } from "../../types/ToolEntity";

const Tool: FunctionComponent<ToolEntity> = ({
  _id,
  title,
  emblemImage,
  gridImage,
  body,
  link,
}) => {
  const href = `/packs/${_id}`;
  const navigate = useNavigate();

  return (
    <div className="mb-24 px-10 md:px-0">
      <div
        className="relative flex items-center justify-center mb-5 cursor-pointer"
        onClick={() =>
          link ? window.open(link, "_blank").focus() : navigate(href)
        }
      >
        <Tilt className="parallax-effect" perspective={1000}>
          <div className="inner-element flex-wrap w-[60%]">
            {emblemImage ? (
              <Image src={emblemImage} width={300} height={300} alt="grid" />
            ) : null}
          </div>
          {gridImage ? (
            <Image src={gridImage} width={400} height={400} alt="grid" />
          ) : null}
        </Tilt>
      </div>

      <div className="md:ml-1">
        <div className="text-white font-bold gt-america text-2xl text-left mb-3">
          {title}
        </div>
        <div className="text-white text-left text mb-2">
          {body ? truncate(blockContentToPlainText(body)) : null}
        </div>

        {link ? (
          <a
            className="text-primary font-bold gt-america font-bold text-[18px] text-left block"
            rel="noopener noreferrer"
            target="_blank"
            href={link}
          >
            Link to {title}
          </a>
        ) : (
          <Link
            className="text-primary font-bold gt-america font-bold text-[18px] text-left block"
            to={href}
          >
            Link to {title}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Tool;
