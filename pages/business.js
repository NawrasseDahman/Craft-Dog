import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  HStack,
  List,
  ListItem,
  Icon,
  Center,
  useColorModeValue
} from "@chakra-ui/react";
import {
  SiJavascript,
  SiTypescript,
  SiChakraui,
  SiNodedotjs,
  SiVuedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiPython,
  SiJava,
  SiReact,
  SiTailwindcss,
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
          <HStack>
          <Center>
          <List spacing={4}>
           <ListItem>
           <ListIcon as={SiJavascript} color='yellow' />
            Javascript
           </ListItem>
          </Center>
          <Center>
          <Icon as={SiTypescript} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiChakraui} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiNodedotjs} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiVuedotjs} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiNextdotjs} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiHtml5} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiCss3} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiSass} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiPython} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiJava} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiReact} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiTailwindcss} w='40px' h='40px' />
          </Center>
          <Center>
          <Icon as={SiStyledcomponents} w='40px' h='40px' />
          </Center>
          </HStack>
          </List>
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
