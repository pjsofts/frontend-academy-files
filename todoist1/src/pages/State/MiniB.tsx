import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function MiniB() {
    const b = useSelector((state: RootState) => state.counter.b);
  return (
    <div>B: {b}</div>
  )
}

export default MiniB