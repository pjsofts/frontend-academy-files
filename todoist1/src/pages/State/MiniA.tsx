
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function MiniA() {
  const a = useSelector((state: RootState) => state.counter.a);
  return <div>A: {a}</div>;
}

export default MiniA;
