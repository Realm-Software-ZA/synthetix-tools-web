import React from "react";
import { CategoryEntity } from "../../types/CategoryEntity";

export interface FiltersProps {
  activeSection: CategoryEntity;
  setActiveSection: React.Dispatch<React.SetStateAction<CategoryEntity>>;
  categories: CategoryEntity[];
}
