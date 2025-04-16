import { PropsWithChildren } from "react";

const Container = (
  props: PropsWithChildren & {
    className?: string;
  }
) => {
  return (
    <div >
      {props.children}
    </div>
  );
};

export default Container;
