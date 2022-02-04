import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SiCodepen, SiInstagram, SiGithub, SiSpotify } from 'react-icons/si';
import { FaRegCaretSquareRight } from "react-icons/fa";
import { age } from '../components/time';
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const Home = () => (
  
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://nawrasse.netlify.app/")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!done ? (
        <ReactLoading
          type={"bars"}
          color={"#ffda96"}
          height={100}
          width={100}
        />
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
  
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m A Full-Stack Developer Who Is A Movie Junkie!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dreams Make Good Stories, My Friend.
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
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
          Nawrasse ( {age.toPrecision(7)} Years Old )
          Is A Full-Stack Developer & Designer Based In Tangier With Passion For 
          Building Digital Services / Stuff He Wants Or Likes Or Even Needs. He Knows A Lot Of Programming
          Languages, Which Makes Him An Expert At Doing His Thing.
          When Not Online, He Loves Hanging Out With His Family & Animals. Currently, He&apos;s Focusing On His
          Passion For Movies & Tv Shows And Everything In Between.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/business">
            <Button rightIcon={<FaRegCaretSquareRight />} colorScheme="teal">
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

      <Section delay={0.3} />
        <Heading as="h3" variant="section-title">
          What I Love
        </Heading>
        <Paragraph>
         I Love Watching Movies & Tv Shows, One Of My Favorite Tv Shows Are{' '}
          <Link href="https://www.google.com/search?q=the+vampire+diaries&client=ms-android-samsung-ga-rev1&sxsrf=AOaemvLtV2m0hnsWryLefgoy9TxhhDROfQ%3A1640416934360&ei=psbGYfSzFcqMa4m2i_gK&oq=the+vampire+diaries&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAMyBAgjECcyBAgjECcyBAgjECcyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQsAMQJzoHCAAQRxCwAzoHCAAQsAMQQzoKCAAQsAMQyQMQQzoKCC4QyAMQsAMQQzoQCC4QxwEQ0QMQyAMQsAMQQzoKCAAQgAQQhwIQFEoFCDgSATFKBAhBGABQjQZY9Q5gyhFoAXABeACAAaoBiAHiCJIBAzAuOJgBAKABAcgBEcABAQ&sclient=mobile-gws-wiz-serp" target="_blank">
          The Vampire Diaries
          </Link> Then There&apos;s{' '} 
          <Link href="https://www.google.com/search?q=the+originals&client=ms-android-samsung-ga-rev1&sxsrf=AOaemvLMnht4I75k4gS37Ujrtaw3In2aHA%3A1640416991635&ei=38bGYc2jJojga46OgrAO&oq=the+originals&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAMyBAguEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjELADECc6BwgAEEcQsAM6CgguEMgDELADEEM6BAgAEAo6BAguEAo6BAgjECc6CggAEIAEEIcCEBQ6BQguEIAEOgsILhCABBDHARDRA0oFCDgSATFKBAhBGABQzgRY5TdghjtoAnABeAGAAdUBiAHTHZIBBjAuMjEuMpgBAKABAcgBEMABAQ&sclient=mobile-gws-wiz-serp" target="_blank">
          The Originals 
          </Link> And{' '} 
          <Link href="https://www.google.com/search?q=Legacies&client=ms-android-samsung-ga-rev1&sxsrf=AOaemvIQULWYzWah6ax4KwjE98mRSRuIZA%3A1640417126862&ei=ZsfGYdb6M4nBlwS04YGACg&oq=Legacies&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAMyBAguECcyBAgjECcyBAgjECcyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEENKBAhBGABQAFgAYNUHaABwAXgAgAGxBIgBsQSSAQM1LTGYAQDAAQE&sclient=mobile-gws-wiz-serp" target="_blank">
          Legacies
          </Link>. I Also Enjoy Coding, Listening To Music, Playing Chess, Movie Nights, Holidays, Family Gatherings, Family Games.
        </Paragraph>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/NawrasseDahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={SiGithub} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://codepen.io/nawrassedahman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={SiCodepen} />}
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
                leftIcon={<Icon as={SiInstagram} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://open.spotify.com/user/4pevqlgntbtzf7quj0q307245?si=i38Ih3MgQTuyp#yjtO7cH6w&utm_source=copy-link" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={SiSpotify} />}
              >
                @NawrasseDahman
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<FaRegCaretSquareRight />} colorScheme="teal">
              Popular Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
