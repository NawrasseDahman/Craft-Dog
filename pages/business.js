import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from "react-icons/io5";
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
        Hello, I&apos;m A Full-Stack Developer Who&apos;s A Movie Junkie!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            If You Work, It Will Work
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Business Offers
        </Heading>
        <Paragraph>
          I&apos;m Currently Doing Projects Under The Name Of Urban SASS. But If
          You Would Like To Work With Me In The Future? Or If You&apos;re Offering 
          A Deal
          Or A Job? Don&apos;t Hesitate To Get In Touch, You Can Dm Me On Any Of
          My Other Socials Below Or Send Me A Friend Request In Discord, I Also 
          Share All My Open Source
          Projects On Github. Have A Nice Day!
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/images/resume.pdf">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Download My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/NawrasseDahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
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
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/nawrassedahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.com/users/878309088126197860" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Business
