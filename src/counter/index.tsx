import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";
import CounterValue from "./counterValue";
import {
  color,
  flexbox,
  layout,
  ColorProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";
import { incrementCounter, decrementCounter } from "../store/counterSlice";
import Button from './Button'
interface WrapperProps extends ColorProps, FlexboxProps, LayoutProps {}

const Wrapper = styled.div<WrapperProps>`
  ${flexbox}
  ${color}
    ${layout}
`;

const Counter = () => {
  const { count } = useSelector((state: RootState) => state.counter); // see store.ts
  const dispatch = useDispatch();

  return (
    <Wrapper
      bg="#004761"
      color="#000"
      alignItems="center"
      justifyContent="center"
      display={"flex"}
      flexDirection="column"
      minHeight="100vh"
    >
     <Button onClick={() => dispatch(decrementCounter())} >-1</Button>
      <CounterValue count={count} />
      <Button onClick={() => dispatch(incrementCounter())} >+1</Button>
    </Wrapper>
  );
};

export default Counter;
