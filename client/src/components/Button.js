
export default function Button(props) {
  return (
    <button
      className={props.styles + ' btn-normal'}
      onClick={props.handleClick}>
      {props.children}
      {props.imgSrc && <img className="image-icon" src={props.imgSrc} alt="" />}
    </button>
  );
}
