import { Box, Flex, Group, Image, Text } from "@mantine/core";
import React from "react";
import codeImg from "/assets/incub.png";
import { CheckCircle2 } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";

const Academia = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const checklistItems = [
    {
      title: "Pre-Incubation: Ideas to MVP",
      description:
        "Transform ideas into viable product/services through workshops, mentorship, and access to resources.",
    },

    {
      title: "Test Bed: MVP to Customer Case",
      description:
        " Bridge theory and practice with a state-of-the-art environment for experimenting, prototyping, and testing ideas using cutting-edge technology.",
    },

    {
      title: "Events: Validation to Investment",
      description:
        "Spark creativity and collaboration through themed hackathons and tech summits, connecting innovators and stake-holder in a single platform with proven tests and validation .",
    },
    {
      title: "Incubation: MVP to Market",
      description:
        "Provide an ecosystem, workshops, trainings, resources supporting  to introduce in the market after TESTBED.  ",
    },
  ];
  return (
    <>
      <Box p={40}>
        <Text ta="center" size="50px">
          Accelerate your Academia with QA with respect to{" "}
          <span style={{ color: "#F46F15" }}>U</span>
          <span style={{ color: "#D25914" }}>G</span>
          <span style={{ color: "#AA3F13" }}>C</span>
        </Text>
      </Box>
      <Flex
        p={20}
        direction={isMobile ? "column" : "row"}
        align="center"
        gap={40}
      >
        <Image h={400} src={codeImg} alt="Coding" />
        <Box>
          {checklistItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Group>
                  <CheckCircle2 color="orange" />
                  <Text size="20px">{item.title}</Text>
                </Group>
                <Text c="#737373" p={40}>
                  {item.description}
                </Text>
              </React.Fragment>
            );
          })}
        </Box>
      </Flex>
    </>
  );
};

export default Academia;
