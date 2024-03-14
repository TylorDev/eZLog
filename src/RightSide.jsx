import { Inputs } from "./Right/Inputs.jsx";
import { Media } from "./Right/Media.jsx";
import { Terms } from "./Right/Terms.jsx";

export function RightSide() {
  return (
    <div className="[Right] flex  bg-[#0e0d0d] flex-col items-center p-5    h-auto3301ff] ">
      <form className="flex flex-col items-center  ">
        <div className="flex justify-center items-center  text-2xl pt-5">
          <b>REGIS </b>/ LOGN{" "}
        </div>
        <Inputs
          register={{ ...register("email", { required: true }) }}
        ></Inputs>

        <Terms></Terms>
        <button
          type="submit"
          className="bg-[#FF2E00] text-xl text-white font-bold rounded w-full h-10 mt-5"
        >
          REGISTRATION
        </button>
      </form>
      <Media />
    </div>
  );
}
