import {AUTHOR_SEED} from '../AuthorSeed';
import {BOOK_SEED} from '../BookSeed';
import React from 'react';
import {IAuthor, IBook} from '../types';

interface AuthorModelProps {

}

interface AuthorModelState {
  items?: any
}

class AuthorModel extends React.Component<AuthorModelProps, AuthorModelState> {


  static getAuthor(id: number): IAuthor {
    let authors: IAuthor = {id: 0, name: '', birthday: '00.00.0000'};

    AUTHOR_SEED.map(
      (author: IAuthor) => {
        if (author.id === id) {
          authors = author;
        }
      },
    );

    return authors;
  }

  static getAuthors(): IAuthor[] {
    return AUTHOR_SEED;
  }


  static getBooks(id: number): IBook[] {
    let books: IBook[] = [];

    BOOK_SEED.map(
      (book: IBook) => {
        if (book.author_id === id) {
          books.push(book);
        }
      },
    );

    return books;
  }
}

export default AuthorModel;