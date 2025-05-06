import ContatoMidia from "@/components/ContatoMidia";
import Experiencia from "@/components/Experiencia";
import Formacao from "@/components/Formacao";
import Header from "@/components/Header";
import Sobre from "@/components/Sobre";

const Layout = () => {
  return (
    <>
      <div className="w-sm-3xl w-5/6 mx-auto">
        <Header />

        <Sobre />

        <Formacao />

        <Experiencia />

        <ContatoMidia />
      </div>
    </>
  );
};

export default Layout;
