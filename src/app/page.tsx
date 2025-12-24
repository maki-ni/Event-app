import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <NavBar />
      {/* the home page that the typical user sees */}
      <HomePage />
    </div>
  );
}
