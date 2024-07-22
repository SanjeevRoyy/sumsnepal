import { Box, Button, Flex, Group, Paper, Text, Title } from "@mantine/core";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import lottieimg from "../lottie/lottie.json";

const HeroSection = () => {
  return (
    <Paper bg="#FDBA74">
      <Flex p={20} justify="space-between">
        <Box p={80}>
          <Text size="50px">Best Online Platform For Education.</Text>
          <Text mt={20}>
            Online courses from the world's leading experts. Join 17 million
            learners today.
          </Text>
          <Group mt={40}>
            <Button leftSection={<FaRegThumbsUp />}> Get Started</Button>
            <Button variant="transparent" color="white" leftSection={<GoVideo />}> How It Works</Button>
          </Group>
        </Box>
        <Lottie
          style={{ mixBlendMode: "multiply" }}
          animationData={lottieimg}
        />
      </Flex>
    </Paper>
  );
};

export default HeroSection;
