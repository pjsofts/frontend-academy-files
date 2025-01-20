import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { incrementC } from "../../store/counter-slice";

function C() {
  const c = useSelector((state: RootState) => state.counter.c);
  const dispatch = useDispatch();
  console.log("rerendering C");
  return (
    <div className="w-80 border border-blue-400  p-4">
      C: {c}
      <div>
        <button
          className="bg-blue-900 p-1 rounded text-white border-black border"
          onClick={() => {
            dispatch(incrementC());
          }}
        >
          C++
        </button>
      </div>
    </div>
  );
}

export default C;
