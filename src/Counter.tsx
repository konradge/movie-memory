import { useAppSelector, useAppDispatch } from "./redux/hooks";

import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/slices/counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByValue(-count))}>Null</button>
    </div>
  );
}
