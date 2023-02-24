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

export const PortfolioCard = (props: any) => {
  return (
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      sx={{
        maxWidth: 370,
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
        <Text weight={500}>{props.portfolioItem.name}</Text>
        {props.portfolioItem.category && (
          <Badge color='pink' variant='light'>
            {props.portfolioItem.category}
          </Badge>
        )}
      </Group>

      <Text size='sm' color='dimmed'>
        {props.portfolioItem.description}
      </Text>

      <Button
        variant='light'
        color='grape'
        fullWidth
        mt='md'
        radius='md'
        onClick={() => window.open(props.portfolioItem.url)}>
        {props.portfolioItem.name !== "Contact Me"
          ? `Visit ${props.portfolioItem.name}`
          : props.portfolioItem.name}
      </Button>
    </Card>
  );
};
