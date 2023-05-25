import { useState } from "react";
import { Drawer, Burger, Group } from "@mantine/core";
import { Colors, Fonts } from "../../styles/styleVariables";
import { HeaderNavItem } from "./pageElements";
import { appRoutes } from "../../utils/Routes";

export const NavDrawer = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title='Navigation'
        padding='sm'
        size='xs'
        styles={{
          header: {
            marginBottom: 36,
            fontSize: 22,
            fontFamily: Fonts.primary,
          },
          closeButton: {
            color: Colors.white,
          },
        }}
        sx={{ fontSize: 20 }}>
        <Group
          position='left'
          sx={{ flexDirection: "column", alignItems: "flex-start" }}>
          {appRoutes.map((route) => (
            <HeaderNavItem
              key={route.path}
              path={route.path}
              title={route.title}
              onClick={() => setOpened(false)}
            />
          ))}
        </Group>
      </Drawer>

      <Group position='left' sx={{ width: "25%" }}>
        <Burger
          size='md'
          opened={opened}
          onClick={() => setOpened(true)}
          color={Colors.white}
        />
      </Group>
    </>
  );
};
