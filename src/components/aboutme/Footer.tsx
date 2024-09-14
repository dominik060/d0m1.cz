export default function Footer() {
  return (
    <footer className="flex h-24 flex-col items-center justify-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Dominik</p>
    </footer>
  );
}
