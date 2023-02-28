import { Flex, Group, Image, Text } from "@mantine/core";
import { Header } from "../elements/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Colors, Fonts } from "../../styles/styleVariables";
import desk from "../../content/assets/desk.jpg";

export const Contact = () => {
  return (
    <>
      <Header title='Contact' subtitle='And Networks' />
      <Flex
        h='80vh'
        direction='column'
        justify='space-between'
        align='center'
        gap={16}>
        <Group p={26} m={36} position='center' h='100%' sx={{ width: "100%" }}>
          <Flex
            w={400}
            justify='space-between'
            align='center'
            direction='column'
            sx={{ maxHeight: 400, height: "100%" }}>
            <Flex w={"100%"} align='center' justify='space-between'>
              <FontAwesomeIcon
                size='xl'
                color={Colors.primary}
                icon={faPhone}
              />
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

        <Group position='center' sx={{ maxWidth: 500, width: "90%" }}>
          <Image src={desk} radius='md' />
        </Group>
      </Flex>
    </>
  );
};
