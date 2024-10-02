import yourImage from "../../assets/seaqis-login.png";
import LoginForm from "../molecules/LoginForm";

export default function LoginCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full max-w-[50rem] h-auto flex overflow-hidden relative">
      <div className="w-1/2 flex flex-col justify-center p-8">
        <LoginForm />
      </div>

      <div className="w-1/2 bg-cover bg-center flex justify-center items-center rounded-r-lg relative">
        <svg
          width="466"
          height="524"
          viewBox="0 0 466 524"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="355.971" cy="207.25" r="355.26" fill="#68EC9F" />
          <circle cx="420.657" cy="218.75" r="355.26" fill="#CDF9DF" />
        </svg>
        <div className="absolute top-12 right-9">
          <img src={yourImage} alt="Logo"/>
        </div>
      </div>
    </div>
  );
}
