import Link from "next/link";

// app/not-found.js
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Not Found</h1>
      <p>We couldn’t find the page you requested.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
