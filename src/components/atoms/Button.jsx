import { Button as MaterialButton } from "@material-tailwind/react";

export function Button({ children, ...props }) {
  return <MaterialButton {...props}>{children}</MaterialButton>;
}


export default function LoginButton({ isLoading, isFormFilled }) {
  return (
    <MaterialButton
      type="submit"
      fullWidth
      disabled={isLoading || !isFormFilled}
      style={{
        backgroundColor: isFormFilled ? "#089749" : "#C0C0C0",
        color: isFormFilled ? "white" : "gray",
        cursor: isFormFilled ? "pointer" : "not-allowed",
      }}
    >
      {isLoading ? "Signing In..." : "Sign In"}
    </MaterialButton>
  );
}
