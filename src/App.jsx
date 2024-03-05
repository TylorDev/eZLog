function App() {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-center bg-cover "
      style={{ backgroundImage: "url('bg2.gif')" }}
    >
      <div className="[main] flex  text-white flex-col h-full  bg-[#0E0D0D] outline-yellow-400  ">
        {LeftSide()}
        <button className="text-2xl ">
          {" "}
          <b>REGISTRATION </b>/ LOGIN{" "}
        </button>
        {RightSide()}
      </div>
    </div>
  );
}
export default App;

function RightSide() {
  return (
    <div className="[Right] flex  flex-col items-center p-5 ">
      <form action="login" className="flex flex-col items-center ">
        {Inputs()}

        {Terms()}
        <button
          type="submit"
          className="bg-white text-xl font-bold text-black w-full h-10 mt-5"
        >
          REGISTRATION
        </button>
      </form>
      {Media()}
    </div>
  );
}

function Media() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="[Social] flex gap-5 mt-5 mb-5">
        <button className="bg-red-500 rounded-full p-3">AC</button>
        <button className="bg-red-500 rounded-full p-3">AC</button>
        <button className="bg-red-500 rounded-full p-3">AC</button>
        <button className="bg-red-500 rounded-full p-3">AC</button>
        <button className="bg-red-500 rounded-full p-3">AC</button>
      </div>
      <div className="mb-20">
        Have an acount? <a href="/">Login</a>
      </div>
    </div>
  );
}

function Inputs() {
  return (
    <div className="text-2xl  flex flex-col justify-around w-full">
      {Input("User", "text", "Enter your email")}

      {Input("Password", "Password", "Enter your  password")}
    </div>
  );
}

function Input(label = "Texto", type = "text", placeholder) {
  return (
    <div className="mt-5">
      <label htmlhtmlFor="email" className="text-lg">
        {label}
      </label>
      <input
        name="email"
        className="w-full h-12 text-xl  pl-2 pt- border rounded bg-[#950017]"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

function Terms() {
  return (
    <div>
      {Checkbox(
        "I am 18 years old and I have read and accept Terms and Conditions and Privacy Policy ."
      )}
      {Checkbox(" accept Terms and Conditions and Privacy Policy.")}
    </div>
  );
}

function Checkbox(content) {
  return (
    <div className="flex items-center  ">
       <input type="checkbox" id="some_id" className="
        relative peer shrink-0
        appearance-none w-6 h-6 border-2 border-red-500 rounded-sm bg-white
        mt-1
        checked:bg-red-800 checked:border-0"
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

function LeftSide() {
  return (
    <div
      className="[Left] flex  items-end justify-center h-40 bg-cover relative"
      style={{ backgroundImage: "url('back2.png')" }}
    >
      <div className="[Left-Text]  w-full  text-start">
        <div className="text-xl font-bold "> HI THERE!</div>
        <div> Join us and enjoy! :) </div>
      </div>
      <img
        className="absolute  h-full  scale-[120%]  bottom-4 "
        src="main2.webp"
        alt="XD"
      />
    </div>
  );
}

