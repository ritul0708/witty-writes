export interface ICategoryAttributes {
  Title: string;
  Slug: string;
}

export interface IArticleAttributes {
  Title: string;
  Slug: string;
  Article_Body: string;
  Author_Name: string;
  Publish_Date: string;
  Image: IImageData;
}

export interface IImageData {
  data: {
    attributes: {
      url: string;
        formats: {
          small: {
            url: string;
          };
        };
    }
  }
}

export interface ICategory {
  id: number;
  attributes: ICategoryAttributes;
}

export interface IArticle {
  id: number;
  attributes: IArticleAttributes;
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
