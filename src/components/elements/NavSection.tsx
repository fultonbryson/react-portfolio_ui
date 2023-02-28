import { Flex, Group } from "@mantine/core";
import { appRoutes } from "../../utils/Routes";
import { NavItem } from "./pageElements";

export const NavSection = () => {
  return (
    <Flex
      align='start'
      justify='space-between'
      sx={{ width: "100%", maxWidth: 250, fontSize: 22 }}>
      {appRoutes.map((route) => (
        <NavItem key={route.path} path={route.path} title={route.title} />
      ))}
    </Flex>
  );
};
