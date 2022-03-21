import { CategoryEntity } from "../../types/CategoryEntity";
import { ToolEntity } from "../../types/ToolEntity";

export interface BodyProps {
  tools: ToolEntity[];
  categories: CategoryEntity[];
}
