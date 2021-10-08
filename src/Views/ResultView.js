import { useEffect } from "react/cjs/react.development";

export default function ResultView(props) {

    useEffect(()=>{
        setTimeout(() => {
            
        }, 1000);
    })
  return (
    <div>
      This is the resultscreen
      <h1>Your score: {props.score}</h1>
    </div>
  );
}
