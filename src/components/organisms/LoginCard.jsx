import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "../atoms/Button";
import { LoginForm } from "../molecules/LoginForm";

export function LoginCard() {
  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <LoginForm />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
