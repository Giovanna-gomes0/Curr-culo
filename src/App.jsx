import "./App.css";
import "./index.css";

function Header() {
  return (
    <header>
      <h1>Giovanna Gomes de Freitas</h1>
      <p>Telefone: (19 991707064) | E-mail: (giovannagomesdefreitas99@gmail.com)</p>
      <p>Cidade:Campinas – SP</p>
      <p>
    
      </p>
    </header>
  );
}

function Objective() {
  return (
    <section>
      <h2>Objetivo</h2>
      <p>
       Atuar na área de audiovisual, trabalhando com edição de vídeos, captação de imagens e produção de conteúdo.      </p>
    </section>
  );
}

function Education() {
  return (
    <section>
      <h2>Formação Acadêmica</h2>
      <p>
        <strong>Ensino Médio Técnico em Tecnologia da Informação</strong><br />
        (Instituto Educacional Raphael di Santo) – Conclusão em 2026 (3º ano – em andamento)
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <h2>Experiência</h2>
      <p>
        <strong>Editora de Vídeo / Operadora de Câmera</strong><br />
        <br />
         <strong>CTRLB — 2024 – atual</strong> 
          <br />
          Edição de vídeos para projetos e conteúdos
          <br />
          Apoio em gravações e organização de materiais
          <br />
          Editora de Ví́deo / Operadora de Câmera
          <br />
          <br />
          <strong>Igreja Batista das Amoreiras — 2021 – atual</strong>
          <br />
          Captação de imagens em eventos e cultos
          <br />
          Trabalho em equipe de mídia
          <br />
          <br />
          <strong>Editora de Vídeo - 2025– atual</strong>
          <br />
          Edição de vídeos para clientes e projetos independentes
          <br />
          Entrega dentro do prazo e alinhamento com o cliente
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section>
      <h2>Habilidades Técnicas</h2>
      <ul>
        <li>Adobe Premiere Pro</li>
        <li>Adobe After Effects</li>
        <li>CapCut</li>
        <li>Operação de câmera</li>
        <li>Noções de fotografia e enquadramento</li>
        <li>Python (lógica de programação)</li>
        <li>HTML (criação de páginas web)</li>
        <li>Pacote Office e organização de arquivos digitais</li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2>Projetos</h2>
      <ul>
        <li>Desenvolvimento de site em HTML</li>
        <li>Participação em produções audiovisuais e cobertura de eventos</li>
      </ul>
    </section>
  );
}

function Competencies() {
  return (
    <section>
      <h2>Competências</h2>
      <ul>
        <li>Criatividade e atenção aos detalhes</li>
        <li>Organização e responsabilidade com prazos</li>
        <li>Trabalho em equipe e liderança</li>
        <li>Facilidade com tecnologia e aprendizado rápido</li>
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Objective />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Competencies />
    </>
  );
}
