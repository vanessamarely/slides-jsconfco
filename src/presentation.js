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
        <Slide transition={['fade']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          Podemos crear historias (Storytelling) de todo lo que nos rodea y podemos enseñar con ellas
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
