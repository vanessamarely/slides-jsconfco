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
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Hacemos parte de la Web x ende JS es parte de nuestro ADN. Es bueno conocer ese ADN
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          JavaScript es un lenguaje muy amado y usado, su gran trayectoria le visionó un gran futuro.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          En sus inicios una organización Europea (ECMA), creó un comité para estandarizarlo.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          A partir de ese momento la vida de nuestro lenguaje cambio.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          El comité le dijo a JS que podía usar y que iba a seguir usando a medida que pasa el tiempo.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Y JS le dijo a sus Dev cómo debían escribir el código, que se iba a seguir usando y que iba a dejar de usar. 
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Hay un montón de conceptos que se manejan para esos estándares y quiero compartirte algunos de ellos.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          JS en su código, tiene una forma de escribir sus recetas llamada funciones.
          </Heading>
          <Heading size={4} textColor="secondary">
          función  =  acción
          </Heading>
          <Heading size={5} textColor="secondary">
          Puede tener argumentos
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Si JS se quiere preparar un Sandwich lo hace de la siguiente forma:
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
            {`function makeSandwich(meat, vegetable, bread){
              let sandwich = meat + vegetable + bread;
              return sandwich;
            }`}
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Uno de los estándares, en su versión ES6 trajo un concepto llamado: 
          </Heading>
          <Heading size={2} textColor="secondary">
         Arrow functions.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Los arrow functions.
          A veces llamado 'fat arrow'
          Una mejora para hacer nuestro sandwich corto.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Si imaginamos que vemos un tobogán, nos podríamos hacer una idea el arrow functions.
          Ponemos algo en la base, que baja por el tobogán y cae en la piscina.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          ¿Cómo hacemos con otro estándar nuestro Sandwich?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          {`let sandwich = (meat, vegetable, bread) =>  meat + vegetable + bread;`}
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Si queremos extraer datos de colecciones de datos (arrays) o propiedades (objetos).
          Podemos hacer Destructuring
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          {`const ["meat", "vegetable", "bread"] = sandwich;`}
          {`const {a, b, c} = sandwich;`}
          // a = meat
          // b = vegetable
          // c = bread
        </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
          JS tiene un tipo de dato llamado Strings, que para ciertas expresiones lo podemos usar concatenadolo:
          {`const sandwich = meat + vegetable + bread;`}
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
          Podemos hacer strings dinámicos usando algo llamado ‘Template literals’
          { //`const sandwich = ${meat} ${vegetable} ${bread}`
          }
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          Hay ocasiones donde le prometemos algo a alguien y dependiendo de la situación, se mantienen o se rompen, se resuelven o rechazan.
          En JS tambien hacemos promesas.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          {`const promise = new Promise((resolve, reject) => {
          /* Do something here */
          })`}
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          Y esas son solo algunas de las características que JS quiere que conozcas y hay muchas más.
          Ya que el mundo de JS es inmensamente grande.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          Como todos los famosos, JS tiene algunos secretos.
          No los divulguen!!
          es un secreto
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          Podemos obtener Valores únicos:
          {`const values = [...new Set([1, 2, 3, 3])];`}
          {`console.log(values)`}
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          Podemos crear objetos vacíos
          {`let dictionary = Object.create(null);`}
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          Podemos unir objetos
          {`const person = { name: 'David Walsh', gender: 'Male' };`}
          {`const tools = { computer: 'Mac', editor: 'Atom' };`}
          {`const attributes = { handsomeness: 'Extreme', hair: 'Brown', eyes: 'Blue' };`}
          {`const summary = {...person, ...tools, ...attributes};`}
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          Falsy
          <List>
            <ListItem>0</ListItem>
            <ListItem>-0</ListItem>
            <ListItem>null</ListItem>
            <ListItem>undefined</ListItem>
            <ListItem>''</ListItem>
            <ListItem>NaN</ListItem>
            <ListItem>false</ListItem>
          </List>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
          Blah… Blah...
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          JS tiene características y secretos muy cheveres y un gran futuro
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          ¿Qué recursos podemos usar para contar las historias?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          Existen recursos que nos pueden ayudar de forma escrita, verbal, audio, digital (Web)
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          Nosotros usamos algunos de forma escrita como:
          Slides, Blogs, Libros
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          Yo empleo mucho el Gitbook para dar talleres o explicar conceptos:
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          Necesitamos las imágenes, ya que estamos en una época muy visual.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          Podemos crearlos con código en la Web
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          A todos nos gustan los Comic y podemos usarlos para hacer historias.
          </Heading>
          <Heading size={3} textColor="secondary">
          Comic.js 
          React Komik!
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          Aparte de los mencionados, podemos usar muchos más.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          ¿Quienes se pueden beneficiar de nuestras historias?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary">
          ¡Todo el mundo!
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary">
          Conclusiones
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary">
          Contar historias (Storytelling) nos ayuda a solidificar los conocimientos que queremos compartir.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
          Tenemos muchos medios para contar las historias. Usemos todo lo que la Multimedia nos brinda para entregar mejor contenido.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
          Contemos historias para:
          <List>
            <ListItem>Entregar mejor nuestra info</ListItem>
            <ListItem>Enseñar</ListItem>
            <ListItem>Mejorar nuestra documentación</ListItem>
          </List>
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary">
          ¡Contemos historias de todo y usemoslas en todo!
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={1} textColor="secondary">
          ¡¡Muchas Gracias!!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
