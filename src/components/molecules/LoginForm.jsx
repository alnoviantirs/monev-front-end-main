import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Checkbox, Typography } from "@material-tailwind/react";
import { loginSchema } from "../../validators/loginSchema";
import { useMutation } from "react-query";
import { loginUser } from "../../services/authService";
import Swal from "sweetalert2";
import { useAuthStore } from "../../hooks/useAuthStore";
import LoginButton from "../atoms/Button";

export default function LoginForm() {
  const setAuth = useAuthStore((state) => state.setAuth);

  // Setup React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Mutation for Login
  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      setAuth(data);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
        confirmButtonColor: "#089749",
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || error.message,
        confirmButtonColor: "#d33",
      });
    },
  });

  const username = watch("username");
  const password = watch("password");

  const isFormFilled = username && password;

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 w-full flex flex-col justify-center">
      <Typography variant="h1" className="mb-6">
        Sign In
      </Typography>

      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <Input
          {...register("username")}
          id="username"
          label="Enter your username"
          error={!!errors.username}
        />
        {errors.username && (
          <Typography color="red" variant="small">
            {errors.username.message}
          </Typography>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <Input
          {...register("password")}
          type="password"
          label="Enter your password"
          error={!!errors.password}
        />
        {errors.password && (
          <Typography color="red" variant="small">
            {errors.password.message}
          </Typography>
        )}
      </div>

      <div className="mb-4 flex items-center">
        <Checkbox {...register("rememberMe")} label="Remember Me" />
      </div>

      {/* Gunakan LoginButton di sini */}
      <LoginButton isLoading={mutation.isLoading} isFormFilled={isFormFilled} />
    </form>
  );
}
