import * as React from "react";

interface Props {
  userName: string;
}

export const HomeComponent: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello {props.userName}</h2>
      </header>
    </div>
  );
};