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
