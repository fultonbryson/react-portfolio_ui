import {
  ActionIcon,
  Affix,
  Box,
  Flex,
  Group,
  Image,
  Text,
  Transition,
} from "@mantine/core";
import { Header } from "../elements/Header";
import me from "../../content/assets/me.jpg";
import show from "../../content/assets/show.jpg";
import bass from "../../content/assets/bass.jpg";
import { aboutMeOne, aboutMeThree, aboutMeTwo } from "../../content/bioContent";
import { Colors, Fonts } from "../../styles/styleVariables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "@mantine/hooks";

export const Bio = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Header title='Bio' subtitle='All About Me' />

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

      <Affix position={{ bottom: 30, right: 0 }}>
        <Transition transition='slide-up' mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              color='green'
              variant='transparent'
              radius='xl'
              size='xl'
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}>
              <FontAwesomeIcon size='lg' icon={faArrowUp} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
};
