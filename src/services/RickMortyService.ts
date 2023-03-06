import axios from 'axios';
import { Character } from '../types/Character';
import { Location } from '../types/Location';

const axiosRMAPI = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});

const getCharacter = (id: number) => {
  return axiosRMAPI.get<Character>(`/character/${id}`);
};

const getLocation = (url: string) => {
  return axios.get<Location>(url);
};

const RickyMortyService = {
  getCharacter,
  getLocation,
};

export default RickyMortyService;
