export enum OverviewLayout {
  Grid = 'grid',
  List = 'list',
}

export interface MetaList {
  name: string
  value: string
}

export interface OverviewItem {
  id: number
  title: string
  url: string
  image: string
  metaList: MetaList[]
}

export interface CategorizedOverview {
  [key: string]: OverviewItem[];
}
