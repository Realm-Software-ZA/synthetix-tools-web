import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

import Tool from "../Tool/Tool";

import { ToolsGridProps } from "./IToolsGrid";

const ToolsGrid: FunctionComponent<ToolsGridProps> = ({
  tools,
  activeSection,
  packId,
}) => {
  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
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
            variants={gridItemVariants}
            key={tool.title}
            initial="hidden"
            animate="show"
          >
            <Tool {...tool} />
          </motion.div>
        ) : null;
      })}
    </div>
  );
};

export default ToolsGrid;
