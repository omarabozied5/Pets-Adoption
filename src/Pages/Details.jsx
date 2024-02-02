import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import usePet from '../hooks/usePet';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';
import { useContext, useState } from 'react';
import AdoptPetContext from '../context/AdoptPetContext';

const Details = () => {
  const { id } = useParams();
  const petQuery = usePet(id);
  const navigate = useNavigate();
  let pet = petQuery?.data?.pets[0];

  const [showModal, setShowModal] = useState(false);

  const [, setAdoptPet] = useContext(AdoptPetContext);

  return (
    <div className="details">
      {petQuery.isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      {petQuery.isError && <span>{petQuery.error.message}</span>}
      {/* read more about diff btw isLoading/isFetching - https://stackoverflow.com/a/62653366/6483379 */}
      {/* also it will nice to understand more about Status Checks in React Query - https://tkdodo.eu/blog/status-checks-in-react-query */}
      {petQuery.data && (
        <div>
          <Carousel images={pet.images} />
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Back
          </button>
          {showModal && (
            <Modal>
              <h1>Would you like to adopt me {pet.name}</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptPet(pet);
                    navigate('/');
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  No
                </button>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
