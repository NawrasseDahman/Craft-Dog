import { Box, Divider } from '@chakra-ui/react'
import Section from '../components/section'

const Footer = () => {
  
  <>
  <p />
 <p />
  <table width="100%" height="100%">
    <tbody>
      <tr>
        <td width="100%" height="100%">
          <p />
          <p>
            <br />{" "}
            <a href="https://github.com/kittinan/spotify-github-profile">
              <img
                src="https://spotify-github-profile.vercel.app/api/view?uid=4pevqlgntbtzf7quj0q307245&cover_image=true&theme=novatorem&bar_color=53b14f&bar_color_cover=true"
                alt="spotify-github-profile"
              />
           </a>
          </p>
          <p></p>
        </td>
      </tr>
    </tbody>
  </table>
  <table></table>
</>
  
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
    <Section delay={0.4} />
    <Divider my={6} />
      &copy; {new Date().getFullYear()} Nawrasse Dahman. All Rights Reserved.
    </Box>
  )
}

export default Footer
