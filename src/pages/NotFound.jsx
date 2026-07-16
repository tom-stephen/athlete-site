import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <section className="container-content flex min-h-[70vh] flex-col items-start justify-center pt-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-ink">Page not found.</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        That page doesn't exist. Head back to the homepage or check the results.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
