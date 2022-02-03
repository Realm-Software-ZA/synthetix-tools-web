import { Dispatch, SetStateAction } from "react";
import { SectionType } from "../Section/ISection";
import { ItemEntity } from "../../models/Item";

export interface BodyProps {
  items: ItemEntity[];
  activeSection: SectionType;
  setActiveSection: Dispatch<SetStateAction<SectionType>>;
}
