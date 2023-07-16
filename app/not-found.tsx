import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Could not find requested resources</p>
      <p>
        View <Link href="/products">all products</Link>
      </p>
    </div>
  );
}
