import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { Box, Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useRef } from "react";
import work from "/assets/cogimg9.png";
import { useInView, motion } from "framer-motion";

const DigitalTools = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const textref = useRef(null);
  const isTextInView = useInView(textref, { once: true });

  return (
    <>
      <Flex
        direction={isMobile ? "column" : "row"}
        p={40}
        justify="space-between"
      >
        <Box>
          <motion.div
            ref={textref}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: isTextInView ? 1 : 0,
              x: isTextInView ? 0 : -100,
            }}
            transition={{ duration: 1 }}
          >
            <Text size="50px">Digital Tools</Text>
          </motion.div>
          <Text c="#737373" size="20px" mt={30}>
            Revolutionizing with Integrated Digital Tools
          </Text>
          <Text c="#737373" maw={450} mt={40}>
            Our groundbreaking digital platform seamlessly integrates Learning
            Management Systems (LMS), project management, skill assessment, and
            real-life industry projects to provide a comprehensive learning
            experience for students worldwide. With a focus on collaboration,
            innovation, and real-world application, It empowers one to excel in
            their academic and professional endeavors.
          </Text>
          <Flex mt={20} gap={10} align="top">
            <CloudArrowUpIcon height={25} color="#EA580C " />
            <Text c="#737373" maw={400}>
              <span style={{ fontWeight: 600, color: "black" }}>
                {" "}
                Skill Based Learning Management System{" "}
              </span>{" "}
              A software application that enables educators to create, manage,
              and deliver immersive educational content . It provides features
              such as course creation, assessment, tracking, and communication
              tools for both educators and learners.
            </Text>
          </Flex>
          <Flex mt={20} gap={10} align="top">
            <LockClosedIcon height={25} color="#EA580C " />
            <Text c="#737373" maw={400}>
              <span style={{ fontWeight: 600, color: "black" }}>
                {" "}
                360 Degree Skill Assessment
              </span>{" "}
              The evaluation of an individual's competencies, knowledge, and
              abilities in a particular subject or area. Skill assessment
              methods may include tests, quizzes, practical demonstrations, and
              performance evaluations to measure proficiency levels.
            </Text>
          </Flex>
          <Flex mt={20} gap={10} align="top">
            <ServerIcon height={25} color="#EA580C " />
            <Text c="#737373" maw={400}>
              <span style={{ fontWeight: 600, color: "black" }}>
                {" "}
                Industry Real Life Projects to Students
              </span>{" "}
              Collaborative projects between educational institutions and
              industry partners that provide students with hands-on experience
              and exposure to real-world challenges. These projects aim to
              bridge the gap between academic learning and industry demands by
              offering practical, industry-relevant experiences.
            </Text>
          </Flex>
          <Flex mt={20} gap={10} align="top">
            <ServerIcon height={25} color="#EA580C " />
            <Text c="#737373" maw={400}>
              <span style={{ fontWeight: 600, color: "black" }}>
                {" "}
                Supporting academia to develop quality content
              </span>{" "}
              Collaborating with local academia in their curriculum development
              with researches and contents.
            </Text>
          </Flex>
        </Box>
        <Box pos="sticky" top={80} style={{ height: "80vh" }}>
          <Image height={450} src={work} radius="xl" withPlaceholder />
        </Box>
      </Flex>
    </>
  );
};

export default DigitalTools;
