import { useState } from "react";
import { Drawer, Button, Group } from "@mantine/core";

export const NavDrawer = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title='Navigation'
        padding='md'
        size='md'>
        Drawer Content Here
      </Drawer>

      <Group position='left'>
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
};
