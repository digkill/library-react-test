import React from 'react';
import {IAuthor} from '../types';
import {Link} from 'react-router-dom';

interface Props {
  handleClick: () => void
  authors: IAuthor[]
}

const AuthorsListView: React.FC<Props> = (props: Props) => {

  return (
    <>
      <ul>
        {props.authors.map((author: IAuthor) => <li>Имя автора: <Link
          to={['/author', author.id].join('/')}>{author.name}</Link></li>)}
      </ul>
    </>
  );
};

export default AuthorsListView;