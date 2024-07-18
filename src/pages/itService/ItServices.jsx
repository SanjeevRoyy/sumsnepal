import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

const ItServices = () => {
  const services = [
    {
      img: "img/international.jpg",
      name: "Local & International Projects",
      description:
        "Facilitating connections between educational institutes and diverse international projects to enhance global exposure and collaboration.",
    },
    {
      img: "img/presentation.png",
      name: "Skill Assessment",
      description:
        "Offering comprehensive skill assessment tools to evaluate and enhance students' capabilities, ensuring they meet global standards.",
    },
    {
      img: "img/training.jpg",
      name: "Trainings",
      description:
        "Providing tailored training programs designed to equip educators and students with the latest knowledge and skills needed to excel.",
    },
    {
      img: "img/mentor.jpg",
      name: "Mentors & Tutors",
      description:
        "Connecting institutes with experienced mentors and tutors to guide and support students in their academic and professional journeys.",
    },
    {
      img: "img/counselling.jpg",
      name: "Career Roadmap & Counselling",
      description:
        "Offering personalized career counseling and roadmap planning to help students navigate their future paths effectively.",
    },
    {
      img: "img/team.jpg",
      name: "Multidisciplinary Team",
      description:
        "Leveraging a diverse team of experts to provide comprehensive solutions and support across various educational disciplines.",
    },
    {
      img: "img/workshop.jpg",
      name: "Workshops",
      description:
        "Conducting workshops that foster innovation, collaboration, and hands-on learning experiences for students and educators.",
    },
    {
      img: "img/international.jpg",
      name: "LMS",
      description:
        "Delivering cutting-edge Learning Management Systems (LMS) to streamline educational processes and enhance learning outcomes.",
    },
  ];

  return (
    <>
      <Title c="#FDB36B" fw={600} mt={30} size="h4" ta="center">
        OUR SERVICES
      </Title>
      <Title mt={20} size="h1" ta="center">
        Services We Provide
      </Title>
      <Center>
        <Text p={20} maw={600} c="dimmed" mt={10}>
          SUMS Nepal Private Limited is committed to enhancing the educational
          experience by offering a range of services designed to meet the needs
          of academic institutes.
        </Text>
      </Center>

      <Flex wrap="wrap" gap={10} justify="center" p={20} mt={50}>
        {services.map((item, index) => {
          return (
            <Paper
              style={{ border: "1px solid #FDB36B" }}
              shadow="md"
              radius={10}
              mt={20}
              maw={300}
              key={index}
              withBorder
              p={20}
            >
              <Center>
                <Image src={item.img} h={100} />
              </Center>
              <Text mt={10} ta="center">
                {item.name}
              </Text>
              <Text ta="center" size="sm" c="dimmed" maw={280} mt={10}>
                {item.description}
              </Text>
              <Center>
                <Button c="black" bg="#FDBA74" mt={20}>
                  Read More{" "}
                </Button>
              </Center>
            </Paper>
          );
        })}
      </Flex>
    </>
  );
};

export default ItServices;
