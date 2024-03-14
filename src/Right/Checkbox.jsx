export function Checkbox({ content, ...inputProps }) {
  return (
    <div className="flex items-center  mt-4 mb-4  ">
      <input
        type="checkbox"
        className="
        relative peer shrink-0
        appearance-none w-6 h-6 border-2 border-red-500 rounded-sm bg-white
        mt-1
        checked:bg-[#950017] checked:border-0   mr-4"
        {...inputProps}
      />
      <svg
        className="
          absolute 
          w-6 h-6 mt-1
          hidden peer-checked:block
          pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>{content}</span>
    </div>
  );
}
