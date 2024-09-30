import { Input } from "../atoms/Input";
import { Checkbox } from "../atoms/Checkbox";

export function LoginForm() {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Email" size="lg" />
      <Input label="Password" size="lg" />
      <Checkbox label="Remember Me" />
    </div>
  );
}
