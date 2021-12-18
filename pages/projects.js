import {
  Container,
  Heading,
  SimpleGrid,
  Divider
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbcountdown from "../public/images/contents/countdown.png";
import thumbdadjokes from "../public/images/contents/dadjokes.png";
import thumbnotes from "../public/images/contents/notingapp.png";
import thumbhouse from "../public/images/contents/house3d.png";
import thumbcovid from "../public/images/contents/statsforcovid.png";
import thumbinnocent from "../public/images/contents/innocent.png";
import thumbthemechanger from "../public/images/contents/themechanger.png";
import thumbsuperstardj from "../public/images/contents/superstardj.png";
import thumbdiscordstage from "../public/images/contents/discordstage.png";
import thumbmatrixrain from "../public/images/contents/matrixrain.png";

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
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
            title="Dad Jokes Website"
            thumbnail={thumbdadjokes}
            href="https://dadjoke.vercel.app"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="A Notes App That Keeps Your Data Safe"
            thumbnail={thumbnotes}
            href="https://notednow.vercel.app"
          />
          <GridItem
            title="A 3D Prespective Of House"
            thumbnail={thumbhouse}
            href="https://codepen.io/nawrassedahman/pen/GRmBLaB"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
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

      <Section delay={0.5}>
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

       <Section delay={0.4} />
        <Divider my={6} />
         <Heading as="h3" fontSize={20} mb={4}>
          Old Projects
         </Heading>

        <Section delay={0.5} />
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
      <Section />
    <Container />
  <Layout />
);

export default Projects;
