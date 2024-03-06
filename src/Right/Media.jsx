import { MediaButtom } from "./MediaButtom";

export function Media() {
    return (
      <div className="flex flex-col items-center justify-between h-full  w-full0044ff]">
        <div className="[Social] flex items-center justify-between mt-5 mb-5 h-[fit] w-[90%] ">
          {MediaButtom()}
          {MediaButtom()}
          {MediaButtom()}
          {MediaButtom()}
          {MediaButtom()}

        </div>
        <div>
          Have an acount? <a className="underline font-bold" href="/">Login</a>
        </div>
      </div>
    );
  }


