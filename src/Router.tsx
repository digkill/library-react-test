import React from 'react';
import {Route, Switch} from 'react-router';
import AuthorsDetailsView from './components/AuthorDetailsView';
import AuthorsListView from './components/AuthorsListView';
import AuthorModel from './models/AuthorModel';
import BookDetailsView from './components/BookDetailsView';


const AuthorListWrapper: React.FC = () => {
  return <AuthorsListView authors={AuthorModel.getAuthors()} handleClick={() => {
    return false;
  }}/>;
};

const Router: React.FC = () => {

  return (
    <Switch>
      <Route exact path="/author/:id" component={AuthorsDetailsView}/>
      <Route exact path="/book/:id" component={BookDetailsView}/>
      <Route path="/" component={AuthorListWrapper}/>
    </Switch>
  );
};

export default Router;