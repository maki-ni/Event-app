"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// app/not-found.js
export default function NotFound() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Not Found</h1>
      <p>We couldn’t find the page you requested.</p>
      {loading && <p>Redirecting ... </p>}
      <Link href="/">
        <Button variant={"outline"}>Return Home</Button>
      </Link>
    </div>
  );
}
