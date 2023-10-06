import React from 'react';
import LinkList from '../components/LinkList';
import { getAllLinks } from '../utils/storage';

const Favorites = () => {
  const links = getAllLinks();

  return (
    <div>
      <h1>Meus Favoritos</h1>
      <LinkList links={links} />
    </div>
  );
};

export default Favorites;
