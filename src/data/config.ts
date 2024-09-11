import { link } from 'fs';
import { describe } from 'node:test';

interface Site {
  title: string,
  description: string,
  url: string,
}

interface Footer {
  es: {
    claim: string,
    also: string,
  },
  en: {
    claim: string,
    also: string,
  },
}

interface NavigationData {
  es: {
    text: Array<string>,
    links: Array<string>,
  },
  en: {
    text: Array<string>,
    links: Array<string>,
  },
}

interface Navigation {
  [key: string]: NavigationData;
}

interface Card {
  es: {
    greeting: string,
    title: string,
    rol: string,
    whoami: string,
    image: string,
    button: string,
    link: string,
  },
  en: {
    greeting: string,
    title: string,
    rol: string,
    whoami: string,
    image: string,
    button: string,
    link: string,
  },
}

interface Aboutme {
  es: {
    title: string,
    description: string,
  },
  en: {
    title: string,
    description: string,
  },
}

interface Work {
  title: string,
  description: string,
  logo: string,
  link: string,
}

interface WorkData {
  es: {
    title: string,
    description: string,
    works: Array<Work>,
  },
  en: {
    title: string,
    description: string,
    works: Array<Work>,
  },
}

interface Logo {
  title: string,
  image: string,
}

interface Technologies {
  es: {
    title: string,
    description: string,
    logos: Array<Logo>,
  },
  en: {
    title: string,
    description: string,
    logos: Array<Logo>,
  },
}

interface Career {
  date: string,
  description: string,
}

interface Careers {
  es: {
    title: string,
    experiences: Array<Career>,
  },
  en: {
    title: string,
    experiences: Array<Career>,
  },
}

export const Site = {
  title: 'Daniel Fosela personal page',
  description: 'Personal page of Dani Fosela, Chief Operating Officer at LeanMind',
  url: 'https://daniel.fosela.com',
} as Site

export const Footer = {
  es: {
    claim: 'Estoy buscando cualquier oportunidad que me de la oportunidad de crecer y aprender.',
    also: 'También me puedes encontrar en:',
    linkAlso: 'https://www.linkedin.com/in/daniel-fosela/',
  },
  en: {
    claim: 'I am looking for any opportunity that gives me the chance to grow and learn.',
    also: 'You can also find me in:',
    linkAlso: 'https://www.linkedin.com/in/daniel-fosela/',
  }
} as Footer

export const Navigation = {
  es: {
    text: ['Inicio', 'Sobre mí', 'Trabajos', 'Tecnologías', 'Trayectoria'],
    links: ['#home', '#aboutme', '#work', '#technologies', '#career']
  },
  en: {
    text: ['Home', 'About Me', 'Work', 'Technologies', 'Career'],
    links: ['#home', '#aboutme', '#work', '#technologies', '#career']
  },
} as NavigationData

export const Card = {
  es: {
    greeting: 'Hola!',
    title: 'Yo soy',
    rol: 'product designer',
    whoami: 'Soy un UX/UI product designer',
    image: '/images/daniel-fosela.jpg',
    button:'Entrar en contacto',
    link: '',
  },
  en: {
    greeting: 'Hello!',
    title: 'I am',
    rol: 'product designer',
    whoami: 'I am a UX/UI product designer',
    image: '/images/daniel-fosela.jpg',
    button:'Contact me',
    link: '',
  },
} as Card

export const Aboutme = {
  es: {
    title: 'Sobre mí',
    description: `Me llamo Daniel, y después de sacarme el título de artes gráficas decidí darle otro enfoque a mi vida laboral, y hice un bootcamp de diseño de producto UX/UI.\n
Busco un sitio donde poder aplicar mis conocimientos, mi creatividad y mi pasión para hacer productos y diseños que se adapten a las necesidades de los usuarios.\n
Vivo en Madrid, España, soy una persona creativa, que sabe trabajar en equipo, y sobretodo con muchas ganas de aprender y seguir creciendo en este mundo.`,
  },
  en: {
    title: 'About me',
    description: `My name is Daniel, and after getting my degree in graphic arts I decided to give my working life a different focus, and I did a UX/UI product design bootcamp.\n
I am looking for a place where I can apply my knowledge, my creativity and my passion to make products and designs that adapt to the needs of users.\n
I live in Madrid, Spain, I am a creative person, who knows how to work in a team, and above all with a lot of desire to learn and continue growing in this world.`,
  },
} as Aboutme

export const Work = {
  es: {
    title: 'Trabajos',
    description: 'Si quereis ver los trabajos a detalle, tenéis que hacer click en la tarjeta:',
    works: [
      {
        title: 'Pintxos Para Torpes',
        description: 'Una pagina web de cocina, en la que he podido contribuir diseñando, estudiando al usuario y utilizando mis conocimientos de UX/UI.',
        logo: '/images/pintxos-paratorp-es.png',
        link: 'https://pintxos.paratorp.es',
      },
      {
        title: 'Pibes Futbol Club',
        description: 'Una pagina web para un equipo de futbol, en la que he podido contribuir diseñando, estudiando al usuario y utilizando mis conocimientos de UX/UI.',
        logo: '/images/pibes_fc_logo250.png',
        link: 'https://pibesfutbolclub.com',
      },
      {
        title: 'caLEANdar',
        description: 'Una app calendario para Leanmind, en la que he podido contribuir diseñando, estudiando al usuario y utilizando mis conocimientos de UX/UI.',
        logo: '/images/leanmindisotipo.svg',
        link: 'https://caleandar.leanmind.es',
      },
    ],
  },
  en: {
    title: 'Works',
    description: 'If you want to see the works in detail, you have to click on the card:',
    works: [
      {
        title: 'Pintxos Para Torpes',
        description: 'A cooking website, in which I have been able to contribute by designing, studying the user and using my UX/UI knowledge.',
        logo: '/images/pintxos-paratorp-es.png',
        link: 'https://pintxos.paratorp.es',
      },
      {
        title: 'Pibes Futbol Club',
        description: 'A website for a football team, in which I have been able to contribute by designing, studying the user and using my UX/UI knowledge.',
        logo: '/images/pibes_fc_logo250.png',
        link: 'https://pibesfutbolclub.com',
      },
      {
        title: 'caLEANdar',
        description: 'A calendar app for Leanmind, in which I have been able to contribute by designing, studying the user and using my UX/UI knowledge.',
        logo: '/images/leanmindisotipo.svg',
        link: 'https://caleandar.leanmind.es',
      },
    ],
  },
} as WorkData

export const Technologies = {
  es: {
    title: 'Tecnologías',
    description: 'Estas son las tecnologías con las que me siento más cómodo trabajando:',
    logos: [
      {
        title: 'Slack',
        image: '/images/slack.png',
      },
      {
        title: 'Figma',
        image: '/images/figma.png',
      },
      {
        title:'Adobe Illustrator',
        image: '/images/illustrator.png',
      },
      {
        title: 'Adobe Photoshop',
        image: '/images/photoshop.png',
      },
      {
        title: 'Adobe XD',
        image: '/images/xd.png',
      },
      {
        title: 'Trello',
        image: '/images/trello.png',
      },
      {
        title: 'Notion',
        image: '/images/notion.png',
      },
      {
        title: 'Google Drive',
        image: '/images/googledrive.png',
      },
    ],
  },
  en: {
    title: 'Technologies',
    description: 'These are the technologies I feel most comfortable working with:',
    logos: [
      {
        title: 'Slack',
        image: '/images/slack.png',
      },
      {
        title: 'Figma',
        image: '/images/figma.png',
      },
      {
        title:'Adobe Illustrator',
        image: '/images/illustrator.png',
      },
      {
        title: 'Adobe Photoshop',
        image: '/images/photoshop.png',
      },
      {
        title: 'Adobe XD',
        image: '/images/xd.png',
      },
      {
        title: 'Trello',
        image: '/images/trello.png',
      },
      {
        title: 'Notion',
        image: '/images/notion.png',
      },
      {
        title: 'Google Drive',
        image: '/images/googledrive.png',
      },
    ],
  },
} as Technologies

export const Career = {
  es: {
    title: 'Mi Trayectoria',
    experiences: [
      {
        date: 'Noviembre-Diciembre 2023',
        description: '"Fundamentos del design thinking" - Udemy. Reforcé y aprendí técnicas nuevas y ya aprendidas.',
      },
      {
        date: 'Enero-Mayo 2023',
        description: 'Curse el bootcamp de UX/UI en "The bridge" (Madrid) y durante el bootcamp aprendí metodologías de trabajo y como formar parte de un buen equipo, aparte de aprender a usar herramientas como Figma, Notion y Slack.',
      },
      {
        date: '2020-2022',
        description: `Cursé un grado de artes graficas durante dos años, en Madrid. Aprendí a usar herramientas digitales como Photoshop, Illustrator y Gimp.
Hice practicas durante 2 meses usando Illustrator para distintos trabajos como por ejemplo crear y editar logos.`,
      },
    ],
  },
  en: {
    title: 'My Career',
    experiences: [
      {
        date: 'November-December 2023',
        description: '"Design thinking fundamentals" - Udemy. I reinforced and learned new and already learned techniques.',
      },
      {
        date: 'January-May 2023',
        description: 'I took the UX/UI bootcamp at "The bridge" (Madrid) and during the bootcamp I learned work methodologies and how to be part of a good team, apart from learning to use tools like Figma, Notion and Slack.',
      },
      {
        date: '2020-2022',
        description: `I studied a degree in graphic arts for two years, in Madrid. I learned to use digital tools such as Photoshop, Illustrator and Gimp.
I did an internship for 2 months using Illustrator for different jobs such as creating and editing logos.`,
      },
    ],
  },
} as Careers
