import React, { FunctionComponent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "next/image";

import { BodyProps } from "./IBody";
import { useIsMobile } from "../../hooks/useIsMobile";
import { CategoryEntity } from "../../types/CategoryEntity";

import ExploreOurTools from "../ExploreOurTools";
import Filters from "../Filters/Filters";
import ToolsGrid from "../ToolsGrid/ToolsGrid";

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

  const selectedPack =
    tools && tools.length > 0
      ? tools.find((tool) => tool._id === packId)
      : null;

  return (
    <div className="container mx-auto lg:px-20 mt-32 relative z-10 mt-0 pt-32">
      <div className="flex align-middle justify-center">
        <Image
          src={"/img/synthetix-tools-logo-triangle@2x.png"}
          alt="logo"
          height={isMobile ? 200 : 300}
          width={isMobile ? 200 : 300}
          onClick={backToRoot}
          className="cursor-pointer"
        />
      </div>

      <ExploreOurTools />
      <div className="flex">
        <div className="flex mt-10 w-full">
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
            <Filters
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              categories={allCategories}
            />
          )}
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

      <ToolsGrid tools={tools} activeSection={activeSection} packId={packId} />
    </div>
  );
};

export default Body;
