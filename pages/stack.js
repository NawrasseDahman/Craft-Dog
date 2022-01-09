import React from 'react';
import { Heading, SlideFade, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import StackCard from '../components/stackcard';
import { FaAndroid, FaReact, FaJava, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiKotlin, SiFirebase, SiFastlane } from "react-icons/si";

const TechStack = () => {
    const techStacks = [
    {
        name: "Android",
        icon: <FaAndroid fontSize="20px" />,
        url: "https://www.android.com/",
    },
    {
        name: "React Native",
        icon: <FaReact fontSize="20px" />,
        url: "https://reactnative.dev/",
    },
    {
        name: "Kotlin",
        icon: <SiKotlin fontSize="20px" />,
        url: "https://kotlinlang.org/",
    },
    {
        name: "Java",
        icon: <FaJava fontSize="20px" />,
        url: "https://www.java.com/en/",
    },
    {
        name: "Javascript",
        icon: <FaJs fontSize="20px" />,
        url: "https://www.javascript.com/",
    },
    {
        name: "Firebase",
        icon: <SiFirebase fontSize="20px" />,
        url: "https://firebase.google.com/",
    },
    {
        name: "Github & GitLab",
        icon: <FaGitAlt fontSize="20px" />,
        url: "https://www.gitlab.com/",
    },
    {
        name: "CI/CD - Fastlane",
        icon: <SiFastlane fontSize="20px" />,
        url: "https://fastlane.tools/",
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
            <Text textColor={useColorModeValue("whiteAlpha.500', 'whiteAlpha.200")} fontSize={'lg'}>A List Of My Favorite Tools And Technologies That I Use On A Regular Basis.</Text>
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
