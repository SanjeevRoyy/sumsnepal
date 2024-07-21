import React, { useRef } from "react";
import ujjwalp from "/assets/Ujjwal.jpg";
import manishp from "/assets/manish.png";
import rajp from "/assets/raj.jpg";
import { Box, Group, Image, Paper, Text } from "@mantine/core";
import { inView, motion } from "framer-motion";

const Teams = () => {
  const textref = useRef(null);
  const isTextInView = inView(textref, { once: true });
  const teamdata = [
    {
      img: ujjwalp,
      name: "Manish Khadka",
      position: "CEO",
    },
    {
      img: manishp,
      name: "Ujjwal Dahal",
      position: "COO",
    },
    {
      img: rajp,
      name: "Rajkumar Shrestha",
      position: "CTO",
    },
  ];
  return (
    <>
      <motion.div
        ref={textref}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isTextInView ? 1 : 0, x: isTextInView ? 0 : -100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Text ta="center" mt={200} size="50px">
          Meet the brains
        </Text>
      </motion.div>
      <Text mt={20} c="#737373" ta="center">
        Meet our outstanding team - a synergy of talent, creativity, and
        dedication, crafting success together.
      </Text>
      <Paper mt={30}>
        <Group justify="center" gap={80}>
          {teamdata.map((item, index) => {
            return (
              <Group key={index}>
                <Image radius="50%" h={100} src={item.img} />
                <Box>
                  <Text fw={600}>{item.name} </Text>
                  <Text>{item.position}</Text>
                </Box>
              </Group>
            );
          })}
        </Group>
      </Paper>
    </>
  );
};

export default Teams;
