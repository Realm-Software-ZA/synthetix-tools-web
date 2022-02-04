import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { BodyProps } from "./IBody";

import ExploreOurTools from "../ExploreOurTools";
import SectionToggle from "../SectionToggle";
import Tool from "../Tool/Tool";
import { useIsMobile } from "../../hooks/useIsMobile";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Body: FunctionComponent<BodyProps> = ({
  activeSection,
  setActiveSection,
  tools,
  categories,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="container mx-auto mt-40 lg:px-40 md:px-20 sm:px-0 relative z-10">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <ExploreOurTools />
          <div className="flex mt-10">
            {isMobile ? (
              <select className="button-inner p-3 w-full h-full flex items-center justify-center rounded-sm">
                {categories.map((category) => (
                  <option>{category}</option>
                ))}
              </select>
            ) : (
              <SectionToggle
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                categories={categories}
              />
            )}
          </div>
        </div>
        <div className="flex-none mr-5 mt-3.5">
          <Image
            src={"/img/synthetix-tools-logo-triangle@2x.png"}
            alt="logo"
            height={300}
            width={300}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-10 lg:gap-x-20 mt-20 ">
        {tools.map((item) => {
          // const visible =
          //   item.sections.includes(activeSection) || activeSection === "All";

          const visible = true;
          return visible ? (
            <motion.div
              variants={itemVariants}
              key={item.title}
              initial="hidden"
              animate="show"
            >
              <Tool {...item} />
            </motion.div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Body;
