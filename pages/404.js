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
      <Heading as="h1">Not found: 404</Heading>
      <Text>The Page You&apos;re Looking For Was Not Found.</Text>
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
