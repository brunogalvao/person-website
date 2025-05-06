import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { TypingText } from "./animate-ui/text/typing";
import { experiencia } from "@/data/experiencia.data";

const Experiencia = () => {
  const imagemDefault = "https://api.dicebear.com/7.x/bottts/svg?seed=bruno";
  return (
    <section id="experiencia" className="space-y-4">
      <TypingText
        className="titulo"
        text="experiência"
        inView={true}
        inViewOnce={false}
        loop
        holdDelay={8000}
      />

      {experiencia.map((item, index) => (
        <MotionEffect
          key={index}
          slide={{ direction: "down" }}
          fade
          zoom
          inView={true}
          inViewOnce={false}
          delay={0.5 + index * 0.1}
          className="flex"
        >
          <div className="space-y-4">
            <div className="flex flex-row space-y-0 space-x-4 items-center">
              <img
                src={item.avatar ? item.avatar : imagemDefault}
                alt={item.avatarDescription}
                className="w-10 h-10 rounded-full p-2 bg-zinc-200"
              />
              <div className="flex flex-col">
                <div className="text-2xl font-bold">{item.title}</div>
                <small className="text-xs text-muted-foreground">
                  {item.role}
                </small>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pb-2">
              {item.description}
            </p>
          </div>
        </MotionEffect>
      ))}
    </section>
  );
};

export default Experiencia;
