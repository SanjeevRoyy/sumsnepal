import { Center, Flex, Grid, Paper, Text, Title, Avatar } from "@mantine/core";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true });

  const testimonials = [
    {
      text: "Too much good.... today session teach me that how to speak in front of many people and how to speech on events... and as always makes mind more creative",
      avatar:
        "https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg",
      username: "@aayushpoudel",
    },
    {
      text: "Today's session was also much interesting as others too the way we learned by telling story taught us the importance of time like to complete the certain topic in specific time we need only to cover the main topic rather than going it's background and future",
      avatar:
        "https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg",
      username: "@aayushpoudel",
    },
    {
      text: "The session was very fun and I really enjoyed it. Also, it have given me a lot to think about.",
      avatar:
        "https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg",
      username: "@aayushpoudel",
    },
    {
      text: "Last majja aayo.",
      avatar:
        "https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg",
      username: "@aayushpoudel",
    },
    {
      text: "It was very good experience. In fact I want to request to conduct Workshop on this topic once more.",
      avatar:
        "https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg",
      username: "@aayushpoudel",
    },
    {
      text: "It was fun learning we learn about team work and take active participation in the session.",
      avatar:
        "https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg",
      username: "@aayushpoudel",
    },
    {
      text: "Best out of all the sessions till now. Very collaborative.",
      avatar:
        "https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg",
      username: "@aayushpoudel",
    },
    {
      text: "The class was very much interesting and I learned about the team work which is required in our life in different fields. It is the way of developing the team work habit in us positively. Also being a presenter it is glad for me to share something in front of class.",
      avatar:
        "https://t3.ftcdn.net/jpg/01/93/56/24/360_F_193562494_uZu3hswS738ZiuypuRl2oID4gM7mmAHX.jpg",
      username: "@aayushpoudel",
    },
  ];

  const gridVariants = {
    hidden: {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -50 : 50),
      y: (index) => (index % 2 !== 0 ? -50 : 0),
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: index * 0.5,
        duration: 0.8,
      },
    }),
  };

  return (
    <>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: isTextInView ? 1 : 0,
          x: isTextInView ? 0 : -100,
        }}
        transition={{ duration: 1 }}
      >
        <Text ta="center" mt={80} size="50px">
          What they say about us
        </Text>
      </motion.div>
      <Paper mt={30} p={40}>
        <Grid ref={gridRef} gutter="sm" p={30} bg="#F4F4F7">
          <Grid.Col p={20} span={{ base: 12, md: 6, lg: 4 }}>
            <Title w={200}>What Our student say</Title>
          </Grid.Col>
          {testimonials.map((testimonial, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, md: 6, lg: 4 }}
              component={motion.div}
              initial="hidden"
              animate={isGridInView ? "visible" : "hidden"}
              custom={index}
              variants={gridVariants}
            >
              <Paper radius="lg" p={20} style={{ height: "100%" }}>
                <Flex align="center" gap={6}>
                  <Avatar src={testimonial.avatar} alt="it's me" />
                  <Text c="dimmed">{testimonial.username}</Text>
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  style={{ height: "100%" }}
                >
                  <Text>{testimonial.text}</Text>
                </Flex>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default Testimonials;
