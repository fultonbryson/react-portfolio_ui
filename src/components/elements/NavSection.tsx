import { Flex } from "@mantine/core";
import { appRoutes } from "../../utils/Routes";
import { HeaderNavItem } from "./pageElements";
import { Colors } from "../../styles/styleVariables";

export const HeaderNavSection = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      sx={{
        width: "100%",
        height: 70,
        maxWidth: 450,
        fontSize: 22,
        background: Colors.primary,
        padding: "8px 24px",
        borderRadius: "0px 0px 50px 0px",
      }}>
      {appRoutes.map((route) => (
        <HeaderNavItem key={route.path} path={route.path} title={route.title} />
      ))}
    </Flex>
  );
};
