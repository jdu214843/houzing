import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

export const Input = forwardRef(
  (
    {
      type,
      onChange,
      placeholder,
      name,
      value,
      defaultValue,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);
export default Input;
