import '../../styles/Modal.css';

const Modal = (props) => {
  return (
    <section className="modal" onClick={(e) => e.stopPropagation()}>
      <p className="modal-text">Your score has been submitted!</p>
      <button
        className="btn btn-modal"
        onClick={() => props.handleClose(false)}>
        OK
      </button>
    </section>
  );
};

export default Modal;
