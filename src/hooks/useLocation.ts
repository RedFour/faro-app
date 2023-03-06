import { useEffect, useState } from 'react';
import RickyMortyService from '../services/RickMortyService';
import { Location } from '../types/Location';

export function useLocation(
  locationUrl: string | undefined,
  showLocation: boolean
) {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    let ignore = false;

    if (showLocation && locationUrl) {
      RickyMortyService.getLocation(locationUrl)
        .then((res: any) => {
          if (!ignore) {
            setLocation(res.data);
          }
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }

    return () => {
      ignore = true;
    };
  }, [locationUrl, showLocation]);

  return location;
}
