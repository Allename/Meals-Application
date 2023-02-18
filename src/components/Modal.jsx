import styled from "styled-components";

const Modal = () => {
  return <ModalOverlay>
    <div className="modal-container">

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
  }
`;

export default Modal;