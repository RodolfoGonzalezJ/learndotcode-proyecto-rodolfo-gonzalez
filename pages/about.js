import Layout from "../components/layout";
import style from "../styles/about.module.css";

export default function About() {
  return (
    <Layout>
      <div className={style.about}>
        <h2>LearnDotCOde</h2>
        <div>
          <h3>Sobre Nosotros</h3>
          <p>
            Bienvenidos a LearnDotCOde - Tu Destino para el Aprendizaje en Línea
          </p>
          <h3>Nuestra Historia</h3>
          <p>
            En LearnDotCOde, creemos en el poder de la educación en línea para transformar vidas. Nuestra historia comenzó en 2023, cuando un grupo de entusiastas educadores y emprendedores se unió con la visión de hacer que la educación de calidad sea accesible para todos, en cualquier parte del mundo.
          </p>
          <h3>Nuestra Misión</h3>
          <p>
            Nuestra misión es facilitar el acceso a una educación de calidad a través de una plataforma en línea fácil de usar y asequible.
          </p>
          <h3>Nuestros Valores</h3>
          <p>
            En LearnDotCOde, nuestros valores son la base de todo lo que hacemos. Valoramos la excelencia, la accesibilidad, la innovación y la comunidad.
          </p>
          <h3>Contáctanos</h3>
          <p>
            ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte. Puedes ponerte en contacto con nosotros en LearnDotCOde@gmail.com o a través de nuestro formulario de contacto.

            ¡Gracias por elegir LearnDotCOde como tu fuente de aprendizaje en línea!
          </p>
        </div>
      </div>
    </Layout>
  );
}
