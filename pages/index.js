import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import thumbdadjoke from '../public/images/contents/dadjoke.png'
import thumbnotesapp from '../public/images/contents/notesapp.jpg'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m A Full-Stack Developer Who&apos;s A Movie Junkie!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dreams Make Good Stories, My Friend
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/nawrasse.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who Am I
        </Heading>
        <Paragraph>
          Nawrasse Is A Freelancer And A Full-Stack Developer & Designer Based In Tangier With Passion For 
          Building Digital Services / Stuff He Wants Or Likes Or Even Needs. He Knows A Lot Of Programming
          Languages, Which Makes Him An Expert At Doing His Thing.
          When Not Online, He Loves Hanging Out With His Family & Animals. Currently, He&apos;s Focusing On His
          Passion For Movies & Tv Shows And Everything In Between.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/business">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Business Offers
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My Biography
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born In Tangier, Morocco
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Started My Coding Journey
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked As Web Developer At BrainStormGames
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked As Web Designer At UrbanSASS Development
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Works As A Freelancer & Continuing His Studies
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Technologies
        </Heading>
        <Paragraph>
          HTML | CSS | SASS | Javascript | Typescript | Markdown |
          Next.js | Express.js | Vue.js | Node.js | Python | Electron.js |
          Java | Ruby | Go | Json | Flask | Shell Script | NPM | Pug | Three.js |
          Chakra-UI.
        </Paragraph>
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

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://dadjoke.vercel.app"
            title="Dad Jokes"
            thumbnail={thumbdadjoke}
          >
            The Best Dad Jokes Ever
          </GridItem>
          <GridItem
            href="https://notednow.vercel.app"
            title="Notes App"
            thumbnail={thumbnotesapp}
          >
           Save Your Important Notes 
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
