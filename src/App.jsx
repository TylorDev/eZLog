function App() {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-center bg-cover "
      style={{ backgroundImage: "url('bg2.gif')" }}
    >
      {/* <button className="text-3xl"> X </button> */}

      <div className="[main] flex  flex-col h-full rounded-xl  bg-[#0E0D0D] ">
        <div
          className="[Left] flex  justify-around h-40 bg-cover relative"
          style={{ backgroundImage: "url('back2.png')" }}
        >
          <div className="[Left-Text]  relative left-0 text-center text-white">
            <div className="text-xl font-bold "> HI THERE!</div>
            <div> Join us and enjoy! :) </div>
          </div>
          <img
            className="absolute  h-full  scale-[120%]  bottom-4 "
            src="main2.webp"
            alt="XD"
          />
        </div>

        <div className="[Right]     border-4">
          <form action="login">
            <label htmlFor="email">Email</label>
            <input name="email" type="text" />
            <label htmlFor="username">Password</label>
            <input type="password" name="password" />
            <input type="checkbox" className="text-indigo-600 form-checkbox" />
            <span className="ml-2">
              Recordarme cuando vuelva a iniciar sesion
            </span>
            <input type="checkbox" className="text-indigo-600 form-checkbox" />
            <span className="ml-2">Acepto los términos y condiciones</span>
            <button type="submit"> REGISTRATION!</button>
          </form>
          <div className="[Social]">
            <div> AC </div>
            <div> AC </div>
            <div> AC </div>
            <div> AC </div>
            <div> AC </div>
          </div>
          <div>
            {" "}
            Have an acount? <a href="/">Login</a>
          </div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
          temporibus aut, soluta, blanditiis nisi maiores ut qui consectetur hic
          eius optio possimus commodi iure eaque! Explicabo ea molestiae
          pariatur! lore
        </div>
      </div>
    </div>
  );
}
export default App;
