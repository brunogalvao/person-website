import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { TypingText } from "./animate-ui/text/typing";
import { formacao } from "@/data/formacao.data";

const Formacao = () => {
  // const imagemDefault = "https://api.dicebear.com/7.x/bottts/svg?seed=bruno";
  return (
    <MotionEffect
      fade
      blur="10px"
      transition={{ duration: 1, ease: "easeInOut" }}
      inView={true}
      inViewOnce={false}
      id="formacao"
    >
      <section className="space-y-4">
        <TypingText
          className="titulo"
          text="formação"
          inView={true}
          inViewOnce={true}
          loop
          holdDelay={8000}
        />

        {formacao.map((item, index) => (
          <div
            key={index}
            className="flex flex-row space-x-4 items-center py-3 rounded"
          >
            {/* <img
              src={item.avatar ? item.avatar : imagemDefault}
              alt={item.avatarDescription}
              className="w-18 h-18 rounded-full p-2 bg-zinc-200"
            /> */}
            <div className="flex flex-col space-y-3">
              <div className="flex space-y-0 flex-col">
                <div className="text-2xl font-bold">{item.school}</div>
                <div className="text-base">{item.title}</div>
                <small className="text-muted-foreground">{item.date}</small>
              </div>
              <p className="text-sm text-muted-foreground pb-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </MotionEffect>
  );
};

export default Formacao;
