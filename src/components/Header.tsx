import logo from "@/assets/logo.svg";
import Nav from "./Nav";
import AnimatedTitle from "./AnimatedTitle";

const Header = () => {
  return (
    <header className="p-3">
      <div className="flex flex-row items-center justify-between">
        <div className="text-2xl font-bold flex flex-row items-center gap-4">
          <img src={logo} alt="Logo" className="w-8" />
          {/* Bruno Galvão */}
          <AnimatedTitle texto="Bruno Galvão" />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
