export default function FormError({ inputLength }) {
  const error1 = "Don't use spaces or special characters";
  const error2 = 'Should be of length 1-8';

  return <span>{inputLength > 8 ? error2 : error1}</span>;
}
