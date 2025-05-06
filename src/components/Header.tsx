import Nav from "./Nav";
import { RollingText } from "./animate-ui/text/rolling";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { useTheme } from "./theme-provider";

const Header = () => {
  const { theme } = useTheme();
  return (
    <MotionEffect
      fade
      blur="10px"
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      inView={true}
      inViewOnce={false}
      id="experiencia"
    >
      <header className="h-20 border-b border-dashed border-b-ring">
        <div className="flex flex-row items-center justify-between text-center py-6 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4 ">
            <svg
              width="46"
              height="28"
              viewBox="0 0 46 28"
              fill="none"
              color="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-8 ${theme === "light" ? "text-zinc-800" : "text-white"}`}
            >
              <path
                d="M0 0H3.81118L11.4336 27.0359H7.62237L0 0Z"
                fill="currentColor"
              />
              <path
                d="M7.62219 0H11.4334L19.0557 27.0359H15.2446L7.62219 0Z"
                fill="currentColor"
              />
              <rect
                x="22.8669"
                y="7.72449"
                width="3.81118"
                height="3.86227"
                fill="currentColor"
              />
              <rect
                x="22.8669"
                y="15.449"
                width="3.81118"
                height="3.86227"
                fill="currentColor"
              />
              <path
                d="M41.8724 0C44.0053 0.000188799 45.7347 1.72935 45.7347 3.8623H45.7338V23.1738H45.7347C45.7346 25.3066 44.0052 27.0359 41.8724 27.0361H30.4896V23.1738H41.9232V15.4795H35.9232V11.4795H41.9232V3.8623H30.4896V0H41.8724Z"
                fill="currentColor"
              />
            </svg>

            <RollingText
              className="text-xl"
              text="Bruno Galvão"
              inViewOnce={true}
            />
          </div>

          {/* Menu */}
          <Nav />
        </div>
      </header>
    </MotionEffect>
  );
};

export default Header;
