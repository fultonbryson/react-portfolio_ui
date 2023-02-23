import { useEffect, useState } from "react";
import { API_URL } from "../../utils/API";
import { Header } from "../elements/Header";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Loader,
  Text,
} from "@mantine/core";

export const Home = () => {
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/portfolio/portfolio_items`)
      .then((res) => {
        setPortfolioItems(res.data.portfolio_items);
        console.log(res.data.portfolio_items);
      })
      .catch((err) => {
        console.log("Error Getting Portfolio Items", err);
      });
  }, []);

  return (
    <>
      <Header title='Bryson Fulton' subtitle='Full Stack Developer' />

      <Flex
        mih={50}
        bg='rgba(0, 0, 0, .1)'
        gap='md'
        justify='flex-start'
        align='center'
        direction='column'
        wrap='nowrap'>
        {portfolioItems ? (
          portfolioItems.map((portfolioItem) => (
            <Card
              shadow='sm'
              p='lg'
              radius='md'
              withBorder
              key={portfolioItem.id}>
              <Card.Section>
                <Image src={portfolioItem.banner_image_url} />
              </Card.Section>

              <Group position='apart' mt='md' mb='xs'>
                <Text weight={500}>{portfolioItem.name}</Text>
                {portfolioItem.category && (
                  <Badge color='pink' variant='light'>
                    {portfolioItem.category}
                  </Badge>
                )}
              </Group>

              <Text size='sm' color='dimmed'>
                {portfolioItem.description}
              </Text>

              <Button
                variant='light'
                color='grape'
                fullWidth
                mt='md'
                radius='md'>
                {portfolioItem.name !== "Contact Me"
                  ? `Visit ${portfolioItem.name}`
                  : portfolioItem.name}
              </Button>
            </Card>
          ))
        ) : (
          <Loader color='grape' />
        )}
      </Flex>
    </>
  );
};
