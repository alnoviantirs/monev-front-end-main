import { Input as MaterialInput } from "@material-tailwind/react";

export function Input({ label, size, ...props }) {
  return <MaterialInput label={label} size={size} {...props} />;
}
