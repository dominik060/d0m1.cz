export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <p
          className="opacity-40 text-sm text-center"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          © {currentYear}
        </p>
      </div>
    </footer>
  );
}
