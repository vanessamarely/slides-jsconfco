// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Todo lo que hacemos es contar historias</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Había una vez
          </Heading>
          <Heading size={2} textColor="secondary">
            Un lenguaje de programación
          </Heading>
          <Heading size={3} textColor="secondary">
            Llamado JavaScript
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Vino a este mundo
          </Heading>
          <Heading size={2} textColor="secondary">
            Con grandes habilidades 
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
          Creció para convertirse en un poderoso lenguaje
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
          Todo el mundo quería que estuviera en todas partes
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
          En algunos lugares querían que fuera más estructurado que en otros
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
          Se convirtió en el lenguaje más amado y usado por todos
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
          Y...
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
          Esa es otra historia ...
          </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Contando 
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Una Historia
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Vanessa Aristizabal
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="secondary">
          Podemos crear historias (Storytelling) de todo lo que nos rodea y podemos enseñar con ellas
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="secondary">
          Storytelling es el proceso donde se usan hechos y narrativa para comunicar algo.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
          Se ha usado y se usa el Storytelling, para:
          </Heading>
          <List>
            <ListItem>Comunicar</ListItem>
            <ListItem>Conectar</ListItem>
            <ListItem>Marketing</ListItem>
            <ListItem>Emociones</ListItem>
            <ListItem>Entretener</ListItem>
            <ListItem>Experiencias</ListItem>
            <ListItem>Historias</ListItem>
            <ListItem>Educar</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="secondary">
          Gracias a la Multimedia se nos dio nuevas formas de contar historias de transmitir la información
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="secondary">
          Y hemos empleado la Multimedia, para compartir el conocimiento
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="secondary">
          Una forma de transmitir mejor nuestras ideas es contando una historia (storytelling)
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
          La Web es uno de los mejores medios para transmitir la información y nos dá la oportunidad de aplicar y dar a conocer el mundo mágico de JS.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
          Cuando JS fue creado, su labor fue enfocada en la interactividad en los navegadores Web.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
          Lo anterior dio origen a que los JS Developers, escribiéramos pequeñas recetas.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
          Muchas de esas recetas pueden tener closures, promesas, variables, condicionales y funciones, entre otras. 
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
          Podemos explicar el mundo JS (sus conceptos y estructura) usando un lenguaje abstracto
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
          Sabemos que todo proceso de aprendizaje es confuso al inicio
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
          ¿Como hacemos Storytelling?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
          ¿Qué hace a una historia buena?
          </Heading>
          <List>
            <ListItem>Entretenida</ListItem>
            <ListItem>Educativa</ListItem>
            <ListItem>Universal</ListItem>
            <ListItem>Organizada</ListItem>
            <ListItem>Memorable</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
          ¿Qué componentes tiene una buen historia?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="secondary">
          Personajes, conflicto, resolución
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
          ¿Cómo podemos producir este arte, de contar una historia?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Conozcamos nuestra audiencia</ListItem>
            <ListItem>Definamos el mensaje principal</ListItem>
            <ListItem>Decidir el tipo de historia</ListItem>
            <ListItem>Establecer un objetivo</ListItem>
            <ListItem>Medio</ListItem>
            <ListItem>Escribirla</ListItem>
            <ListItem>Compartirla</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
          ¿Cómo aplicamos lo anterior?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
          Teniendo en cuenta lo anterior y que ustedes son mi público objetivo, y nuestro personaje es JS,  les contaré una historia.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>“Los lenguajes son parte de nuestro ADN & JavaScript hace parte del ADN de la Web.” </Quote>
            <Cite>Kyle Simpson</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
          Hacemos parte de la Web x ende JS es parte de nuestro ADN. Es bueno conocer ese ADN
          </Heading>
        </Slide>
        
      </Deck>
    );
  }
}
