const BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "https://quarknerd.com";

export interface ProjectLink {
  url: string;
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  trackingId?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  links?: ProjectLink[];
}

export interface ProjectSection {
  id: string;
  title: string;
  description?: string;
  projects: Project[];
}

const cssProjects: Project[] = [
  {
    id: "calculator",
    title: "Calculator",
    description:
      "For the times when you don't have one handy, but you do have a modern browser, and someone's forced off your JavaScript.",
    image: "/img/projects/calc.png",
    links: [
      {
        url: `${BASE_URL}/noJS/calc`,
        label: "Live Demo",
        variant: "primary",
      },
      {
        url: "https://github.com/QuarkNerd/noJS",
        label: "GitHub",
        variant: "secondary",
      },
      {
        url: "https://blog.scottlogic.com/2022/01/20/noJS-making-a-calculator-in-pure-css-html.html",
        label: "Blog",
        variant: "tertiary",
        trackingId: "blog",
      },
    ],
  },
  {
    id: "ticTacToe",
    title: "TicTacToe",
    description: "TicTacToe along with a completley balanced random CPU",
    image: "/img/projects/ticTacToe.png",
    links: [
      {
        url: `${BASE_URL}/noJS/tictactoe/`,
        label: "Live Demo",
        variant: "primary",
      },
      {
        url: "https://github.com/QuarkNerd/noJS",
        label: "GitHub",
        variant: "secondary",
      },
      {
        url: "https://blog.scottlogic.com/2024/05/17/noJS-2-stochastic-boogaloo.html",
        label: "Blog",
        variant: "tertiary",
        trackingId: "blog",
      },
    ],
  },
  {
    id: "flappyBird",
    title: "Flappy Bird",
    description:
      "A fully functional, click to jump clone of the classic. No mobile support. Blog coming soon.",
    image: "img/projects/flappy.png",
    links: [
      {
        url: `${BASE_URL}/noJS/flappybird/`,
        label: "Live Demo",
        variant: "primary",
      },
      {
        url: "https://github.com/QuarkNerd/noJS",
        label: "GitHub",
        variant: "secondary",
      },
    ],
  },
  {
    id: "pixelArt",
    title: "Pixel Art Maker",
    description:
      "My first ever CSS only app. CLick the colours at the top to choose one and click on the squares change their colour.",
    image: "/img/projects/pixelArt.png",
    links: [
      {
        url: `${BASE_URL}/noJS/pixelArt`,
        label: "Live Demo",
        variant: "primary",
      },
      {
        url: "https://github.com/QuarkNerd/NoisyGamer",
        label: "GitHub",
        variant: "secondary",
      },
    ],
  },
];

const gameProjects: Project[] = [
  {
    id: "noisyGamer",
    title: "Noisy Gamer",
    description:
      "Result of a game jam! Press space to jump and scream PEW to fire a laser",
    image: "/img/projects/noisy.png",
    links: [
      {
        url: `${BASE_URL}/NoisyGamer/`,
        label: "Live Demo",
        variant: "primary",
      },
      {
        url: "https://github.com/QuarkNerd/NoisyGamer",
        label: "GitHub",
        variant: "secondary",
      },
    ],
  },
  {
    id: "surviveTheInternet",
    title: "Survive the Internet",
    description:
      "A clone of my favourite JackBox game. All about twisting your friend's words in funny ways. The only flaw in the game was you could only ever vote for one person. So I made a discord bot to fix that. Not currently hosted but you can run it yourself.",
    image: "/img/projects/survive.png",
    links: [
      {
        url: "https://github.com/QuarkNerd/Survive_The_Internet_Discord_Bot",
        label: "GitHub",
        variant: "primary",
      },
    ],
  },
  {
    id: "fibbage",
    title: "Fibbage",
    description:
      "Trivia meets deception. I created this clone because the orginal didn't have custom questions. Please try it out.",
    image: "/img/projects/fibbage.png",
    links: [
      {
        url: `${BASE_URL}/Fibbage/`,
        label: "Live Demo",
        variant: "primary",
      },
      {
        url: "https://github.com/QuarkNerd/Fibbage",
        label: "GitHub",
        variant: "secondary",
      },
    ],
  },
];

const otherProjects: Project[] = [
  // {
  //   title: "Advent of Code",
  //   description:
  //     "Solutions to the daily coding challenges from Advent of Code.",
  //   image: "/img/projects/adventOfCode.png",
  //   links: [
  //     {
  //       url: "https://github.com/QuarkNerd/AdventOfCode",
  //       label: "GitHub",
  //       variant: "secondary",
  //     },
  //   ],
  // },
  {
    id: "personalSite",
    title: "Personal site",
    description: "Did you know I have a personal website? Check it out!",
    image: "/img/projects/site.png",
    links: [
      {
        url: `${BASE_URL}/`,
        label: "Live Demo",
        variant: "primary",
        trackingId: "recursion",
      },
      {
        url: "https://github.com/QuarkNerd/quarknerd.github.io",
        label: "GitHub",
        variant: "secondary",
      },
    ],
  },
  {
    id: "piByHand",
    title: "PI by hand",
    description:
      "Not a software project, far from it. But probably the most nerdy thing I've ever taken part in. See if you can spot me if you know me.",
    image: "/img/projects/pi.jpg",
    links: [
      {
        url: `https://www.youtube.com/watch?v=LIg-6glbLkU`,
        label: "YouTube",
        variant: "primary",
      },
      {
        url: "http://mathsjam.com/",
        label: "MathsJam",
        variant: "secondary",
      },
    ],
  },
];

export const projectSections: ProjectSection[] = [
  {
    id: "css-projects",
    title: "CSS Projects",
    description:
      "A selection of apps built entirely using HTML and CSS and avoiding all JavaScript.",
    projects: cssProjects,
  },
  {
    id: "game-projects",
    title: "Games",
    description: "Some original, some clones, all fun.",
    projects: gameProjects,
  },
  {
    id: "other",
    title: "Other",
    description:
      "A collection of various projects that don't fit into the other categories.",
    projects: otherProjects,
  },
];
// TODO
// Fix font, add adventof code, matthsjam
// add achievments
