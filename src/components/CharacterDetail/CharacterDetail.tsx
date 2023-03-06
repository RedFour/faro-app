import { useState } from 'react';
import { useLocation } from '../../hooks/useLocation';
import { Character } from '../../types/Character';
import './CharacterDetail.scss';

interface CharacterDetailProps {
  character: Character | undefined;
}

const CharacterDetail = ({ character }: CharacterDetailProps) => {
  const [showLocation, setShowLocation] = useState(false);
  const locationUrl = character?.location.url;
  const location = useLocation(locationUrl, showLocation);

  return (
    <div className="character-detail">
      <div className="image-container">
        <img
          className="char-image"
          src={character?.image}
          alt="Morty"
          onMouseEnter={() => setShowLocation(true)}
          onMouseLeave={() => setShowLocation(false)}
        />
      </div>
      <div className="info-list">
        <p>Name: {character?.name}</p>
        <p>Status: {character?.status}</p>
        <p>Species: {character?.species}</p>
        <p>Gender: {character?.gender}</p>
      </div>
      {showLocation && location && (
        <div>
          <h3>Location</h3>
          <p>Name: {location?.name}</p>
          <p>Type: {location?.type}</p>
          <p>Dimension: {location?.dimension}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
