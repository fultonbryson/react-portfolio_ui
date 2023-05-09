import { Flex } from "@mantine/core";
import { appRoutes } from "../../utils/Routes";
import { HeaderNavItem, FooterNavItem } from "./pageElements";

export const HeaderNavSection = () => {
  return (
    <Flex
      align='start'
      justify='space-between'
      sx={{
        width: "100%",
        maxWidth: 250,
        fontSize: 22,
      }}>
      {appRoutes.map((route) => (
        <HeaderNavItem key={route.path} path={route.path} title={route.title} />
      ))}
    </Flex>
  );
};

export const FooterNavSection = () => {
  return (
    <Flex
      align='start'
      justify='space-between'
      sx={{
        width: "100%",
        maxWidth: 150,
      }}>
      {appRoutes.map((route) => (
        <FooterNavItem key={route.path} path={route.path} title={route.title} />
      ))}
    </Flex>
  );
};
