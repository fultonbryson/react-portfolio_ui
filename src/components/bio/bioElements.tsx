import { Box, Flex, Group, Image, Text } from "@mantine/core";
import { Colors, Fonts } from "../../styles/styleVariables";
import me from "../../content/assets/me.jpg";
import show from "../../content/assets/show.jpg";
import bass from "../../content/assets/bass.jpg";
import { aboutMeOne, aboutMeThree, aboutMeTwo } from "../../content/bioContent";

export const MobileBioView = () => {
  return (
    <Flex direction='column' align='center' sx={{ padding: 18 }}>
      <Text
        color={Colors.primary}
        pb={16}
        weight={700}
        size={22}
        sx={{ fontFamily: Fonts.primary }}
        align='center'>
        Developer, Musician, Husband
      </Text>

      <Group position='center' pb={16}>
        <Box>
          <Image src={me} height={300} sx={{ maxWidth: 300 }} />
        </Box>

        <Box w={300}>
          <Text align='center' size={18} sx={{ fontFamily: Fonts.secondary }}>
            {aboutMeOne}
          </Text>
        </Box>
      </Group>

      <Group position='center' pb={16}>
        <Box>
          <Image src={bass} height={300} sx={{ maxWidth: 300 }} />
        </Box>

        <Box w={300}>
          <Text align='center' size={18} sx={{ fontFamily: Fonts.secondary }}>
            {aboutMeTwo}
          </Text>
        </Box>
      </Group>

      <Group position='center' pb={16}>
        <Box>
          <Image src={show} height={300} width={300} sx={{ maxWidth: 300 }} />
        </Box>

        <Box w={300}>
          <Text align='center' size={18} sx={{ fontFamily: Fonts.secondary }}>
            {aboutMeThree}
          </Text>
        </Box>
      </Group>
    </Flex>
  );
};

export const DesktopBioView = () => {
  return (
    <Flex direction='column' align='center' sx={{ padding: 18 }}>
      <Text
        color={Colors.primary}
        pb={16}
        weight={700}
        size={22}
        sx={{ fontFamily: Fonts.primary }}
        align='center'>
        Developer, Musician, Husband
      </Text>

      <Group position='center' pb={16}>
        <Box>
          <Image src={me} height={300} sx={{ maxWidth: 300 }} />
        </Box>

        <Box w={300}>
          <Text size={18} sx={{ fontFamily: Fonts.secondary }}>
            {aboutMeOne}
          </Text>
        </Box>
      </Group>

      <Group position='center' pb={16}>
        <Box w={300}>
          <Text size={18} sx={{ fontFamily: Fonts.secondary }}>
            {aboutMeTwo}
          </Text>
        </Box>

        <Box>
          <Image src={bass} height={300} sx={{ maxWidth: 300 }} />
        </Box>
      </Group>

      <Group position='center' pb={16}>
        <Box>
          <Image src={show} height={300} width={300} sx={{ maxWidth: 300 }} />
        </Box>

        <Box w={300}>
          <Text size={18} sx={{ fontFamily: Fonts.secondary }}>
            {aboutMeThree}
          </Text>
        </Box>
      </Group>
    </Flex>
  );
};
