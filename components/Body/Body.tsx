import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { BodyProps } from "./IBody";

import ExploreOurTools from "../ExploreOurTools";
import SectionToggle from "../SectionToggle";
import Item from "../Item/Item";

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
  items,
}) => {
  return (
    <div className="container mx-auto mt-20 lg:px-40 md:px-20 sm:px-0 relative">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <ExploreOurTools />
          <div className="flex mt-10">
            <SectionToggle
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
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

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-x-20 mt-20">
        {items.map((item) => {
          const visible =
            item.sections.includes(activeSection) || activeSection === "All";
          return visible ? (
            <motion.div
              variants={itemVariants}
              key={item.title}
              initial="hidden"
              animate="show"
            >
              <Item {...item} />
            </motion.div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Body;
