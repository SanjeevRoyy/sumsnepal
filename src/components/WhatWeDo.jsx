import { Flex, Group, Paper, Text } from "@mantine/core";
import React from "react";
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";

const WhatWeDo = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Text ta="center" mt={50} size="50px">
        What <span style={{ color: "#F67116" }}>We</span>{" "}
        <span style={{ color: "#BA4913" }}>Do</span>
      </Text>

      <Flex
        direction={isMobile ? "column" : "row"}
        mt={30}
        justify="space-between"
      >
        <Paper p={isMobile ? 20 : 40}>
          <Group>
            <BotMessageSquare color="orange" />
            <Text size="20px">Cultivating Tech Innovation:</Text>
          </Group>
          <Text c="#737373" p={40} maw={800}>
            SUMS develop cutting-edge software to enhance educational
            experiences and foster creativity among students with immersive
            learnings.
          </Text>
        </Paper>
        <Paper p={20}>
          <Group>
            <Fingerprint color="orange" />
            <Text size="20px">Empowering Future Entrepreneurs :</Text>
          </Group>
          <Text c="#737373" p={40} maw={800}>
            SUMS provide guidance, resources, workshops, trainings and networks
            for aspiring entrepreneurs, helping them navigate startup challenges
            and bring innovations to market.
          </Text>
        </Paper>
      </Flex>
      <Flex
        direction={isMobile ? "column" : "row"}
        mt={30}
        justify="space-between"
      >
        <Paper p={isMobile ? 20 : 40}>
          <Group gap={10} align="top">
            <ShieldHalf color="orange" />
            <Text maw={isMobile ? 300 : 600} size={isMobile ? "20px" : "20px"}>
              Supporting Tech Entrepreneurship Ecosystems:
            </Text>
          </Group>
          <Text c="#737373" p={40} maw={800}>
            SUMS create platforms for networking and collaboration, connecting
            entrepreneurs, investors, and experts.,
          </Text>
        </Paper>
        <Paper p={20}>
          <Group>
            <BatteryCharging color="orange" />
            <Text maw={isMobile ? 300 : 600} size="20px">
              Facilitating Tech Skill Development :
            </Text>
          </Group>
          <Text c="#737373" p={40} maw={800}>
            SUMS offer training and learning opportunities to equip learners
            towards service and product development for aspiring innovative
            minds
          </Text>
        </Paper>
      </Flex>
    </>
  );
};

export default WhatWeDo;
