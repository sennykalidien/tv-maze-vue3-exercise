export type DataCategorized = {
  [key: string]: Data;
}[];

export type Data = DataItem[];

export interface DataItem {
  id: number;
  title: string;
  url: string;
  image: string;
  metaList: DataMetaList[];
}

export interface DataMetaList {
  name: string;
  value: string;
}
