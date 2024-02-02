import { useState , useContext } from 'react';
import useBreedList from '../hooks/useBreedsList';
import Results from '../components/Results';
import usePetSearch from '../hooks/usePetSearch';
import Loader from '../components/Loader';
import ErrorBoundaries from '../components/ErrorBoundaries';
import AdoptPetContext from '../context/AdoptPetContext';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  const breedsQuery = useBreedList(searchParams.animal);
  let breeds = breedsQuery?.data?.breeds ?? [];
  //[adoptPet , setAdoptPet]
  const [adoptPet] = useContext(AdoptPetContext);

  const petsQuery = usePetSearch(searchParams);
  const pets = petsQuery?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formDate = new FormData(e.target);
          console.log(e.target);
          const animal = formDate.get('animal');
          const location = formDate.get('location');
          const breed = formDate.get('breed');
          setSearchParams({ animal, location, breed });
        }}
      >
        {adoptPet && (
          <div className="pet image-container">
            <img src={adoptPet.images[0]} alt={adoptPet.name} />
          </div>
        )}

        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" name="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setSearchParams({
                ...searchParams,
                animal: e.target.value,
                breed: '',
              });
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {petsQuery.isLoading && (
        <div className="search loader-container">
          <Loader />
        </div>
      )}
      {petsQuery.isError && <span>{petsQuery.error}</span>}
      {petsQuery.data && (
        <ErrorBoundaries>
          <Results pets={pets} />
        </ErrorBoundaries>
      )}
    </div>
  );
};

export default SearchParams;
