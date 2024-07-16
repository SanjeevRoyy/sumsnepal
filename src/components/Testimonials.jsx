import { Center, Flex, Grid, Paper, Text, Title } from "@mantine/core";
import { Avatar } from "@mantine/core";

const Testimonials = () => {
  return (
    <>
      <Text ta="center" mt={80} size="50px">
        What they say about us
      </Text>
      <Paper mt={30} p={40}>
        <Grid gutter="sm" p={30} bg="#F4F4F7">
          <Grid.Col p={20} span={{ base: 12, md: 6, lg: 4 }}>
            <Title w={200}>What Our student say</Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper radius="lg" p={20} style={{ height: "100%" }}>
              <Flex align="center" gap={6}>
                <Avatar
                  src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
                  alt="it's me"
                />
                <Text c="dimmed">@aayushpoudel</Text>
              </Flex>
              <Flex justify="center" align="center" style={{ height: "100%" }}>
                <Text>
                  "Too much good.... today session teach me that how to speak in
                  front of many people and how to speech on events... and as
                  always makes mind more creative"
                </Text>
              </Flex>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper radius="lg" p={20} style={{ height: "100%" }}>
              <Flex align="center" gap={6}>
                <Avatar
                  src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
                  alt="it's me"
                />
                <Text c="dimmed">@aayushpoudel</Text>
              </Flex>
              <Flex justify="center" align="center" style={{ height: "100%" }}>
                <Text>
                  "Today's session was also much interesting as others too the
                  way we learned by telling story taught us the importance of
                  time like to complete the certain topic in specific time we
                  need only to cover the main topic rather than going it's
                  background and future"
                </Text>
              </Flex>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper p={20} radius="lg" h={200}>
              <Flex align="center" gap={6}>
                <Avatar
                  src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
                  alt="it's me"
                />
                <Text c="dimmed">@aayushpoudel</Text>
              </Flex>
              <Center style={{ height: "100%" }}>
                <Text ta="center">
                  The session was very fun and I really enjoyed it. Also, it
                  have given me a lot to think about.
                </Text>
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Paper h={200} radius="lg" p={20}>
              <Flex align="center" gap={6}>
                <Avatar
                  src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
                  alt="it's me"
                />
                <Text c="dimmed">@aayushpoudel</Text>
              </Flex>
              <Center style={{ height: "100%" }}>
                <Text>Last majja aayo.</Text>
              </Center>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
            <Paper p={20} h={200} radius="lg">
              <Flex align="center" gap={6}>
                <Avatar
                  src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
                  alt="it's me"
                />
                <Text c="dimmed">@aayushpoudel</Text>
              </Flex>
              <Center style={{ height: "100%" }}>
                <Text>
                  It was very good experience. In fact I want to request to
                  conduct Workshop on this topic once more.
                </Text>
              </Center>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper p={20} radius="lg" h={200}>
              <Flex align="center" gap={6}>
                <Avatar
                  src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
                  alt="it's me"
                />
                <Text c="dimmed">@aayushpoudel</Text>
              </Flex>
              <Center style={{ height: "100%" }}>
                <Text>
                  It was fun learning we learn about team work and take active
                  participation in the session.
                </Text>
              </Center>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper p={20} h={200} radius="lg">
              <Flex align="center" gap={6}>
                <Avatar
                  src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
                  alt="it's me"
                />
                <Text c="dimmed">@aayushpoudel</Text>
              </Flex>
              <Center style={{ height: "100%" }}>
                <Text>
                  Best out of all the sessions till now. Very collaborative.
                </Text>
              </Center>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Paper p={20} style={{ height: "100%" }} radius="lg">
              <Flex align="center" gap={6}>
                <Avatar
                  src="https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg"
                  alt="it's me"
                />
                <Text c="dimmed">@aayushpoudel</Text>
              </Flex>
              <Center style={{ height: "100%" }}>
                <Text>
                  The class was very much interesting and I learned about the
                  team work which is required in our life in different fields.
                  It is the way of developing the team work habit in us
                  positively. Also being a presenter it is glad for me to share
                  something in front of class.
                </Text>
              </Center>
            </Paper>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
};

export default Testimonials;
