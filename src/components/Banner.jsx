import { Box, Button, Group, Image, Paper, Text, Title } from "@mantine/core";
import React, { useRef } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { inView, motion } from "framer-motion";
import illustrationIntro from "/assets/illustration-intro.svg";
import { FaRegThumbsUp } from "react-icons/fa";

const Banner = () => {
  const isMobile = useMediaQuery("(max-width: 755px)");
  const textRef = useRef(null);
  const isTextInView = inView(textRef, { once: true });

  const words = "Towards Innovation In Education".split(" ");

  const imageVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0 } },
  };

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

  return (
    <Box p={isMobile ? 0 : 0}>
      <Paper bg="#FDBA74" p={50}>
        <Group justify="space-between" align="top">
          <Box>
            <motion.div ref={textRef}>
              <Text size="45px" maw={420} fw={600}>
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
            <Text mt={40} maw={400}>
              Join with us in fostering skill development and community-driven
              innovation to address societal challenges using cutting-edge
              digital tools. Together, let's build a brighter future.
            </Text>
            <Button
              mt={40}
              size="lg"
              radius={20}
              variant="default"
              leftSection={<FaRegThumbsUp />}
            >
              Get Started
            </Button>
          </Box>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image src={illustrationIntro} alt="" />
          </motion.div>
        </Group>
      </Paper>
    </Box>
  );
};

export default Banner;
