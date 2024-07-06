import NavBar from "./navbar/NavBar";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <header>
      <NavBar />
    </header>
  );
}
