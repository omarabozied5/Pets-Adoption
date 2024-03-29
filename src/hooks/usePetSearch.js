import { useQuery } from '@tanstack/react-query';

const fetchPets = async ({ queryKey }) => {
  const [, { animal, location, breed }] = queryKey;
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );
  return res.json();
};

// searchParams => {animal , location , breed}
const usePetSearch = (searchParams) => {
  return useQuery(['search-pets', searchParams], fetchPets);
};

export default usePetSearch;
