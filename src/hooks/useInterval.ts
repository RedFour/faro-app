import { useEffect } from 'react';

export function useInterval(onTick: any, delay: number) {
  useEffect(() => {
    const id = setInterval(onTick, delay);

    return () => clearInterval(id);
  }, [onTick, delay]);
}
