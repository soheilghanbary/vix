import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home Page is Here</h1>
      <Link to={"/about"}>go to about page</Link>
    </div>
  );
}
