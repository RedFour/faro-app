import { useEffect, useState } from 'react';
import RickyMortyService from '../services/RickMortyService';
import { Character } from '../types/Character';

export function useCharacters(currCharId: number) {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    let ignore = false;

    RickyMortyService.getCharacter(currCharId)
      .then((res: any) => {
        if (!ignore) {
          setCharacters((prev) => {
            if (prev.some((c) => c.id === currCharId)) {
              return prev;
            } else {
              const newChars: Character[] = JSON.parse(JSON.stringify(prev));
              newChars.push(res.data);
              return newChars;
            }
          });
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });

    return () => {
      ignore = true;
    };
  }, [currCharId]);

  return characters;
}
