import { contatoMidia } from "@/data/contatoMidia.data";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { MotionHighlight } from "./animate-ui/effects/motion-highlight";
import { TypingText } from "./animate-ui/text/typing";
import { iconMap } from "@/lib/icon-map";

const ContatoMidia = () => {
  return (
    <section className="flex flex-col space-y-2">
      <MotionEffect
        slide={{ direction: "left" }}
        fade
        zoom
        inView={true}
        inViewOnce={false}
        delay={0.5}
      >
        <TypingText
          className="titulo"
          text="contato"
          inView={true}
          inViewOnce={false}
          loop
          holdDelay={8000}
        />
        <div className="grid grid-cols-3 gap-4">
          {contatoMidia.map((item, index) => {
            const Icon = iconMap[item.icone as keyof typeof iconMap] || Mail;

            return (
              <MotionHighlight key={index} hover className="contatoMidia">
                <a
                  className="flex flex-1 items-center justify-center p-2 text-center"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              </MotionHighlight>
            );
          })}
        </div>
      </MotionEffect>
    </section>
  );
};
export default ContatoMidia;
