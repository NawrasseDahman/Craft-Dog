import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">451 – Unavailable For Legal Reasons</Heading>
      <span>&nbsp;</span>
      <Text>
          Why Show A Generic 404 Page When I Can Make It Sound Mysterious? It Seems
          That You&apos;ve Found Something That Used To Exist, Or You Spelled Something
          Wrong. I&apos;m Guessing You Spelled Something Wrong. So Can You Double Check
          That URL, Please?
      </Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return To Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
