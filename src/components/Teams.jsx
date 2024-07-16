import React from "react";
import ujjwalp from "/assets/Ujjwal.jpg";
import manishp from "/assets/manish.png";
import rajp from "/assets/raj.jpg";
import { Box, Group, Image, Paper, Text } from "@mantine/core";

const Teams = () => {
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
      <Text ta="center" mt={200} size="50px">
        Meet the brains
      </Text>
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
