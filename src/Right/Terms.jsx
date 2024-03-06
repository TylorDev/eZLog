import { Checkbox } from "./Checkbox";

export function Terms() {
    return (
      <div className=" w-full">
        {Checkbox(
          "I am a 1222 years old and I have read and accept Terms and Conditions and Privacy Policy ."
        )}
        {Checkbox(" accept Terms and Conditions and Privacy Policy.")}
      </div>
    );
  }


