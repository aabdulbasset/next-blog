import { Navbar } from "./navbar";
import { Footer } from "./footer";
export function Layout({ children }) {
  return (
    <div className={"flex flex-col justify-between min-h-screen gap-6"}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
