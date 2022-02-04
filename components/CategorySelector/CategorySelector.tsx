import cx from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CategoryEntity } from "./ICategorySelector";

const CategorySelector = ({
  activeSection,
  setActiveSection,
  categories,
}: {
  activeSection: CategoryEntity;
  setActiveSection: React.Dispatch<React.SetStateAction<CategoryEntity>>;
  categories: CategoryEntity[];
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex mx-auto">
      {categories.map((category) => {
        const isActive = category.title === activeSection.title;

        return (
          <div
            className="button leading-3 flex items-center justify-center border-2 rounded-md border-primary mr-5 text-white heading p-[2px] cursor-pointer h-[45px] w-[120px] text-[16px] mx-auto"
            key={category.title}
          >
            <div
              className={cx(
                "button-inner p-3 w-full h-full flex items-center justify-center rounded-sm",
                {
                  "bg-gradient-to-l from-primary to-secondary": isActive,
                }
              )}
              onClick={() => {
                setActiveSection(category);
                navigate(`/${category.title.toLowerCase()}`);
              }}
            >
              {category.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySelector;
