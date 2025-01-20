import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { incrementB } from "../../store/counter-slice";

function B() {
  console.log("B is rerendering");
  const b = useSelector((state: RootState) => state.counter.b);
  const dispatch = useDispatch();
  return (
    <div className="w-80 border border-blue-400  p-4">
      B: {b}
      <div>
        <button
          className="bg-blue-900 p-1 rounded text-white border-black border"
          onClick={() => {
            dispatch(incrementB());
          }}
        >
          B++
        </button>
      </div>
    </div>
  );
}

export default B;
