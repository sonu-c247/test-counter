import React from "react";
import {
  render,
  RenderResult,
  screen,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import Counter from "../counter";
import store from "../store/store";

const setup = (): RenderResult =>
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

test("should display the counter value", () => {
  setup();
  expect(screen.getByText(0)).toBeInTheDocument();
});

test("should increase the counter", () => {
  setup();
  fireEvent.click(screen.getByText("+1"));
  let state = store.getState().counter;
  expect(state.count).toBe(1);
});

test("should decrease the counter", () => {
  setup();
  fireEvent.click(screen.getByText("-1"));
  let state = store.getState().counter;
  expect(state.count).toBe(0);
});
