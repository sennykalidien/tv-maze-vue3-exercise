import type { DataCategorized, Data } from "~/types/data";

export enum OverviewLayout {
  Grid = "grid",
  List = "list",
}

export type OverviewItem = Data
export type CategorizedOverviewItem = DataCategorized;
