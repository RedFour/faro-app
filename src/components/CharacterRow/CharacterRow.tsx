import { Character } from '../../types/Character';
import './CharacterRow.scss';

interface CharacterRowProps {
  character: Character;
}

const CharacterRow = ({ character }: CharacterRowProps) => {
  return (
    <div className="character-row">
      <img src={character.image} width={50} height={50} alt={character.name} />
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
    </div>
  );
};

export default CharacterRow;
