import React from 'react';
import Paragraph from '../components/paragraph';
import { Heading, SlideFade, Grid, useColorModeValue } from "@chakra-ui/react";
import StackCard from '../components/stackcard';

import {
         SiNextdotjs as SiNextDotJs,	
         SiNodedotjs as SiNodeDotJs,
         SiTailwindcss,
         SiReact,
         SiSass,
         SiJson,
         SiCanva,
         SiHtml5,
         SiNetlify,
         SiCss3,
         SiJava,
         SiNpm,
         SiMarkdown,
         SiStackoverflow,
         SiGo,
         SiTorbrowser,
         SiVisualstudiocode,
         SiSpotify,
         SiReplit,
         SiVercel,
         SiGit,
         SiFontawesome,
         SiPrettier,
         SiCodepen,
         SiGithub,
         SiPug,
         SiPython,
         SiElectron,
         SiVuedotjs as SiVueDotJs,
         SiChakraui,
         SiJavascript,
         SiTypescript,
         SiStyledcomponents as SiStyledComponents
} from "react-icons/si";

const TechStack = () => {
    const techStacks = [
    {
        name: "Next.Js",
        icon: <SiNextDotJs fontSize="20px" />,
        url: "https://nextjs.org/",
    },
    {
        name: "React.Js",
        icon: <SiReact fontSize="20px" />,
        url: "https://reactjs.org/",
    },
    {
        name: "Node.Js",
        icon: <SiNodeDotJs fontSize="20px" />,
        url: "https://nodejs.org/",
    },
    {
        name: "Java",
        icon: <SiJava fontSize="20px" />,
        url: "https://java.com/en/",
    },
    {
        name: "JavaScript",
        icon: <SiJavascript fontSize="20px" />,
        url: "https://javascript.com/",
    },
    {
        name: "Styled Components",
        icon: <SiStyledComponents fontSize="20px" />,
        url: "https://styled-components.com/",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript fontSize="20px" />,
        url: "https://typescriptlang.org/",
    },
    {
        name: "TailWind CSS",
        icon: <SiTailwindcss fontSize="20px" />,
        url: "https://tailwindcss.com/",
    },
    {
        name: "Chakra-UI",
        icon: <SiChakraui fontSize="20px" />,
        url: "https://chakra-ui.com/",
    },
    {
        name: "Vue.Js",
        icon: <SiVueDotJs fontSize="20px" />,
        url: "https://vuejs.org/",
    },
    {
        name: "Python",
        icon: <SiPython fontSize="20px" />,
        url: "https://python.org/",
    },
    {
        name: "Electron.Js",
        icon: <SiElectron fontSize="20px" />,
        url: "https://electronjs.org/",
    },
    {
        name: "Html",
        icon: <SiHtml5 fontSize="20px" />,
        url: "https://html.com/",
    },
    {
        name: "CSS",
        icon: <SiCss3 fontSize="20px" />,
        url: "https://css-tricks.com/",
    },
    {
        name: "SASS",
        icon: <SiSass fontSize="20px" />,
        url: "https://sass-lang.com/",
    },
    {
        name: "Go",
        icon: <SiGo fontSize="20px" />,
        url: "https://go.dev/",
    },
    {
        name: "Pug",
        icon: <SiPug fontSize="20px" />,
        url: "https://pugjs.org/",
    },
    {
        name: "Markdown",
        icon: <SiMarkdown fontSize="20px" />,
        url: "https://markdownguide.org/",
    },
    {
        name: "Spotify",
        icon: <SiSpotify fontSize="20px" />,
        url: "https://spotify.com/",
    },
    {
        name: "Vercel",
        icon: <SiVercel fontSize="20px" />,
        url: "https://vercel.com/",
    },
    {
        name: "Repl.It",
        icon: <SiReplit fontSize="20px" />,
        url: "https://replit.com/",
    },
    {
        name: "Git",
        icon: <SiGit fontSize="20px" />,
        url: "https://git-scm.com/",
    },
    {
        name: "Github",
        icon: <SiGithub fontSize="20px" />,
        url: "https://github.com/",
    }, 
    {
        name: "Codepen",
        icon: <SiCodepen fontSize="20px" />,
        url: "https://codepen.io/",
    },
    {
        name: "Prettier",
        icon: <SiPrettier fontSize="20px" />,
        url: "https://prettier.io/",
    },
    {
        name: "StackOverFlow",
        icon: <SiStackoverflow fontSize="20px" />,
        url: "https://stackoverflow.com/",
    },
    {
        name: "Visual Studio Code",
        icon: <SiVisualstudiocode fontSize="20px" />,
        url: "https://code.visualstudio.com/",
    },
    {
        name: "Tor Browser",
        icon: <SiTorbrowser fontSize="20px" />,
        url: "https://torproject.org/",
    },
    {
        name: "Font Awesome",
        icon: <SiFontawesome fontSize="20px" />,
        url: "https://fontawesome.com/",
    }, 
    {
        name: "Netlify",
        icon: <SiNetlify fontSize="20px" />,
        url: "https://netlify.com/",
    },
    {
        name: "NPM",
        icon: <SiNpm fontSize="20px" />,
        url: "https://npmjs.com/",
    },
    {
        name: "Canva",
        icon: <SiCanva fontSize="20px" />,
        url: "https://canva.com/",
    },
    {
        name: "JSON",
        icon: <SiJson fontSize="20px" />,
        url: "https://json.org/",
    },        
    
];
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3} variant="section-title"
            >
                Tech Stack
            </Heading>
            <Paragraph textColor={useColorModeValue("whiteAlpha.500', 'whiteAlpha.200")} fontSize={'lg'}>
             A List Of My Favorite Tools And Technologies That I Use On A Regular Basis.</Paragraph>
            <Grid
                mt={5}
                templateColumns={["1fr", "repeat(2,1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={[2,5,5,5]}
            >
                {techStacks.map((stack) => (
                    <StackCard stack={stack} key={stack?.name} />
                ))}
            </Grid>
        </SlideFade>
    )
}

export default TechStack;
