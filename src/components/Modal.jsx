import styled from "styled-components";
import { useGlobalContext } from "../context";

const Modal = () => {
  const {selectedMeal, closeModal} = useGlobalContext();
  const {strMeal:title, strMealThumb:image, strInstructions:description, strSource:source} = selectedMeal;

  return <ModalOverlay>
    <div className="modal-container">
      <img src={image} alt={title} className='img modal-img'/>

      <div className="modal-content">
        <h4>{title}</h4>
        <p>Cooking Instructions:</p>
        <p>{description}</p>
        <a href={source} target='_blank' rel='noreferrer'>Original Source</a>
        <button className="btn btn-hipster close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  </ModalOverlay>
}

const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: grid;
  place-items: center;
  transition: var(--transition);
  z-index: 100;

  .modal-container {
    width: 80vw;
    max-width: 800px;
    height: 80vh;
    overflow: scroll;
    background: var(--white);
    border-radius: var(--borderRadius);

    .modal-img {
      height: 15rem;
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
    }

    .modal-content {
      padding: 1rem 1.5rem;

      p {
        color: var(--grey-600);
      }

      a {
        display: block;
        color: var(--primary-500);
        margin-bottom: 1rem;
        text-decoration: underline;
        transition: var(--transition);

        &:hover {
          color: var(--black);
        }
      }

      .close-btn {
        background: var(--red-dark);
        color: var(--white);
      }
    }
  }
`;

export default Modal;