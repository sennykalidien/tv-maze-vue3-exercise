export interface DataCategorized {
  [key: string]: Data[];
}

export interface Data {
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
