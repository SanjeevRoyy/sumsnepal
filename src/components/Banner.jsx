import { Box, Group, Image, Paper, Text, Title } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import illustrationIntro from "/assets/illustration-intro.svg";

const Banner = () => {
  const isMobile = useMediaQuery("(max-width:755px)");

  const title = "Towards Innovation In Education";
  const words = title.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box p={isMobile ? 10 : 40}>
      <Paper mt={60} bg="#FDBA74" p={20}>
        <Group justify="space-between" align="top">
          <Box>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              style={{ display: "inline-flex", flexWrap: "wrap", gap: "10px"}}
            >
              {words.map((word, index) => (
                <motion.span key={index} variants={item}>
                  <Title mt={30} size={50} maw={500}>
                    {word}
                  </Title>
                </motion.span>
              ))}
            </motion.div>
            <Text mt={40} maw={400}>
              Join with us in fostering skill development and community-driven
              innovation to address societal challenges using cutting-edge
              digital tools. Together, let's build a brighter future.
            </Text>
          </Box>
          <Image src={illustrationIntro} alt="" />
        </Group>
      </Paper>
    </Box>
  );
};

export default Banner;
