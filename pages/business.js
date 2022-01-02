import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import { List, ListItem, ListIcon } from '../components/technology';
import {
  SiTypescript,
  SiJavascript,
  SiMarkdown,
  SiChakraui,
  SiNodedotjs,
  SiExpress,
  SiElectron,
  SiVuedotjs,
  SiThreedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiPython,
  SiGit,
  SiGo,
  SiRuby,
  SiJava,
  SiReact,
  SiPug,
  SiTailwindcss,
  SiFlask,
  SiNpm,
  SiStyledcomponents
} from "react-icons/si";
import { FaRegCaretSquareRight } from "react-icons/fa";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { FaTwitter, FaGithub, FaDiscord, FaMastodon } from "react-icons/fa";

const Business = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m A Full-Stack Developer Who Is A Movie Junkie!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            If You Work, It Will Work.
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Business Offers
        </Heading>
        <Paragraph>
          I&apos;m Currently Open To Freelance And Actively Looking For A
          Full-Time Job Opportunties, So If You Like What You&apos;ve Seen
          Please Don&apos;t Hesitate To Get In Touch! If You Have Any Questions
          Or Would Just Like To Say Hi, You Can Dm Me On Any Of My Socials Below
          Or Send Me A Friend Request In Discord, I&apos;ll Delighted To Get
          Back To You As Soon As Possible.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/images/cv.pdf">
            <Button rightIcon={<FaRegCaretSquareRight />} colorScheme="teal">
              Download My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Technologies
        </Heading>
        <ul>
          <List spacing={3}>
            <ListItem> <ListIcon as={SiTypescript} /> TypeScript </ListItem>
            <ListItem> <ListIcon as={SiJavascript} /> JavaScript </ListItem>
            <ListItem> <ListIcon as={SiMarkdown} /> Markdown </ListItem>
            <ListItem> <ListIcon as={SiChakraui} /> Chakra-UI </ListItem>
            <ListItem> <ListIcon as={SiNodedotjs} /> Node.Js </ListItem>
            <ListItem> <ListIcon as={SiExpress} /> Express.Js </ListItem>
            <ListItem> <ListIcon as={SiElectron} /> Electron.Js </ListItem>
            <ListItem> <ListIcon as={SiVuedotjs} /> Vue.Js </ListItem>
            <ListItem> <ListIcon as={SiThreedotjs} /> Three.Js </ListItem>
            <ListItem> <ListIcon as={SiNextdotjs} /> Next.Js </ListItem>
            <ListItem> <ListIcon as={SiHtml5} /> Html </ListItem>
            <ListItem> <ListIcon as={SiCss3} /> CSS </ListItem>
            <ListItem> <ListIcon as={SiSass} /> SASS </ListItem>
            <ListItem> <ListIcon as={SiPython} /> Python </ListItem>
            <ListItem> <ListIcon as={SiGit} /> Git </ListItem>
            <ListItem> <ListIcon as={SiJava} /> Java </ListItem>
            <ListItem> <ListIcon as={SiRuby} /> Ruby </ListItem>
            <ListItem> <ListIcon as={SiGo} /> Golang </ListItem>
            <ListItem> <ListIcon as={SiReact} /> React </ListItem> 
            <ListItem> <ListIcon as={SiPug} /> Pug </ListItem>
            <ListItem> <ListIcon as={SiTailwindcss} /> TailWindCss </ListItem>
            <ListItem> <ListIcon as={SiFlask} /> Flask </ListItem>
            <ListItem> <ListIcon as={SiStyledcomponents} /> Styled-Components </ListItem>
            <ListItem> <ListIcon as={SiNpm} /> NPM </ListItem>
          </List>
        </ul>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/NawrasseDahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaGithub} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/nawrassedahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaTwitter} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:nawrassehimself@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaMastodon} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://discord.com/users/878309088126197860"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaDiscord} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Business;
