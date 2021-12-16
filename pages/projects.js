import {
  Container,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbFishWorkflow from "../public/images/contents/countdown.png";
import thumbMyDeskSetup from "../public/images/contents/dadjokes.png";
import thumb500PaidUsers from "../public/images/contents/notingapp.png";
import thumbFinancialGoal from "../public/images/contents/house3d.png";
import thumbHowToPriceYourself from "../public/images/contents/statsforcovid.png";
import thumb50xFaster from "../public/images/contents/innocent.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Death! There's An App For That"
            thumbnail={thumbFishWorkflow}
            href="https://countdownmovie.vercel.app"
          />
          <GridItem
            title="Dad Jokes Website"
            thumbnail={thumbMyDeskSetup}
            href="https://dadjoke.vercel.app"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="A Notes App That Keeps Your Data Safe"
            thumbnail={thumb500PaidUsers}
            href="https://notednow.vercel.app"
          />
          <GridItem
            title="A 3D Prespective Of House"
            thumbnail={thumbFinancialGoal}
            href="https://codepen.io/nawrassedahman/pen/GRmBLaB"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Statistics Website For CoronaVirus"
            thumbnail={thumbHowToPriceYourself}
            href="https://statsforcovid.vercel.app"
          />
          <GridItem
            title="Innocent Discord SelfBot"
            thumbnail={thumb50xFaster}
            href="https://github.com/NawrasseDahman/Innocent"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
