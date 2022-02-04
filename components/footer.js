import { Box, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/Layout'

const Footer = () => {
  return (

    <Box align="center" opacity={0.4} fontSize="sm">
    <Section delay={0.4} />
    <Divider my={6} />
      &copy; {new Date().getFullYear()} Nawrasse Dahman. All Rights Reserved.
    </Box>
  )
}

export default Footer
