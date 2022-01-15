import { FC, createElement } from "react";
import { render } from "react-dom";
export const Index: FC = () => {
  return (
    <div>
      <p>Hello Wold!!!</p>
    </div>
  );
};

render(createElement(Index), document.getElementById("root"));
