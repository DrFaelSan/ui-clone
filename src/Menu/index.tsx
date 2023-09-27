import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="bg-black h-5 text-white flex flex-row items-center justify-around ">
      <Link to="/spotify" className="rounded-full w-20">
        Spotify
      </Link>
      <Link to="/nubank" className="rounded-full w-20">
        Nubank
      </Link>
    </div>
  );
}
