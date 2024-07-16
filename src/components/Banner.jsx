import { Box, Group, Image, Paper, Text, Title } from "@mantine/core";
import React from "react";
import illustrationIntro from "/assets/illustration-intro.svg";

const Banner = () => {
  return (
    <>
      <Paper mt={60} bg="#FDBA74" p={20}>
        <Group justify="space-between" align="top">
          <Box>
            <Title mt={30} size={50} maw={500}>
              Towards Innovation In Education
            </Title>
            <Text mt={40} maw={400}>
              Join with us in fostering skill development and community-driven
              innovation to address societal challenges using cutting-edge
              digital tools. Together, let's build a brighter future."
            </Text>
          </Box>
          <Image src={illustrationIntro} alt="" />
        </Group>
      </Paper>
    </>
  );
};

export default Banner;
