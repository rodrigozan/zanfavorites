import React from 'react';
import LinkCard from './LinkCard';

const LinkList = ({ links }) => {
  return (
    <div className="link-list">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
