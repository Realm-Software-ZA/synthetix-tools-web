import cx from "classnames";
import React from "react";
import { sections, SectionType } from "./Section/ISection";

const SectionToggle = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: SectionType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>;
}) => {
  return (
    <div className="flex">
      {sections.map((section) => {
        const isActive = section === activeSection;
        return (
          <div className="button leading-3 flex items-center justify-center w-32 border-2 rounded-md border-primary mr-2 h-10 text-white heading p-[2px] cursor-pointer">
            <div
              className={cx(
                "button-inner p-3 w-full h-full flex items-center justify-center rounded-sm",
                {
                  "bg-gradient-to-l from-primary to-secondary": isActive,
                }
              )}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionToggle;
