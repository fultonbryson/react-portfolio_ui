import { Box, Flex, Group, Image, Text } from "@mantine/core";
import { Header } from "../elements/Header";
import me from "../../content/assets/me.jpg";
import show from "../../content/assets/show.jpg";
import bass from "../../content/assets/bass.jpg";
import { aboutMeOne, aboutMeThree, aboutMeTwo } from "../../content/bioContent";
import { Colors, Fonts } from "../../styles/styleVariables";

export const Bio = () => {
  return (
    <>
      <Header title='Bio' subtitle='All About Me' />

      <Group position='center' sx={{ padding: 16 }}>
        <Text
          color={Colors.primary}
          weight={700}
          size={22}
          sx={{ fontFamily: Fonts.primary }}
          align='center'>
          Developer, Musician, Husband
        </Text>

        <Group position='center'>
          <Box>
            <Image src={me} height={300} sx={{ maxWidth: 300 }} />
          </Box>

          <Box w={300}>
            <Text align='center' size={18} sx={{ fontFamily: Fonts.secondary }}>
              {aboutMeOne}
            </Text>
          </Box>
        </Group>

        <Group position='center' sx={{ padding: 16 }}>
          <Box>
            <Image src={bass} height={300} sx={{ maxWidth: 300 }} />
          </Box>

          <Box w={300}>
            <Text align='center' size={18} sx={{ fontFamily: Fonts.secondary }}>
              {aboutMeTwo}
            </Text>
          </Box>
        </Group>

        <Group position='center' sx={{ padding: 16 }}>
          <Box>
            <Image src={show} height={300} width={300} sx={{ maxWidth: 300 }} />
          </Box>

          <Box w={300}>
            <Text align='center' size={18} sx={{ fontFamily: Fonts.secondary }}>
              {aboutMeThree}
            </Text>
          </Box>
        </Group>
      </Group>
    </>
  );
};
