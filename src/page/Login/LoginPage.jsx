import { useForm } from "react-hook-form";

import "./LoginPage.css";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export default function LoginPage() {
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.userName, data.password);
  };

  return (
    <div className="bg-form">
      <div className="block-form">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <p className="m-4 p-2 font-semibold">لطفا وارد اکانت خود شوید</p>

          <input
            {...register("userName", { required: "username is required" })}
            aria-invalid={errors.userName ? "true" : "false"}
            placeholder="userName"
            className="input-form"
          />
          {errors.userName && <p>{errors.userName.message}</p>}

          <input
            {...register("password", { required: "username is required" })}
            placeholder="password"
            className="input-form"
          />
          {errors.password && <p>{errors.password.message}</p>}

          <input
            type="submit"
            className="btn w-28 h-12 rounded-lg border hover:border-[#01a754] border-[#8a8989] bg-[#eee] m-10 p-1 "
          />
        </form>
      </div>
    </div>
  );
}
