import React from 'react';
import {IBook} from '../types';
import {BOOK_SEED} from '../BookSeed';

interface BookModelProps {

}

interface BookModelState {
  items?: any
}

class BookModel extends React.Component<BookModelProps, BookModelState> {
  static getBook(id: number): IBook {
    let books: IBook = {id: 0, name: '', publishing: '00.00.0000', genre: '', author_id: 0};

    BOOK_SEED.map(
      (book: IBook) => {
        if (book.id === id) {
          books = book;
        }
      },
    );

    return books;
  }



}

export default BookModel;