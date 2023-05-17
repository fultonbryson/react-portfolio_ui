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
  Flex,
  Modal,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Fonts } from "../../styles/styleVariables";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopScroller } from "../elements/pageElements";

//

export const FilterButton = (props: any) => {
  return (
    <Button
      variant='light'
      color='grape'
      fullWidth
      radius='xs'
      sx={{ marginTop: 0 }}
      onClick={() => props.handleFilter(props.filterCategory)}>
      {props.filterType}
    </Button>
  );
};

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

export const CarouselCard = (props: any) => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

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

      <Modal
        title={props.portfolioItem.name}
        opened={opened}
        onClose={() => setOpened(false)}>
        <Group position='center'>
          <BackgroundImage
            mx='auto'
            mt={20}
            src={props.portfolioItem.banner_image_url}
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

          {props.portfolioItem.category && (
            <Badge
              sx={{ fontFamily: Fonts.primary, letterSpacing: 1 }}
              color='green'
              variant='light'>
              {props.portfolioItem.category}
            </Badge>
          )}

          <Text sx={{ fontFamily: Fonts.secondary }}>
            {props.portfolioItem.description}
          </Text>

          <Button
            variant='light'
            color='grape'
            size='sm'
            mt='md'
            radius='md'
            onClick={() =>
              props.portfolioItem.url
                ? window.open(props.portfolioItem.url)
                : navigate("/contact")
            }>
            {props.portfolioItem.name !== "Contact Me"
              ? `Visit ${props.portfolioItem.name}`
              : props.portfolioItem.name}
          </Button>
        </Group>
      </Modal>

      <Group position='center'>
        <Button
          variant='light'
          color='grape'
          size='sm'
          mt='md'
          radius='md'
          onClick={() => setOpened(true)}>
          Details
        </Button>
      </Group>
    </Card>
  );
};

export const PortfolioMobileView = (props: any) => {
  return (
    <>
      <Flex
        w='100vw'
        h='100%'
        mih={50}
        bg='rgba(0, 0, 0, .1)'
        gap='md'
        justify='space-between'
        align='center'
        direction='column'
        pb={16}>
        {props.filteredData.length >= 0 && props.filter
          ? props.filteredData.map((item: any) => {
              return <PortfolioCard key={item.id} portfolioItem={item} />;
            })
          : props.portfolioData.map((item: any) => {
              return <PortfolioCard key={item.id} portfolioItem={item} />;
            })}
      </Flex>
      <TopScroller />
    </>
  );
};

export const PortfolioDesktopView = (props: any) => {
  return (
    <Group sx={{ height: "100%" }}>
      <Carousel
        slideSize='30%'
        height={"100%"}
        slideGap='xs'
        controlSize={50}
        loop
        sx={{
          width: "100vw",
          borderRadius: 4,
        }}>
        {props.filteredData.length >= 0 && props.filter
          ? props.filteredData.map((item: any) => {
              return (
                <Carousel.Slide key={item.id}>
                  <CarouselCard portfolioItem={item} />
                </Carousel.Slide>
              );
            })
          : props.portfolioData.map((item: any) => {
              return (
                <Carousel.Slide key={item.id}>
                  <CarouselCard portfolioItem={item} />
                </Carousel.Slide>
              );
            })}
      </Carousel>
    </Group>
  );
};
