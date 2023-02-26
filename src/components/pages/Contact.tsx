import { Flex, Group, Text } from "@mantine/core";
import { Header } from "../elements/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Colors, Fonts } from "../../styles/styleVariables";

export const Contact = () => {
  return (
    <>
      <Header title='Contact' subtitle='And Networks' />

      <Group p={22} position='center' h={400} sx={{ width: "100%" }}>
        <Flex
          w={400}
          justify='space-between'
          align='center'
          h={200}
          direction='column'
          sx={{ alignSelf: "center", justifySelf: "center" }}>
          <Flex w={"100%"} align='center' justify='space-between'>
            <FontAwesomeIcon size='xl' color={Colors.primary} icon={faPhone} />
            <Text size={16} sx={{ fontFamily: Fonts.secondary }}>
              (385) 250-9326
            </Text>
          </Flex>

          <Flex w={"100%"} align='center' justify='space-between'>
            <FontAwesomeIcon
              size='xl'
              color={Colors.primary}
              icon={faEnvelope}
            />
            <Text size={16} sx={{ fontFamily: Fonts.secondary }}>
              dev.brysonfulton@gmail.com
            </Text>
          </Flex>

          <Flex w={"100%"} align='center' justify='space-between'>
            <a
              href='https://www.linkedin.com/in/bryson-fulton-79b771206/'
              target='_blank'
              rel='noreferrer'>
              <FontAwesomeIcon
                size='xl'
                color={Colors.primary}
                icon={faLinkedin}
              />
            </a>

            <a
              href='https://github.com/fultonbryson'
              target='_blank'
              rel='noreferrer'>
              <FontAwesomeIcon
                size='xl'
                color={Colors.primary}
                icon={faGithub}
              />
            </a>

            <a
              href='https://twitter.com/brysonpfulton'
              target='_blank'
              rel='noreferrer'>
              <FontAwesomeIcon
                size='xl'
                color={Colors.primary}
                icon={faTwitter}
              />
            </a>
          </Flex>
        </Flex>
      </Group>
    </>
  );
};
