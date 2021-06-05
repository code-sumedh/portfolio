import * as React from "react";

interface Props {
  userName: string;
}

export const HomeComponent: React.FC<Props> = (props) => {
  return (
    <h2>Hello {props.userName}</h2>
  );
};