import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiCypress,
  SiTypescript,
  SiCss3,
  SiJest,
  SiGithub,
} from "react-icons/si";
import { BiLink } from "react-icons/bi";

const portfolio = [
  {
    title: "Movie App",
    description:
      "A responsive web app for discovering and exploring movies utilizing The Movie Database API.",
    siteUrl: "https://neilsmovieapp.netlify.app/",
    githubUrl: "https://github.com/neilgebhard/movie-app-react",
    img: "/images/movie-app.png",
    icons: [
      <SiReact size="2rem" title="React" color="dimgrey" />,
      <SiTypescript size="2rem" title="TypeScript" color="dimgrey" />,
      <SiCss3 size="2rem" title="CSS Modules" color="dimgrey" />,
      <SiJest size="2rem" title="Jest" color="dimgrey" />,
    ],
  },
  {
    title: "Reddit Clone",
    description:
      "A full-stack clone of Reddit. The features include user authentication, posts, comments, replies, and upvoting/downvoting.",
    siteUrl: "https://neilsreddit.herokuapp.com/",
    githubUrl: "https://github.com/neilgebhard/mern-reddit",
    img: "/images/reddit-clone.png",
    icons: [
      <SiReact size="2rem" title="React" color="dimgrey" />,
      <SiTypescript size="2rem" title="TypeScript" color="dimgrey" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" color="dimgrey" />,
      <SiNodedotjs size="2rem" title="Node.js" color="dimgrey" />,
      <SiExpress size="2rem" title="Express.js" color="dimgrey" />,
      <SiMongodb size="2rem" title="MongoDB" color="dimgrey" />,
      <SiCypress size="2rem" title="Cypress" color="dimgrey" />,
    ],
  },
  {
    title: "Twitter Clone",
    used: "React, Express, MongoDB, Node.js, JSON Web Tokens, Tailwind CSS",
    description:
      "A full-stack clone of Twitter. The features include user authentication, tweets, follows, and likes.",
    siteUrl: "https://neilstwitter.herokuapp.com/",
    githubUrl: "https://github.com/neilgebhard/mern-twitter",
    img: "/images/twitter-clone.png",
    icons: [
      <SiReact size="2rem" title="React" color="dimgrey" />,
      <SiTypescript size="2rem" title="TypeScript" color="dimgrey" />,
      <SiTailwindcss size="2rem" title="Tailwind CSS" color="dimgrey" />,
      <SiNodedotjs size="2rem" title="Node.js" color="dimgrey" />,
      <SiExpress size="2rem" title="Express.js" color="dimgrey" />,
      <SiMongodb size="2rem" title="MongoDB" color="dimgrey" />,
      <SiJest size="2rem" title="Jest" color="dimgrey" />,
    ],
  },
];

export default function Portfolio() {
  // Need this for the react-tooltip on SVGs
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="max-w-3xl mx-auto mb-20">
      <h2 className="ml-5 md:ml-0 text-3xl font-extrabold mb-4 uppercase tracking-wider">
        Portfolio
      </h2>
      {portfolio.map((item, i) => (
        <motion.article
          className="flex gap-x-4 mb-5 bg-white p-5 shadow-lg md:rounded-md border-l-2 border-bleu"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          key={i}
        >
          <a
            className="hidden sm:inline-block"
            href={item.siteUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded aspect-square sm:w-52 sm:h-52 shadow-md">
              <Image
                priority
                src={item.img}
                height={300}
                width={300}
                alt="Screenshot of portfolio site"
              />
            </div>
          </a>
          <div>
            <h2 className="text-2xl mt-0">{item.title}</h2>
            <a
              className="bg-jungle text-white text-xl font-bold px-4 py-2 rounded-lg button inline-flex items-center gap-2"
              href={item.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub size="1.2rem" /> Github
            </a>
            <a
              className="bg-bleu text-white text-xl font-bold px-4 py-2 rounded-lg ml-3 button inline-flex items-center gap-1"
              href={item.siteUrl}
              target="_blank"
              rel="noreferrer"
            >
              <BiLink size="1.4rem" /> Demo
            </a>
            <p className="text-base">{item.description}</p>
            {isMounted &&
              item.icons?.map((icon, i) => {
                return (
                  <span key={i} className="ml-2">
                    <a data-tip={icon.props.title}>{icon}</a>
                    <ReactTooltip place="top" type="dark" effect="solid" />
                  </span>
                );
              })}
          </div>
        </motion.article>
      ))}
    </section>
  );
}
