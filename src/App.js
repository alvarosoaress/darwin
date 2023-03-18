import React from "react";

import Header from "./components/Header";
import Sec from "./components/Section";
import Shape from "./components/SectionShape";
import SecClothes from "./components/SectionClothes";

import empresa from "./imgs/empresa.png";
import darwin from "./imgs/darwin.png";
import autismo from "./imgs/autismo.png";
import livro from "./imgs/livro.png";
import GlobalStyle from "./GlobalStyle";

const SCREEN_SIZE = window.screen.width;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <section className="sec">
          <Sec
            imagem={empresa}
            titulo="CREATIVE ?"
            texto="A CREATIVE é uma empresa especializada em criação de personagens e histórias para o universo dos games. Oferecemos aos nossos clientes um portfólio diversificado de produtos e serviços, com soluções inovadoras para atender às suas necessidades, sempre em busca de oferecer cada dia melhores soluções criativas para seus clientes, desenvolvendo personagens e histórias que os ajudem a alcançar seus objetivos."
          />
        </section>

        <section className="sec">
          <Sec
            imagem={darwin}
            titulo="Quem é Darwin?"
            texto="Darwin é nossa mais nova criação, aonde decidimos explorar uma minoria quase esquecida pela mídia. Queriamos algo que falase com o publico infanto-juvenil e fosse educativo, tudo isso de uma forma divertida e leve, assim chegamos ao Darwin, nosso detetivo com  sindrome de aspenger que tentar ajudar todos que estiverem necessitados, derrotando seus inimigos psicoloógicos sepre em busca do melhor."
          />
        </section>

        <section className="sec">
          <Shape
            gradient={{ first: "#ff0a6c", second: "#2d27ff" }}
            borderRadius="50%"
            position={{ R: "0", Y: SCREEN_SIZE <= 800 ? "-20vh" : "" }}
          />
          <Shape
            gradient={{ first: "#ff0a6c", second: "#2d27ff" }}
            borderRadius="50%"
            position={{ X: "-40px", Y: SCREEN_SIZE <= 800 ? "85vh" : "0px" }}
          />
          <Sec
            imagem={autismo}
            titulo="Porque autismo?"
            texto="Observamos que, a representatividade no mundo artístico vem finalmente tendo o seu reconhecimento, mas em contrapartida, percebemos certas minorias sendo deixadas de lado, as pessoas com Transtorno do Espectro Autista. Indivíduos com esse Transtorno apresentam muitas dificuldades no Âmbito social,porém, o ser humano é naturalmente social, ou seja, essas pessoas estão tendo sua função básica arrancada. Nosso objetivo é inserir-los nesse novo universo,mostrando seus problemas que devem ser enfrentados, e suas qualidades que devem ser valorizadas."
          />
        </section>

        <section className="sec">
          <Shape
            gradient={{ first: "#603813", second: "#b29f94" }}
            borderRadius="0% 100% 100% 0% / 55% 100% 0% 45%"
            // eslint-disable-next-line no-constant-condition
            position={{ X: "0", Y: SCREEN_SIZE <= 800 ? "-20vh" : "" }}
          />
          <Shape
            gradient={{ first: "#603813", second: "#b29f94" }}
            borderRadius="100% 0% 49% 51% / 0% 17% 83% 100%"
            position={{ R: "0", Y: SCREEN_SIZE <= 800 ? "85vh" : "" }}
          />
          <Sec
            imagem={livro}
            titulo="História do Darwin"
            texto="Nasceu em Londres, no ano de 1999. Ficou conhecido como o “detetive cego”, pois apesar de ter sido diagnosticado com a síndrome de Asperger - um transtorno do espectro autista - isso não o impediu de se tornar um dos mais brilhantes detetives da história. O detetive Darwin era um detetive particular que trabalhava em Londres. Ele tinha uma síndrome de Asperger, o que significa que ele tinha dificuldades para se socializar e entender as nuances da linguagem. No entanto, ele era um excelente detetive e solucionava os casos que os outros não  conseguiam."
          />
        </section>

        <section className="sec">
          <SecClothes titulo="Roupas" />
        </section>
      </div>
    </>
  );
}

export default App;
