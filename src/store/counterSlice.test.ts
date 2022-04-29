import reducer, { decrementCounter, incrementCounter } from "./counterSlice";

test("increment counter", () => {
  const previousState = { count: 0 };
  expect(reducer(previousState, incrementCounter())).toEqual({
    count: 1,
  });
});

test("decrement counter", () => {
  const previousState = { count: 1 };
  expect(reducer(previousState, decrementCounter())).toEqual({
    count: 0,
  });
});
