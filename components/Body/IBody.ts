import { Dispatch, SetStateAction } from "react";

import { Tool } from "../../models/Tool";

export interface BodyProps {
  tools: Tool[];
  categories: string[];
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}
