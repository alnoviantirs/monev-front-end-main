import { Button as MaterialButton } from "@material-tailwind/react";

export function Button({ children, ...props }) {
  return <MaterialButton {...props}>{children}</MaterialButton>;
}
