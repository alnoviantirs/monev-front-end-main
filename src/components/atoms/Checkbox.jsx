import { Checkbox as MaterialCheckbox } from "@material-tailwind/react";

export function Checkbox({ label, ...props }) {
  return (
    <div className="-ml-2.5">
      <MaterialCheckbox label={label} {...props} />
    </div>
  );
}
