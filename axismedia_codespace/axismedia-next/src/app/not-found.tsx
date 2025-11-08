// src/app/not-found.tsx
export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-8 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-600">
        The page you’re looking for doesn’t exist.
      </p>
      <a href="/" className="mt-6 inline-block underline underline-offset-4">
        Go back home
      </a>
    </main>
  );
}