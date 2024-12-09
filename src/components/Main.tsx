import { ReactNode } from "react";
import Header from "./Header";

export default function Main({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <div className="overflow-y-auto h-screen bg-s-dm-very-dark-blue">
      <Header />
      <div className=" bg-s-dm-very-dark-blue">{children}</div>
    </div>
  );
}
