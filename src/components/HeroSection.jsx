import { Box, Button, Center, Flex, Group, Paper, Text } from "@mantine/core";
import Lottie from "lottie-react";
import React, { useRef } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import lottieimg from "../lottie/lottie.json";
import { inView, motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  const textRef = useRef(null);
  const isTextInView = inView(textRef, { once: true });
  const words = "Best online platform for education.".split(" ");
  const wordVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0 } },
  };

  return (
    <Paper id="hero-section" style={{ backgroundColor: "#FDBA74" }}>
      <Flex direction={isMobile ? "column" : "row"} justify="space-between">
        <Box p={isMobile ? 20 : 80}>
          <motion.div ref={textRef}>
            <Text size="60px" maw={350} fw={600}>
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate={isTextInView ? "visible" : "hidden"}
                  variants={wordVariants}
                  custom={index}
                  style={{ display: "inline-block", marginRight: "8px" }}
                >
                  {word}
                </motion.span>
              ))}
            </Text>
          </motion.div>
          <Text mt={20}>
            Online courses from the world's leading experts. Join 17 million
            learners today.
          </Text>
          <Group mt={isMobile ? 20 : 110}>
            {!isMobile && (
              <Button
                variant="default"
                // mt={50}
                size="lg"
                radius={15}
                leftSection={<FaRegThumbsUp />}
              >
                Get Started
              </Button>
            )}
          </Group>
        </Box>
        <Box>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Lottie animationData={lottieimg} />
          </motion.div>
          {isMobile && (
            <Center p={20}>
              <Button
                variant="default"
                // mt={20}

                size="lg"
                radius={15}
                leftSection={<FaRegThumbsUp />}
              >
                Get Started
              </Button>
            </Center>
          )}
        </Box>
      </Flex>
    </Paper>
  );
};

export default HeroSection;
