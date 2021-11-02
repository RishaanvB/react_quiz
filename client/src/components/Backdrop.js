export const Backdrop = ({ children, handleClose }) => {
  return (
    <div className="backdrop" onClick={() => handleClose(false)}>
      {children}
    </div>
  );
};
