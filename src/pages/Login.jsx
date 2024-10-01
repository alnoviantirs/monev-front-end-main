import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { loginSchema } from "../validators/loginSchema";
import { loginUser } from "../services/authService";
import { Button, Input, Checkbox, Typography } from "@material-tailwind/react";
import { useAuthStore } from "../hooks/useAuthStore";
// import  loginUser  from "../services/authService";

export default function LoginPage() {
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
    <div className="relative flex justify-center items-center min-h-screen bg-[#EAF7EF]">
      {/* SVG Dekorasi Pojok Kiri Atas */}
      <div className="absolute top-0 left-0">
        <svg
          width="391"
          height="324"
          viewBox="0 0 391 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="35.7399" cy="-31.2602" r="355.26" fill="#9BF2BF" />
          <circle cx="-7.15561" cy="-56.1204" r="355.26" fill="#68EC9F" />
          <circle cx="-70.5536" cy="-80.7602" r="355.26" fill="#36E67F" />
        </svg>
      </div>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-[50rem] h-auto flex overflow-hidden relative">
        {/* Form Login */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 w-1/2 flex flex-col justify-center"
        >
          <Typography variant="h4" className="mb-4">
            Sign In
          </Typography>

          <div className="mb-4">
            <Input
              {...register("username")}
              label="Username"
              error={errors.username ? true : false}
              helpertext={errors.username?.message}
            />
            {errors.username && (
              <Typography color="red" variant="small">
                {errors.username.message}
              </Typography>
            )}
          </div>

          <div className="mb-4">
            <Input
              {...register("password")}
              label="Password"
              type="password"
              error={errors.password ? true : false}
              helpertext={errors.password?.message}
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

          <Button type="submit" fullWidth disabled={mutation.isLoading}>
            {mutation.isLoading ? "Signing In..." : "Sign In"}
          </Button>

          {mutation.isError && (
            <Typography color="red" className="mt-4 text-center">
              {mutation.error?.message}
            </Typography>
          )}
        </form>

        {/* SVG Background */}
        <div className="w-1/2 bg-cover bg-center flex justify-center items-center rounded-r-lg relative">
          <svg
            width="466"
            height="524"
            viewBox="0 0 466 524"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="355.971"
              cy="207.25"
              r="355.26"
              transform="rotate(-180 355.971 207.25)"
              fill="#68EC9F"
            />
            <circle
              cx="420.657"
              cy="218.75"
              r="355.26"
              transform="rotate(-180 420.657 218.75)"
              fill="#CDF9DF"
            />
          </svg>

          {/* Gambar JPG di sebelah kanan atas */}
          <div className="absolute top-3 right-3">
            <img src="/logo-seaqis.png" alt="New Image" className="w-14 h-14" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg
          width="311"
          height="328"
          viewBox="0 0 311 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="297.2"
            cy="296.298"
            r="296.298"
            transform="rotate(-180 297.2 296.298)"
            fill="#9BF2BF"
          />
          <circle
            cx="332.976"
            cy="317.032"
            r="296.298"
            transform="rotate(-180 332.976 317.032)"
            fill="#68EC9F"
          />
          <circle
            cx="385.852"
            cy="337.583"
            r="296.298"
            transform="rotate(-180 385.852 337.583)"
            fill="#36E67F"
          />
        </svg>
      </div>

    </div>
  );
}