// Components:
import Navbar from "./components/navigation/Navbar";

export default function ParentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
