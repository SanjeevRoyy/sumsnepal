import { Box, Flex, Group, Image, Text } from "@mantine/core";
import React, { useRef } from "react";
import codeImg from "/assets/incub.png";
import { CheckCircle2 } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";
import { motion, useInView } from "framer-motion";

const Academia = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const boxRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const isImageInView = useInView(imageRef, { once: true });
  const isBoxInView = useInView(boxRef, { once: true });

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
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: isTextInView ? 1 : 0,
            x: isTextInView ? 0 : -100,
          }}
          transition={{ duration: 1 }}
        >
          <Text ta="center" size="50px">
            Accelerate your Academia with QA with respect to{" "}
            <span style={{ color: "#F46F15" }}>U</span>
            <span style={{ color: "#D25914" }}>G</span>
            <span style={{ color: "#AA3F13" }}>C</span>
          </Text>
        </motion.div>
      </Box>
      <Flex
        p={20}
        direction={isMobile ? "column" : "row"}
        align="center"
        gap={100}
        justify="center"
      >
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: isImageInView ? 1 : 0,
            y: isImageInView ? 0 : -50,
          }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image w={isMobile ? 300 : 700} src={codeImg} alt="Coding" />
        </motion.div>
        <Box ref={boxRef}>
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isBoxInView ? 1 : 0,
                y: isBoxInView ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 1.0 * index }}
            >
              <Group>
                <CheckCircle2 color="orange" />
                <Text size="20px">{item.title}</Text>
              </Group>
              <Text c="#737373" p={40}>
                {item.description}
              </Text>
            </motion.div>
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default Academia;
