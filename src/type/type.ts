import Icon from "@mui/icons-material/icon";
import { ReactElement } from "react";

export type CategoryType = "expenses" | "income" | "transfer";

export interface Category {
  id: string;
  name: string;
  icon: any;
  color: string;
  type: CategoryType;
}

export interface Categories {
  expenses: Category[];
  income: Category[];
  transfer: Category[];
}

export interface SidebarList {
  id: string;
  text: string;
  href: string;
  icon: ReactElement<typeof Icon>;
}

export interface Options {
  value: string;
  label: string;
}
