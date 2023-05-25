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
import { socialRoutes } from "../../utils/Routes";

import me from "../../content/assets/me.jpg";
import { useState } from "react";
import { HeaderText, SubheaderText } from "../../styles/pageElementStyles";

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
  const [isActive, setIsActive] = useState(false);
  return (
    <Link
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={props.onClick}
      to={props.path}
      style={{
        fontSize: 16,
        color: Colors.lightGrey,
        fontFamily: Fonts.primary,
        textDecoration: isActive ? "underline" : "none",
      }}>
      {props.title}
    </Link>
  );
};

export const HeroSection = (props: any) => (
  <Flex
    align='center'
    justify='space-between'
    sx={{
      background: Colors.primary,
      height: 60,
      width: "100%",
      maxWidth: 300,
      borderRadius: 8,
      padding: "4px 8px",
      boxShadow: "4px -2px 10px rgba(0, 0, 0, 0.2)",
      position: "fixed",
      right: 42,
      zIndex: 1,
    }}>
    <Flex direction='column'>
      <HeaderText>Bryson Fulton</HeaderText>
      <SubheaderText>Full Stack Developer</SubheaderText>
    </Flex>

    <Image
      src={me}
      width={64}
      radius={100}
      sx={{ border: `1px solid ${Colors.highlight}`, borderRadius: "100%" }}
    />
  </Flex>
);

export const Breadcrumb = (props: any) => (
  <Link
    target='_blank'
    onClick={props.onClick}
    to={props.path}
    style={{
      fontSize: 18,
      color: Colors.highlight,
      fontFamily: Fonts.primary,
      textDecoration: "none",
    }}>
    {props.icon}
  </Link>
);

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

export const DesktopFooter = () => {
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
        boxShadow: "0 -5px 12px rgba(0, 0, 0, 0.5)",
      }}>
      <Group position='left' sx={{ paddingLeft: 12, width: "100%" }} />

      <Group position='center' sx={{ width: "100%", flexDirection: "column" }}>
        <Flex>
          <Image src={me} width={60} radius={100} />
        </Flex>
        <Flex sx={{ paddingRight: 12, fontSize: 12, color: Colors.lightGrey }}>
          2023 &#169; Bryson Fulton | All Rights Reserved
        </Flex>
      </Group>
      <Group
        position='right'
        spacing='xl'
        sx={{ paddingRight: 12, width: "100%" }}>
        {socialRoutes.map((route) => (
          <Breadcrumb key={route.path} icon={route.icon} path={route.path} />
        ))}
      </Group>
    </Flex>
  );
};

export const MobileFooter = () => {
  return (
    <Flex
      align='center'
      justify='space-evenly'
      direction='column'
      sx={{
        background: Colors.darkGrey,
        height: 120,
        width: "100vw",
        boxShadow: "0 -5px 12px rgba(0, 0, 0, 0.3)",
      }}>
      <Image src={me} width={60} radius={100} />
      <Flex sx={{ paddingRight: 16, fontSize: 12, color: Colors.lightGrey }}>
        2023 &#169; Bryson Fulton | All Rights Reserved
      </Flex>
    </Flex>
  );
};
