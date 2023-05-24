import { Flex, Group, Image } from "@mantine/core";

import { HeaderText, SubheaderText } from "../../styles/pageElementStyles";
import { NavDrawer } from "./NavDrawer";
import { HeaderNavSection } from "./NavSection";
import { Colors } from "../../styles/styleVariables";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import { HeroSection } from "./pageElements";

import me from "../../content/assets/me.jpg";

export const DesktopHeader = () => (
  <Flex
    justify='space-between'
    align='center'
    sx={{
      paddingRight: 42,
    }}>
    <HeaderNavSection />
    <HeroSection />
  </Flex>
);

export const MobileHeader = (props: any) => (
  <Flex
    justify='space-between'
    align='center'
    sx={{
      paddingLeft: 24,
      paddingRight: 24,
      background: Colors.primary,
      height: 100,
    }}>
    <NavDrawer />

    <Flex direction='column' align='flex-end' justify='center'>
      <HeaderText>{props.title}</HeaderText>
      {props.subtitle && <SubheaderText>{props.subtitle}</SubheaderText>}
    </Flex>
  </Flex>
);

export const Header = (props: any) => {
  const displayType = useSelector(
    (state: RootState) => state.screen.displayType
  );
  return (
    <>
      {displayType === "MOBILE" ? (
        <MobileHeader title={props.title} subtitle={props.subtitle} />
      ) : (
        <DesktopHeader />
      )}
    </>
  );
};
