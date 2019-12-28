import React from 'react';
import {IAuthor, IBook} from '../types';
import {Link, match} from 'react-router-dom';
import BookModel from '../models/BookModel';
import AuthorModel from '../models/AuthorModel';

interface IProps {
  id: string;
}

interface BookDetailsViewProps {
  match?: match<IProps>;
}

class BookDetailsView extends React.Component<BookDetailsViewProps> {

  render() {

    const match = this.props.match;
    const id = match ? Number(match.params.id) : 3;
    const book: IBook = BookModel.getBook(id);
    const author: IAuthor = AuthorModel.getAuthor(book.author_id);

    return (
      <>
        <p>Данные о книге:</p>
        <ul>
          <li>№: {book.id}</li>
          <li>Название книги: {book.name}</li>
          <li>Дата публикации: {book.publishing}</li>
          <li>Жанр: {book.genre}</li>
          <li>Автор: {author.name}</li>
        </ul>
        <p><Link to={['/author', book.author_id].join('/')}>К автору</Link></p>
      </>
    );
  }
}

export default BookDetailsView;