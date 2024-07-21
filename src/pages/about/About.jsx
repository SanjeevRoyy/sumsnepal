import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Image,
  List,
  Paper,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

const About = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        <Image src="img/about.jpg" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.5,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Title order={isMobile ? 3 : 1}>Know more about how we help!</Title>
          <Text>Know more about how we help!</Text>
        </div>
      </div>
      <Box p={40}>
        <Title mt={20}>About SUMS</Title>
        <Text c="dimmed" mt={20}>
          SUMS Nepal Private Limited is a pioneering company dedicated to
          empowering educational institutes by providing comprehensive learning
          tools, facilitating training and workshops, and fostering
          international project connections. Specializing in bridging local and
          international collaborations, SUMS Nepal serves as a facilitator for
          institutes looking to enhance their educational offerings and global
          exposure. The company excels in delivering cutting-edge learning
          solutions, offering tailored training programs, and seamlessly
          connecting institutes with diverse international projects.
        </Text>
      </Box>
      <Box p={40}>
        <Title mt={60} c="orange">
          Our Mission and Vision
        </Title>
        <Text mt={20}>
          To provide the highest quality services and support for our clients,
          in tune with its quality policy, objectives, and values.
        </Text>
        <Image mt={20} src="img/dream.jpg" />
        <List p={20} mt={20}>
          <List.Item c="dimmed">
            Prospective students by recruiting them to quality educational
            institutions worldwide through the common shared values of
            Integrity, Commitment, Fairness and Open Communication.
          </List.Item>
          <List.Item mt={10} c="dimmed">
            To become one of the most reputed and reliable names in Global
            Educational Industry and be recognized as the best in providing
            Career Guidance by upholding our integrity, professionalism and be
            innovation in our services.
          </List.Item>
        </List>
      </Box>
      <Box p={40}>
        <Title mt={30}>Why SUMS ?</Title>

        <Text mt={30}>
          We understand that good English proficiency is extremely important for
          Nepalese students for abroad further study so we are providing IELTS
          and PTE classes for our students at a reasonable price with a foreign
          expert advisor (more than 18 years of experience) along with the
          necessary materials required by the student in an ambition to become
          an international student.
        </Text>
      </Box>

      <Flex
        direction={isMobile ? "column" : "row"}
        bg="whitesmoke"
        justify="center"
        mt={100}
        gap={isMobile ? 40 : 80}
        p={20}
      >
        <Box mt={10}>
          <Title ta="center">GET IN TOUCH </Title>
          <Title size="h3" ta="center">
            WITH OUR EXPERTS
          </Title>

          <Box>
            <Text mt={10}>EDU HUB Education Foundation Pvt. Ltd.</Text>
            <Text mt={10}>ANTA Complex - 3rd Floor Jawalakhel, Lalitpur</Text>
            <Text mt={10}>01-5425388 | 01-5446454 | 9851125388</Text>
          </Box>
        </Box>
        <Box>
          <Text>Full Name</Text>
          <TextInput placeholder="Enter your Name" />
          <Text mt={10}>E-mail Address</Text>
          <TextInput placeholder="Enter your E-mail" />
          <Text mt={10}>Phone Number</Text>
          <TextInput placeholder="Enter your phone number" />
          <Text mt={10}>Message Us</Text>
          <Textarea placeholder="Enter message here" />
          <Center>
            <Button bg="orange" mt={10}>
              Submit
            </Button>
          </Center>
        </Box>
      </Flex>
    </>
  );
};

export default About;
