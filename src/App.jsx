function App() {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-center bg-cover "
      style={{ backgroundImage: "url('bg2.gif')" }}
    >
      {/* <button className="text-3xl"> X </button> */}

      <div className="[main] flex  text-white flex-col h-full  bg-[#0E0D0D] outline-yellow-400  ">
        {LeftSide()}

        {RightSide()}
      </div>
    </div>
  );
}
export default App;

function RightSide() {
  return <div className="[Right] flex  flex-col items-center p-5 ">
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
  </div>;
}

function Media() {
  return <div className="flex flex-col items-center w-full">
    <div className="[Social] flex gap-5 mt-20 mb-20 ">
      <button className="bg-red-500 rounded-full p-3">AC</button>
      <button className="bg-red-500 rounded-full p-3">AC</button>
      <button className="bg-red-500 rounded-full p-3">AC</button>
      <button className="bg-red-500 rounded-full p-3">AC</button>
      <button className="bg-red-500 rounded-full p-3">AC</button>
    </div>
    <div className="mb-20">
      Have an acount? <a href="/">Login</a>
    </div>
  </div>;
}

function Inputs() {
  return (
    <div className="text-2xl h-[10rem] flex flex-col justify-around w-full" >
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="w-full mt-2 "
          placeholder="Enter your email"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="username">Password</label>
        <input
          type="password"
          name="password"
          className="w-full mt-2"
          value="password"
        />
      </div>
    </div>
  );
}

function Terms() {
  return (
    <div className="flex flex-col gap-1 ">
      <div className="flex items-center">
        <input type="checkbox" className="w-6 h-6 mr-2" />
        <span>
          I am 18 years old and I have read and accept Terms and Conditions and
          Privacy Policy.
        </span>
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="w-6 h-6 mr-2" />
        <span>
          I would like to receive emails about betting and promotions from
          loot.bet.
        </span>
      </div>
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
