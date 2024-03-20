import { useEffect } from "react";
import { useAuth } from "../context/authContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { LeftSide } from "../LeftSide.jsx";
import { Input } from "../Right/Input.jsx";
function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();
  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  return (
    <div>
      <LeftSide></LeftSide>
      <div className="[Right] flex  bg-[#0e0d0d] flex-col items-center p-5     h-auto3301ff] text-white ">
        {registerErrors.map((error, i) => (
          <div key={i}>{error}</div>
        ))}
        <div className="flex justify-center items-center  text-2xl pt-5 text-white">
          LOGIN / <b>REGISTER</b>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            type="text"
            name="username"
            placeholder="Write your name"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}

          <Input
            label="Email"
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}

          <Input
            label="password"
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}
          <button className="bg-[#FF2E00] text-xl text-white font-bold rounded w-full h-10 mt-5">
            Register
          </button>
        </form>
        <p className="mt-5">
          Already Have an Account?
          <Link className="text-sky-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
