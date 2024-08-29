import type { DataCategorized, DataItem } from "~/types/data";

export enum OverviewLayout {
  Grid = "grid",
  List = "list",
}

export type OverviewItem = DataItem;
export type CategorizedOverview = DataCategorized;
