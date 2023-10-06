import React from 'react';
import { FaHeart, FaShareSquare } from 'react-icons/fa';

const LinkCard = ({ link }) => {
  return (
    <div className="link-card">
      <img src={`/images/${link.image}`} alt={link.title} />
      <h3>{link.title}</h3>
      <p>{link.summary}</p>
      <div className="actions">
        <button><FaHeart /> Curtir</button>
        <button><FaShareSquare /> Compartilhar</button>
      </div>
    </div>
  );
};

export default LinkCard;
