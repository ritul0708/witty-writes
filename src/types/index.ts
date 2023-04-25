export interface ICategoryAttributes {
  Title: string;
  Slug: string;
}

export interface ICategory {
  id: number;
  attributes: ICategoryAttributes;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}