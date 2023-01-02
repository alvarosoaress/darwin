import './App.css';

import Header from './components/Header/Header'
import Sec from './components/Section/sec';
import SecForm from './components/SectionForm/secForm';

import empresa from './imgs/empresa.png';
import darwin from './imgs/darwin.png';


function App() {


  return (
    <div class="container">
      <Header />
      <section className="sec">
        <Sec imagem={empresa} titulo="CREATIVE ?" texto="A CREATIVE é uma empresa especializada em criação de personagens e histórias para o universo dos games. Oferecemos aos nossos clientes um portfólio diversificado de produtos e serviços, com soluções inovadoras para atender às suas necessidades, sempre em busca de oferecer cada dia melhores soluções criativas para seus clientes, desenvolvendo personagens e histórias que os ajudem a alcançar seus objetivos." />
      </section>

      <section className="sec">
        <Sec imagem={darwin} titulo="Quem é Darwin?" texto="Darwin é nossa mais nova criação, aonde decidimos explorar uma minoria quase esquecida pela mídia. Queriamos algo que falase com o publico infanto-juvenil e fosse educativo, tudo isso de uma forma divertida e leve, assim chegamos ao Darwin, nosso detetivo com  sindrome de aspenger que tentar ajudar todos que estiverem necessitados, derrotando seus inimigos psicoloógicos sepre em busca do melhor." width="250px" height="300px" />
      </section>

      <section className="sec">
        <SecForm gradient={{first:"#ff0a6c", second:"#2d27ff"}} borderRadius="16% 84% 0% 100%/61% 0% 100% 39%" position={{X:"-5em", Y:"-15em"}}></SecForm>
        <Sec imagem={darwin} titulo="Quem é Darwin?" texto="Darwin é nossa mais nova criação, aonde decidimos explorar uma minoria quase esquecida pela mídia. Queriamos algo que falase com o publico infanto-juvenil e fosse educativo, tudo isso de uma forma divertida e leve, assim chegamos ao Darwin, nosso detetivo com  sindrome de aspenger que tentar ajudar todos que estiverem necessitados, derrotando seus inimigos psicoloógicos sepre em busca do melhor." width="250px" height="300px" />
      </section>
    </div>
  );
}

export default App;
