import { useDispatch } from "react-redux";
import { incrementA } from "../../store/counter-slice";
import MiniA from "./MiniA";
import MiniB from "./MiniB";

function A() {
  const dispatch = useDispatch();
  console.log("A is rerendering");
  return (
    <div className="w-80 border border-blue-400  p-4">
      {/* <div>A: {a}</div>
      <div>B: {b}</div> */}
      <MiniA />
      <MiniB />
      <div>
        <button
          className="bg-blue-900 p-1 rounded text-white border-black border"
          onClick={() => {
            dispatch(incrementA());
          }}
        >
          A++
        </button>
      </div>
    </div>
  );
}

export default A;
