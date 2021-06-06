import * as React from "react";
import { Container } from "react-bootstrap";

interface Props {
  userName: string;
}

export const HomeComponent: React.FC<Props> = (props) => {
  return (
    <Container className="pt-5">
      <div className="pt-2">
        <h2>Hello {props.userName}</h2>
      </div>
    </Container>
  );
};