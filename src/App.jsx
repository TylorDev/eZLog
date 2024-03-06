function App() {
  return (
    <div
      className="flex items-center justify-center min-h-screen   bg-center bg-cover "
      style={{ backgroundImage: "url('bg2.gif')" }}
    >
      <div className="[main] flex  text-white flex-col      mt-24 m-5 ">
       
        {LeftSide()}   
        {RightSide()}
      </div>
    </div>
  );
}
export default App;

function LeftSide() {
  return (
    <div
      className="[Left] flex  items-end justify-center  bg-cover relative h-[20vh] " 
    >

     
      {/* <div className="[Left-Text]  w-full  text-start">
        <div className="text-xl font-bold "> HI THERE!</div>
        <div> Join us and enjoy! :) </div>
      </div> */}
      <img
        className=" w-[24vh] z-30 "
        src="main2.webp"
        alt="XD"
      />

      <img className=" absolute object-cover  w-full h-full"  src="back2.png" alt="XD"  />
    </div>
  );
}


function RightSide() {
  return (
    <div className="[Right] flex  bg-[#0e0d0d] flex-col items-center p-5  z-50  h-auto3301ff] ">
      <form action="login" className="flex flex-col items-center  ">
      <div className="flex justify-center items-center  text-2xl pt-5">
          <b>REGISTRATION </b>/ LOGIN{" "}
        </div>
        {Inputs()}

        {Terms()}
        <button
          type="submit"
          className="bg-[#FF2E00] text-xl text-white font-bold rounded w-full h-10 mt-5"
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
    <div className="flex flex-col items-center justify-between h-full  w-full0044ff]">
      <div className="[Social] flex items-center justify-between mt-5 mb-5 h-[fit] w-[90%] ">
        {MediaButtom()}
        {MediaButtom()}
        {MediaButtom()}
        {MediaButtom()}
        {MediaButtom()}
        
      </div>
      <div >
        Have an acount? <a  className="underline font-bold" href="/">Login</a>
      </div>
    </div>
  );
}

function MediaButtom() {
  return <button className="bg-[#950017] rounded-full p-3 w-10 h-10 m-2">AC</button>;
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
      <label htmlFor="email" className="text-lg">
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
    <div className=" w-full">
      {Checkbox(
        "I am 18 years old and I have read and accept Terms and Conditions and Privacy Policy ."
      )}
      {Checkbox(" accept Terms and Conditions and Privacy Policy.")}
    </div>
  );
}

function Checkbox(content) {
  return (
    <div className="flex items-center  mt-4 mb-4  ">
      <input
        type="checkbox"
        id="some_id"
        className="
        relative peer shrink-0
        appearance-none w-6 h-6 border-2 border-red-500 rounded-sm bg-white
        mt-1
        checked:bg-[#950017] checked:border-0   mr-4"
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
