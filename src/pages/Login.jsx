import LoginCard from "../components/organisms/LoginCard";

export default function LoginPage() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#EAF7EF]">
      <div className="absolute top-0 left-0">
        <svg width="391" height="324" viewBox="0 0 391 324" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35.7399" cy="-31.2602" r="355.26" fill="#9BF2BF" />
          <circle cx="-7.15561" cy="-56.1204" r="355.26" fill="#68EC9F" />
          <circle cx="-70.5536" cy="-80.7602" r="355.26" fill="#36E67F" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0">
        <svg width="311" height="328" viewBox="0 0 311 328" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="297.2" cy="296.298" r="296.298" fill="#9BF2BF" />
          <circle cx="332.976" cy="317.032" r="296.298" fill="#68EC9F" />
          <circle cx="385.852" cy="337.583" r="296.298" fill="#36E67F" />
        </svg>
      </div>
      <LoginCard />

    </div>
  );
}
