export type Scalars = {
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};
export type IAuthor = {
  __typename?: 'Author';
  id: Scalars['Int'];
  name: Scalars['String'];
  birthday: Scalars['String'];
};

export type IBook = {
  __typename?: 'Book';
  id: Scalars['Int'];
  name: Scalars['String'];
  publishing: Scalars['String'];
  genre: Scalars['String'];
  author_id: Scalars['Int'];
};