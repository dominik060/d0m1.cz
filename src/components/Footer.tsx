import CanvasCursor from "./CanvasCursor";

export default function Footer() {
  return (
    <footer className="w-[calc(100% + 2rem)] relative -mx-8 flex h-24 flex-col items-center justify-center sm:-mx-16">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Dominik Bartuška
      </p>
      <CanvasCursor />
    </footer>
  );
}
