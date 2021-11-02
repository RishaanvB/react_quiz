const Modal = (props) => {
  console.log(props);
  return (
    <section className="modal" onClick={(e) => e.stopPropagation()}>
      <p>Your score has been submitted!</p>
      <button className="btn " onClick={() => props.handleClose(false)}>
        OK
      </button>
    </section>
  );
};

export default Modal;
