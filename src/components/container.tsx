import { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  return <div className="container px-3 mx-auto">{children}</div>;
}

export default Container;
