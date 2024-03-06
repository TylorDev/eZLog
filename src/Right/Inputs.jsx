
import { Input } from "./Input";
export function Inputs() {
    return (
      <div className="text-2xl  flex flex-col justify-around w-full">
        {Input("User", "text", "Enter your email")}

        {Input("Password", "Password", "Enter your  password")}
      </div>
    );
  }