import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/auth.js";
import { useAuth } from "../context/authContext.jsx";
import { LeftSide } from "../LeftSide.jsx";
import { Input } from "../Right/Input.jsx";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className=" text-white">
      <div>
        <LeftSide></LeftSide>
        <div className="[Right] flex  bg-[#0e0d0d] flex-col items-center p-5     h-auto3301ff] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center  "
          >
            <div className="flex justify-center items-center  text-2xl pt-5 ">
              <b> LOGIN </b> / REGISTER
            </div>
            {loginErrors.map((error, i) => (
              <div className="" key={i}>
                {error}
              </div>
            ))}
            <div className="text-2xl flex flex-col justify-around w-full">
              <Input
                label="Email"
                placeholder={"Enter your email"}
                name="email"
                type="email"
                {...register("email", { required: true })}
              ></Input>
              <p className="text-red-500">{errors.email?.message}</p>
              <Input
                label="Password"
                type="Password"
                name="password"
                placeholder={"Enter your password"}
                {...register("password", { required: true, minLength: 6 })}
              ></Input>
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <button className="bg-[#FF2E00] text-xl  font-bold rounded w-full h-10 mt-5">
              Login
            </button>
          </form>

          <p>
            Dont Have an Account?
            <Link className="text-sky-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
