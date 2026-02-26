export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  blogUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Calculator",
    description:
      "For the times when you don't have one handy, but you do have a modern browser, and someone's forced off your JavaScript.",
    image: "/img/projects/calc.png",
    liveUrl: "https://quarknerd.github.io/noJS/calc",
    githubUrl: "https://github.com/QuarkNerd/noJS",
    blogUrl:
      "https://blog.scottlogic.com/2022/01/20/noJS-making-a-calculator-in-pure-css-html.html",
  },
  {
    id: 2,
    title: "TicTacToe",
    description: "TicTacToe along with a completley balanced random CPU",
    image: "/img/projects/ticTacToe.png",
    liveUrl: "https://quarknerd.github.io/noJS/tictactoe/",
    githubUrl: "https://github.com/QuarkNerd/noJS",
    blogUrl:
      "https://blog.scottlogic.com/2024/05/17/noJS-2-stochastic-boogaloo.html",
  },
  {
    id: 3,
    title: "Flappy Bird",
    description: "Incoming",
    image: "https://via.placeholder.com/300x200/4a4a4a/00ffff?text=Project+3",
    liveUrl: "#",
    githubUrl: "https://github.com/QuarkNerd/noJS",
  },
  {
    id: 4,
    title: "Pixel Art Maker",
    description:
      "My first ever CSS only app. CLick the colours at the top to choose one and click on the squares change their colour.",
    image: "/img/projects/pixelArt.png",
    liveUrl: "https://quarknerd.github.io/noJS/pixelArt",
    githubUrl: "https://github.com/QuarkNerd/noJS",
  },
];
