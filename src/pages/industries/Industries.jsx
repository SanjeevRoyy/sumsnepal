import React from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Paper,
  Text,
  Title,
} from "@mantine/core";

const benefits = [
  {
    img: "img/international.jpg",
    title: "Local and International Projects",
    description:
      "Connect students with Local and International projects aligning with their curriculum.",
  },
  {
    img: "img/team.jpg",
    title: "Multidisciplinary Team",
    description:
      "Integrate the diverse national and international students’ team to execute the project assigned as per their interests and needs.",
  },
  {
    img: "img/workshop.jpg",
    title: "Workshops",
    description:
      "Provide the real-life workshops required in the real life reflecting the international competences.",
  },
  {
    img: "img/lms.jpg",
    title: "LMS",
    description:
      "Provide Learning Management Tools that includes Courses, Videos, Assignments, Video calls, projects, project management tools, Forum, Calendar and many more to come.",
  },
  {
    img: "img/training.jpg",
    title: "Trainings",
    description:
      "Offer insights into the real-world context of the project, helping students understand how their work contributes to broader goals via trainings and develop their competences for future.",
  },
  {
    img: "img/mentor.jpg",
    title: "Mentors",
    description:
      "Provide students with access to mentors and tutors who would support them for guidance in their respective goals.",
  },
  {
    img: "img/counselling.jpg",
    title: "Career Roadmap & Counselling",
    description:
      "Use AI via engagement in order to develop a potential career roadmap and provide tailored recommendations as well as individual career counselling.",
  },
  {
    img: "img/training.jpg",
    title: "Skill Assessment",
    description:
      "Provide constructive feedback on the students' work throughout the academic lifecycle and bring their tailored skills via various assessment.",
  },
];
const teacherbenefits = [
  {
    img: "img/international.jpg",

    title: "Tutoring Space",
    description:
      "Connecting teachers with students where they can tutor developing a virtual class in the platform.",
  },
  {
    img: "img/team.jpg",
    title: "Resource Accessibility",
    description:
      "Offering a wealth of educational resources, including lesson plans, multimedia content, making it easier for teachers to access diverse and engaging materials.",
  },
  {
    img: "img/workshop.jpg",
    title: "Time Efficiency",
    description:
      "Automate administrative tasks, such as grading and attendance tracking, freeing up more time for teachers to focus on instructional planning, student engagement, and individualized support.",
  },
  {
    img: "img/lms.jpg",
    title: "Collaborative Platform",
    description:
      "Facilitates collaboration among teachers by providing video conferencing tools for sharing best practices, resources, and lesson plans. This collaborative environment fosters a sense of community and shared expertise.",
  },
  {
    img: "img/training.jpg",
    title: "Professional Training",
    description:
      "Provide professional development opportunities for teachers, offering training modules, webinars, and workshops to enhance their technology skills and instructional strategies.",
  },
  {
    img: "img/mentor.jpg",
    title: "Data-Driven Insights",
    description:
      "Generate valuable data on student performance and engagement. Teachers can use these insights to identify areas of improvement, track progress, and tailor their instructional approaches to better meet student needs.",
  },
  {
    img: "img/counselling.jpg",
    title: "Communication Tools",
    description:
      "Includes communication features such as messaging systems or forums, allowing teachers to easily communicate with students, parents, and colleagues to share updates, feedback, and important information.",
  },
  {
    img: "img/training.jpg",
    title: "Remote and Blended Learnings",
    description:
      "Supports remote and blended learning, enabling teachers to deliver content, engage students, and assess learning outcomes regardless of physical location.",
  },
];
const administration = [
  {
    img: "img/international.jpg",
    title: "Students Performance",
    description:
      "Centralized management of students’ data, including enrolment, attendance, grades, and other relevant information.",
  },
  {
    img: "img/team.jpg",
    title: "Teachers Performance",
    description:
      "Centralized management of teachers’ data, including enrolment, attendance, performance, grades, and other relevant information.",
  },
  {
    img: "img/workshop.jpg",
    title: "Department Monitoring",
    description:
      "Monitor course progress, track student engagement, and access analytics for continuous improvement.",
  },
  {
    img: "img/training.jpg",
    title: "Calendar & Announcements",
    description:
      "Administration can plan all the events in Calendar as well as schedule the whole department.",
  },
];

const Industries = () => {
  return (
    <>
      <Title mt={30} size="h4" ta="center" color="#FDB36B">
        Benefits for Students
      </Title>
      <Center>
        <Box
          style={{
            width: 100,
            height: 7,
            borderRadius: 2,
            marginTop: 10,
            marginBottom: 40,
            background: "linear-gradient(90deg, #FF8700, #FF5A00, #FF3000)",
          }}
        />
      </Center>
      <Flex wrap="wrap" justify="center" gap={40} p={20} mt={50}>
        {benefits.map((benefit, index) => (
          <Paper w="30%" shadow="md" radius={10} mt={20} key={index} p={20}>
            <Center>
              <Image src={benefit.img} height={100} fit="contain" />
            </Center>
            <Text mt={10} fw={600} ta="center">
              {benefit.title}
            </Text>
            <Center>
              <Box
                style={{
                  width: 50,
                  height: 7,
                  borderRadius: 2,
                  marginTop: 10,
                  marginBottom: 40,
                  background:
                    "linear-gradient(90deg, #FF8700, #FF5A00, #FF3000)",
                }}
              />
            </Center>
            <Text ta="center" size="sm" color="dimmed" mt={10}>
              {benefit.description}
            </Text>
          </Paper>
        ))}
      </Flex>

      {/* for teachers  */}
      <Title mt={50} size="h4" ta="center" color="#FDB36B">
        Benefits for Teachers
      </Title>
      <Center>
        <Box
          style={{
            width: 100,
            height: 7,
            borderRadius: 2,
            marginTop: 10,
            marginBottom: 40,
            background: "linear-gradient(90deg, #FF8700, #FF5A00, #FF3000)",
          }}
        />
      </Center>
      <Flex wrap="wrap" justify="center" gap={40} p={20} mt={50}>
        {teacherbenefits.map((benefit1, index1) => (
          <Paper
            w="30%"
            // style={{ border: "1px solid #FDB36B", width: "30%" }}
            shadow="md"
            radius={10}
            mt={20}
            key={index1}
            // withBorder
            p={20}
          >
            <Center>
              <Image src={benefit1.img} height={100} fit="contain" />
            </Center>
            <Text mt={10} fw={600} ta="center">
              {benefit1.title}
            </Text>
            <Center>
              <Box
                style={{
                  width: 50,
                  height: 7,
                  borderRadius: 2,
                  marginTop: 10,
                  marginBottom: 40,
                  background:
                    "linear-gradient(90deg, #FF8700, #FF5A00, #FF3000)",
                }}
              />
            </Center>
            <Text ta="center" size="sm" color="dimmed" mt={10}>
              {benefit1.description}
            </Text>
          </Paper>
        ))}
      </Flex>

      {/* administration  */}

      <Title mt={50} size="h4" ta="center" color="#FDB36B">
        Benefits for Administration
      </Title>
      <Center>
        <Box
          style={{
            width: 100,
            height: 7,
            borderRadius: 2,
            marginTop: 10,
            marginBottom: 40,
            background: "linear-gradient(90deg, #FF8700, #FF5A00, #FF3000)",
          }}
        />
      </Center>
      <Flex wrap="wrap" justify="space-between" p={20} mt={50}>
        {administration.map((administrationdata, index2) => (
          <Paper
            w="30%"
            // style={{ border: "1px solid #FDB36B", width: "30%" }}
            shadow="md"
            radius={10}
            mt={20}
            key={index2}
            // withBorder
            p={20}
          >
            <Center>
              <Image src={administrationdata.img} height={100} fit="contain" />
            </Center>
            <Text mt={10} fw={600} ta="center">
              {administrationdata.title}
            </Text>
            <Center>
              <Box
                style={{
                  width: 50,
                  height: 7,
                  borderRadius: 2,
                  marginTop: 10,
                  marginBottom: 40,
                  background:
                    "linear-gradient(90deg, #FF8700, #FF5A00, #FF3000)",
                }}
              />
            </Center>
            <Text ta="center" size="sm" color="dimmed" mt={10}>
              {administrationdata.description}
            </Text>
          </Paper>
        ))}
      </Flex>
    </>
  );
};

export default Industries;
