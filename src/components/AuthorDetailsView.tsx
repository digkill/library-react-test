import React, {useEffect, useState} from 'react';
import {IAuthor, IBook} from '../types';
import AuthorModel from '../models/AuthorModel';
import {Link, match} from 'react-router-dom';

interface IProps {
  id: string;
}

interface AuthorsDetailsViewProps {
  match?: match<IProps>;
}

class AuthorsDetailsView extends React.Component<AuthorsDetailsViewProps> {

  render() {
    const match = this.props.match;
    const id = match ? Number(match.params.id) : 3;
    const author: IAuthor = AuthorModel.getAuthor(id);

    const booksViaAuthor: IBook[] = AuthorModel.getBooks(id);

    return (
      <>
        <p>Данные об авторе:</p>
        <ul>
          <li>№: {author.id}</li>
          <li>Имя: {author.name}</li>
          <li>Дата рождения: {author.birthday}</li>
        </ul>
        <p>Список книг:</p>
        <ul>
          {booksViaAuthor.map((book: IBook) => <li>Название книги: <Link
            to={['/book', book.id].join('/')}>{book.name}</Link></li>)}
        </ul>
        <p><Link to={'/'}>К списку авторов</Link></p>
      </>

    );

  }
}

export default AuthorsDetailsView;