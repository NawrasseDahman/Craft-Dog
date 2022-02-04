import { Box, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/Layout'

const Footer = () => {
  return (
    

export const meta = {
  title: 'Markdown/MDX with Next.js',
  author: 'Lee Robinson'
}

hi

    <Box align="center" opacity={0.4} fontSize="sm">
    <Section delay={0.4} />
    <Divider my={6} />
      &copy; {new Date().getFullYear()} Nawrasse Dahman. All Rights Reserved.
    </Box>
  )
}

export default Footer ({ children }) => <Layout meta={meta}>{children}</Layout>
