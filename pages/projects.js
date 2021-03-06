import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Link,
  Button
} from "@chakra-ui/react";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { RiGitRepositoryLine } from "react-icons/ri";

import thumbcountdown from "../public/images/contents/countdown.png";
import thumbterminal from "../public/images/contents/terminal.png";
import thumbsearch from "../public/images/contents/searchedme.png";
import thumbhouse from "../public/images/contents/house3d.png";
import thumbcovid from "../public/images/contents/statsforcovid.png";
import thumbinnocent from "../public/images/contents/innocent.png";
import thumbthemechanger from "../public/images/contents/themechanger.png";
import thumbsuperstardj from "../public/images/contents/superstardj.png";
import thumbdiscordstage from "../public/images/contents/discordstage.png";
import thumbmatrixrain from "../public/images/contents/matrixrain.png";
import thumbarbershop from "../public/images/contents/barbershop.png";
import thumbclockwise from "../public/images/contents/clockwise.png";

const Projects = () => (
   <Layout title="Projects">
    <Container>
      <Heading
                as="h3"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3} variant="section-title"
            >
                Popular Projects
            </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Death! There's An App For That"
            thumbnail={thumbcountdown}
            href="https://countdownmovie.vercel.app"
          />
          <GridItem
            title="Terminal Portfolio"
            thumbnail={thumbterminal}
            href="https://terminalnawrasse.vercel.app"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="A Search Engine Like Google That Works With Wikipedia API"
            thumbnail={thumbsearch}
            href="https://searchedme.vercel.app"
          />
          <GridItem
            title="A 3D Prespective Of House"
            thumbnail={thumbhouse}
            href="https://codepen.io/nawrassedahman/pen/GRmBLaB"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5} />
        <Divider my={6} />
          
        <Heading
                as="h3"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3} variant="section-title"
            >
                Collaborations
            </Heading>

      <Section delay={0.7}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Statistics Website For CoronaVirus"
            thumbnail={thumbcovid}
            href="https://statsforcovid.vercel.app"
          />
          <GridItem
            title="Innocent Discord SelfBot"
            thumbnail={thumbinnocent}
            href="https://github.com/NawrasseDahman/Innocent"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.9}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Superstar DJ For Your Every Mood"
            thumbnail={thumbsuperstardj}
            href="https://codepen.io/nawrassedahman/pen/dyWmpoe"
          />
          <GridItem
            title="Theme Changer For Your Website"
            thumbnail={thumbthemechanger}
            href="https://themeicons.vercel.app"
          />
        </SimpleGrid>
      </Section>
 
      <Section delay={0.11} />
        <Divider my={6} />

         <Heading
                as="h3"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3} variant="section-title"
            >
                Old Projects
            </Heading>

       <Section delay={0.13}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Discord Stage Room"
            thumbnail={thumbdiscordstage}
            href="https://discordstageroom.vercel.app"
          />
          <GridItem
            title="A Recreation Of The Classic Matrix Code Rain Effect"
            thumbnail={thumbmatrixrain}
            href="https://matrixrain.vercel.app"
          />
        </SimpleGrid>
      </Section>

        <Section delay={0.15}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="CSS At The Barber Shop"
            thumbnail={thumbarbershop}
            href="https://cssbarbershop.vercel.app"
          />
          <GridItem
            title="A Responsive Analog Clock UI Design"
            thumbnail={thumbclockwise}
            href="https://clocking.vercel.app"
          />
        </SimpleGrid>
      </Section>

        <Box align="center" my={4}>
          <Link href="https://github.com/NawrasseDahman?tab=repositories" target="_blank">
            <Button leftIcon={<RiGitRepositoryLine />} colorScheme="teal">
              See All Repositories
            </Button>
          </Link>
        </Box>
    </Container>
   </Layout>
);

export default Projects;
