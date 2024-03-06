export function Input(label = "Texto", type = "text", placeholder) {
    return (
      <div className="mt-5">
        <label htmlFor="email" className="text-lg">
          {label}
        </label>
        <input
          name="email"
          className="w-full h-12 text-xl  pl-2 pt- border rounded bg-[#950017]"
          placeholder={placeholder}
          type={type} />
      </div>
    );
  }
