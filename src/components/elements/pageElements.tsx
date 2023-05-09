import { Link } from "react-router-dom";
import { Colors, Fonts } from "../../styles/styleVariables";
import {
  ActionIcon,
  Affix,
  Flex,
  Group,
  Image,
  Transition,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import { FooterNavSection } from "./NavSection";

import me from "../../content/assets/me.jpg";

export const HeaderNavItem = (props: any) => {
  const displayType = useSelector(
    (state: RootState) => state.screen.displayType
  );
  return (
    <Link
      onClick={props.onClick}
      to={props.path}
      style={{
        textDecoration: "none",
        color: `${displayType === "MOBILE" ? Colors.primary : Colors.white}`,
        marginBottom: 10,
        fontFamily: `${Fonts.primary}`,
      }}>
      {props.title}
    </Link>
  );
};
export const FooterNavItem = (props: any) => {
  return (
    <Link
      onClick={props.onClick}
      to={props.path}
      style={{
        fontSize: 16,
        color: Colors.lightGrey,
        fontFamily: Fonts.primary,
        textDecoration: "none",
      }}>
      {props.title}
    </Link>
  );
};

export const TopScroller = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 25, right: 25 }}>
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            color='green'
            variant='outline'
            radius='xl'
            size='lg'
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}>
            <FontAwesomeIcon size='lg' icon={faArrowUp} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export const Footer = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      sx={{
        background: Colors.darkGrey,
        width: "100vw",
        height: 120,
        position: "absolute",
        bottom: -120,
      }}>
      <Group position='left' sx={{ paddingLeft: 12, width: "100%" }}>
        <FooterNavSection />
      </Group>
      <Group position='center' sx={{ width: "100%", flexDirection: "column" }}>
        <Flex>
          <Image src={me} width={60} radius={100} />
        </Flex>
        <Flex sx={{ fontSize: 12, color: Colors.lightGrey }}>
          2023 &#169; Bryson Fulton | All Rights Reserved
        </Flex>
      </Group>
      <Group position='right' sx={{ paddingRight: 12, width: "100%" }}>
        Breadcrumbs
      </Group>
    </Flex>
  );
};
