export interface Child {
  publishedfileid: string;
  sortorder: number;
  filetype: number;
}

export interface CollectionDetail {
  publishedfileid: string;
  result: number;
  children: Child[];
}

export interface Response {
  result: number;
  resultcount: number;
  collectiondetails: Collectiondetail[];
}

export interface RootObject {
  response: Response;
}
