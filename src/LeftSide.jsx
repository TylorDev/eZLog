export function LeftSide() {
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
        alt="XD" />

      <img className=" absolute object-cover  w-full h-full" src="back2.png" alt="XD" />
    </div>
  );
}
