import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { loginSchema } from "../validators/loginSchema";
import { loginUser } from "../services/authService";
import { Button, Input, Checkbox, Typography } from "@material-tailwind/react";
import { useAuthStore } from "../hooks/useAuthStore";

export default function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);

  // Setup React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Mutation for Login
  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      // Simpan token atau info user ke Zustand
      setAuth(data);
      alert("Login successful!");
    },
    onError: (error) => {
      alert("Login failed! " + error.response?.data?.message || error.message);
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-lg rounded-lg w-96"
      >
        <Typography variant="h4" className="mb-4">
          Sign In
        </Typography>

        <div className="mb-4">
          <Input
            {...register("email")}
            label="Email"
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />
        </div>

        <div className="mb-4">
          <Input
            {...register("password")}
            label="Password"
            type="password"
            error={errors.password ? true : false}
            helperText={errors.password?.message}
          />
        </div>

        <div className="mb-4 flex items-center">
          <Checkbox {...register("rememberMe")} label="Remember Me" />
        </div>

        <Button type="submit" fullWidth disabled={mutation.isLoading}>
          {mutation.isLoading ? "Signing In..." : "Sign In"}
        </Button>

        {mutation.isError && (
          <Typography color="red" className="mt-4 text-center">
            {mutation.error?.message}
          </Typography>
        )}
      </form>
    </div>
  );
}
