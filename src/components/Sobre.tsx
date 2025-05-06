import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { TypingText } from "./animate-ui/text/typing";

const Sobre = () => {
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
      id="sobre"
    >
      <div className="py-12 flex items-center flex-col">
        <div className="text-3xl font-bold w-full flex items-center mb-3">
          <TypingText
            className="text-3xl font-bold"
            text="☕️ Hello world!"
            inView={true}
            inViewOnce={false}
            loop={false}
            holdDelay={8000}
          />
        </div>

        <p className="text-xl text-muted-foreground pb-2">
          Sou desenvolvedor Front-end com sólida experiência em React.js, Vue.js
          e Tailwind CSS, aliando técnicas de UX/UI para criar interfaces
          modernas, intuitivas e responsivas. Apaixonado por novas tecnologias,
          busco constantemente evoluir minhas habilidades para entregar produtos
          de alta performance e excelente experiência ao usuário. Estou aberto a
          oportunidades como Front-end Developer em projetos desafiadores e
          inovadores.
        </p>
      </div>
    </MotionEffect>
  );
};

export default Sobre;
