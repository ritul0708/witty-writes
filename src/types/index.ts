export interface ICategoryAttributes {
  Title: string;
  Slug: string;
}

export interface IArticleAttributes {
  Title: string;
  Slug: string;
  Article_Body: string;
  Publish_Date: string;
  Image: IImageData;
  author: IAuthor;
  Description: string;
}

export interface IAuthorData {
  data: {
    attributes: {
      Author_Name: string;
      Email: string;
    }
  }
}

export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  };
}

export interface IAuthor {
  data: {
    attributes: {
      username: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              }
            }
          }
        }
      }
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

export type TDirection = 1 | -1;

export interface IQueryOptions {
  filters: any;
  sort: any;
  populate: any;
  pagination: {
    page: number;
    pageSize?: number;
  };
}
