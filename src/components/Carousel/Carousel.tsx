import { useState } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import { useInterval } from '../../hooks/useInterval';
import { randomNumber } from '../../lib/Util';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import CharacterList from '../CharacterList/CharacterList';
import './Carousel.scss';

const Carousel = () => {
  const [currCharId, setCurrCharId] = useState(2);
  const characters = useCharacters(currCharId);
  const [isPolling, setIsPolling] = useState(true);
  const [onlyAlive, setOnlyAlive] = useState(false);

  // Trigger every 10 seconds if isPolling
  useInterval(() => {
    if (isPolling) {
      setRandomCharId();
    }
  }, 10 * 1000);

  function setRandomCharId() {
    setCurrCharId(randomNumber(1, 183));
  }

  const filteredChars = characters
    .filter((c) => c.id !== currCharId)
    .filter((c) => {
      if (onlyAlive) {
        return c.status === 'Alive';
      } else {
        return true;
      }
    });

  return (
    <div className="carousel">
      <h1>Character Carousel</h1>
      <CharacterDetail
        key={currCharId}
        character={characters.find((c) => c.id === currCharId)}
      />
      <div className="controls-row">
        <button onClick={setRandomCharId}>Next</button>
        <label className="app-checkbox">
          <input
            type="checkbox"
            checked={isPolling}
            onChange={() => setIsPolling(!isPolling)}
          />
          Polling
        </label>
        <label className="app-checkbox">
          <input
            type="checkbox"
            checked={onlyAlive}
            onChange={() => setOnlyAlive(!onlyAlive)}
          />
          Show Only Alive
        </label>
      </div>
      <CharacterList characters={filteredChars} />
    </div>
  );
};

export default Carousel;
