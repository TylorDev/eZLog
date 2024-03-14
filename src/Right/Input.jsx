import { forwardRef } from "react";

export const Input = forwardRef(({ label, ...props }, ref) => (
  <div className="mt-5">
    <label htmlFor="" className="text-white">
      {label}
    </label>
    <input
      className="w-full h-12 text-xl pl-2 pt-1 border rounded bg-[#950017]"
      {...props}
      ref={ref}
    />
  </div>
));
