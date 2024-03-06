import { Input } from "./Input";

export function Inputs() {
  return (
    <div className="text-2xl flex flex-col justify-around w-full">
      <Input label="Email" placeholder={"Enter your email"}></Input>
      <Input label="Password"  type="Password" placeholder={"Enter your password"}></Input>
    </div>
  );
}
