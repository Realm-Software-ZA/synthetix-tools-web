import { ToolEntity } from "../../types/ToolEntity";
import { CategoryEntity } from "../../types/CategoryEntity";

export interface ToolsGridProps {
  activeSection: CategoryEntity;
  tools: ToolEntity[];
  packId: string;
}
