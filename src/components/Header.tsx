import HrFullWidth from "./HrFullWidth";
import NavBar from "./navbar/NavBar";

type Props = {
  className?: string;
  children?: React.ReactNode;
  [prop: string]: any;
};

export default function Header({ className, children, ...props }: Props) {
  return (
    <header {...props} className={className}>
      <NavBar />
      <HrFullWidth />
      {children}
    </header>
  );
}
