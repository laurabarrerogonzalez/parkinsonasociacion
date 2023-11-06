import React from "react";
import "./FlipBook.css";
import HTMLFlipBook from "react-pageflip";

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <br />
      <br />
      <p>{props.children}</p>
      <br />
      <p>{props.number}</p>
    </div>
  );
});

const FlipBook = () => {
  return (
    <>
      <div className="Bodys">
        <HTMLFlipBook width={300} height={500}>
          <Page number="1">
            <h1>Parkinson</h1> <br />{" "}
            <img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1693932207/download_airetq.jpg" />
            <br /> El Mal de Parkinson es una enfermedad neurodegenerativa
            crónica que afecta principalmente la coordinación motora. Fue
            descrita por primera vez por el médico británico James Parkinson en
            1817 y desde entonces ha sido objeto de extensas investigaciones.
          </Page>
          <Page number="2">
            <h1>Centro de Dia</h1> <br /> <img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1693904188/fondo_25_p8dbe6.jpg" /><br /> Esta condición se caracteriza por la
            pérdida progresiva de células nerviosas en el cerebro,
            específicamente en la región conocida como la sustancia negra.
          </Page>
          <Page number="3">
            <h1>Rehabilitacion</h1> <br /> <img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1693904241/la-foto-graciosa-del-verano_uxl3mk.webp" /><br /> Los síntomas del Parkinson
            generalmente comienzan de manera sutil y tienden a empeorar con el
            tiempo. Algunos de los signos más comunes incluyen temblores,
            rigidez muscular, lentitud en los movimientos bradicinesia y
            problemas de equilibrio.
          </Page>
          <Page number="4">
            <h1>Ayuda social</h1> <br /> <img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1693904188/fondo_15_ny7toc.jpg" /><br /> Aunque las causas exactas del Parkinson
            aún no se comprenden completamente, factores genéticos, ambientales
            y la edad avanzada juegan un papel importante en el desarrollo de la
            enfermedad. 
          </Page>
          <Page number="5">
            <h1>Voluntariado</h1> <br /> <img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1693904188/fondo_10_cbyplw.jpg"/><br /> La investigación continua busca
            comprender mejor las causas subyacentes de la enfermedad y
            desarrollar terapias más eficaces para mejorar la calidad de vida de
            los pacientes con Parkinson.
          </Page>
          <Page number="6">
            <h1>Logros</h1> <br /> <img src="https://res.cloudinary.com/da7ffijqs/image/upload/v1693903409/fondo_2_gj6a9x.jpg"/><br /> El diagnóstico del Parkinson se realiza
            principalmente a través de la observación de los síntomas y la
            historia clínica del paciente.
          </Page>
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default FlipBook;