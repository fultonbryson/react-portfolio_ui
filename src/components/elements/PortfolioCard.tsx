import {
  Card,
  BackgroundImage,
  Image,
  Box,
  Group,
  Text,
  Badge,
  Button,
  Center,
} from "@mantine/core";
import { Fonts } from "../../styles/styleVariables";

export const PortfolioCard = (props: any) => {
  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      sx={{
        maxWidth: 375,
        minWidth: 300,
        width: "80%",
      }}
      key={props.portfolioItem.id}>
      <Card.Section sx={{ maxHeight: 160, height: 160 }} mx='auto'>
        <Box>
          <BackgroundImage
            mx='auto'
            mt={20}
            src={props.portfolioItem.thumb_image_url}
            radius='sm'>
            <Center>
              <Box
                sx={{
                  height: 160,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}>
                <Image
                  sx={{ maxWidth: 250, maxHeight: 175 }}
                  src={props.portfolioItem.logo_url}
                />
              </Box>
            </Center>
          </BackgroundImage>
        </Box>
      </Card.Section>

      <Group position='apart' mt='md' mb='xs'>
        <Text weight={500} sx={{ fontFamily: Fonts.primary }}>
          {props.portfolioItem.name}
        </Text>
        {props.portfolioItem.category && (
          <Badge
            sx={{ fontFamily: Fonts.primary, letterSpacing: 1 }}
            color='green'
            variant='light'>
            {props.portfolioItem.category}
          </Badge>
        )}
      </Group>

      <Text sx={{ fontFamily: Fonts.secondary }} size='sm' color='dimmed'>
        {props.portfolioItem.description}
      </Text>

      <Group position='center'>
        <Button
          variant='light'
          color='grape'
          size='sm'
          mt='md'
          radius='md'
          onClick={() => window.open(props.portfolioItem.url)}>
          {props.portfolioItem.name !== "Contact Me"
            ? `Visit ${props.portfolioItem.name}`
            : props.portfolioItem.name}
        </Button>
      </Group>
    </Card>
  );
};
