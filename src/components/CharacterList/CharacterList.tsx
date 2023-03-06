import React from 'react';
import { Character } from '../../types/Character';
import CharacterRow from '../CharacterRow/CharacterRow';
import './CharacterList.scss';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <div className="character-list">
      <h2>Previous Characters</h2>
      {characters.map((c) => {
        return <CharacterRow key={c.id} character={c} />;
      })}
    </div>
  );
};

export default CharacterList;
