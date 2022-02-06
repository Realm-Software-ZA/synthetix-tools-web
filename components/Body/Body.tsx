import React, { FunctionComponent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "next/image";

import { BodyProps } from "./IBody";
import { useIsMobile } from "../../hooks/useIsMobile";
import { CategoryEntity } from "../CategorySelector/ICategorySelector";

import ExploreOurTools from "../ExploreOurTools";
import CategorySelector from "../CategorySelector/CategorySelector";
import Tool from "../Tool/Tool";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Body: FunctionComponent<BodyProps> = ({ tools, categories }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [, categoryAsString, packId] = location.pathname.split("/");

  useEffect(() => {
    const category = categories.find(
      (category) =>
        category.title.toUpperCase() === categoryAsString.toUpperCase()
    );

    if (category) setActiveSection(category);
  }, [location.pathname]);

  const [activeSection, setActiveSection] = useState<CategoryEntity>({
    title: "All",
  });

  const isMobile = useIsMobile();

  const allCategories: CategoryEntity[] = [{ title: "All" }, ...categories];

  const backToRoot = () => {
    setActiveSection({ title: "All" });
  };

  const selectedPack = tools.find((tool) => tool._id === packId);

  return (
    <div className="container mx-auto md:px-40 mt-32 relative z-10">
      <Image
        src={"/img/synthetix-tools-logo-triangle@2x.png"}
        alt="logo"
        height={isMobile ? 200 : 300}
        width={isMobile ? 200 : 300}
        onClick={backToRoot}
        className="cursor-pointer"
      />

      <div className="flex ">
        <div className="flex-1">
          <ExploreOurTools />
          <div className="flex mt-10">
            {isMobile ? (
              <select
                value={activeSection._id}
                className="button-inner p-3 w-full h-full flex items-center justify-center rounded bg-black text-primary mx-10 h-12 border-primary border-solid border-2"
                onChange={(e) => {
                  const selected = allCategories.find(
                    (category) => category._id === e.target.value
                  );

                  if (selected) {
                    setActiveSection(selected);
                    navigate(`/${selected.title.toLowerCase()}`);
                  } else {
                    setActiveSection({ title: "All" });
                    navigate(`/all`);
                  }
                }}
              >
                {allCategories.map((category) => (
                  <option value={category._id}>{category.title}</option>
                ))}
              </select>
            ) : (
              <CategorySelector
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                categories={allCategories}
              />
            )}
          </div>
        </div>
      </div>

      {selectedPack ? (
        <>
          <div className="text-white font-bold gt-america text-3xl mb-3 mt-20">
            {selectedPack?.title}
          </div>
          <hr className="w-56 mx-auto text-white" />
        </>
      ) : null}

      <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-10 lg:gap-x-20 mt-20 tools-section">
        {tools.map((tool) => {
          const toolCategoryIds = tool.categories.map(
            (category) => category._ref
          );

          const toolParentId = tool?.parent?._ref;
          const toolId = tool._id;

          const showAllSections = activeSection.title === "All";

          const isWithinPack = toolParentId && toolParentId === packId;
          const isToolWithinCategory =
            toolCategoryIds.includes(activeSection._id) && toolId !== packId;

          const showTool =
            isWithinPack || isToolWithinCategory || showAllSections;

          return showTool ? (
            <motion.div
              variants={itemVariants}
              key={tool.title}
              initial="hidden"
              animate="show"
            >
              <Tool {...tool} />
            </motion.div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Body;
