import { Dispatch, SetStateAction } from "react";
import { CategoryEntity } from "../CategorySelector/ICategorySelector";
import { ToolEntity } from "../Tool/ITool";

export interface BodyProps {
  tools: ToolEntity[];
  categories: CategoryEntity[];
}
