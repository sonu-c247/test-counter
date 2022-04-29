import React from "react";
import styled from "styled-components";

import {
  color,
  space,
  typography,
  ColorProps,
  SpaceProps,
  TypographyProps
} from "styled-system";

interface CounterProps extends ColorProps, SpaceProps, TypographyProps {}

interface CounterValueProps {
  count: number;
}

const Counter = styled.div<CounterProps>`
  ${color}
  ${space}
  ${typography}
`;

const CounterValue: React.FC<CounterValueProps> = ({ count }) => {
  return (
    <Counter color="green" fontSize="64px" fontWeight="700" my="90px">
      {count}
    </Counter>
  );
};

export default CounterValue;
