import React from "react";
import { Box, Center, Flex, Paper, Text, Title } from "@mantine/core";

const packages = [
  {
    title: "STARTER*",
    price: "RS 49/month/User",
    features: [
      "Learning Management System",
      "unlimited courses",
      "creation and delivery Unlimited assignments creation and assessments (Individual and Group)",
      "Skills assessments Calendar",
      "Unlimited access to (Local and Internal) projects, virtual mobilities and internships",
      "course creation",
      "consultation support session/course",
      "Standard technical support (within 2–3 working days)",
    ],
  },
  {
    title: "PRO*",
    price: "RS 89/month/User",
    features: [
      "All in STARTER, and",
      "Video Call",
      "Limited access to (International) projects, virtual mobilities and virtual internships",
      "Pre-Incubation services, max. 8 teams/year included",
      "Design thinking workshops",
      "Idea Discovery",
      "Idea Validation",
      "MVP Ideation",
      "2 course creation consultation support sessions/course",
      "Limited group career counselling and guidance sessions",
      "Limited access to new features and development",
      "Priority technical support (within 1 working day)",
    ],
  },
  {
    title: "PREMIUM*",
    price: "RS 129/month/User",
    features: [
      "All in PRO, and",
      "Priority access to new features and development",
      "Priority access to (International) projects, virtual mobilities and virtual internships",
      "Incubation and Mentoring services, max. 8 teams/year included",
      "MVP Development Prototyping",
      "Entrepreneurship coaching Investors",
      "International networking and opportunities",
      "Business establishment",
      "Unlimited individual career counselling and guidance sessions",
      "Unlimited course creation consultation support sessions",
      "Dedicated technical support (within 6–12 hours)",
    ],
  },
];

const Package = () => {
  return (
    <>
      <Title mt={30} size="h4" ta="center" color="#FDB36B">
        Packages
      </Title>
      <Center>
        <Box
          sx={{
            width: 100,
            height: 2,
            borderRadius: 2,
            marginTop: 10,
            marginBottom: 40,
            background: "linear-gradient(90deg, #FF8700, #FF5A00, #FF3000)",
          }}
        />
      </Center>
      <Flex wrap="wrap" justify="space-between" p={20} mt={50}>
        {packages.map((pkg, index) => (
          <Paper
            style={{ border: "3px solid #FF7B01", width: "30%"  }}
            shadow="md"
            radius={50}
            mt={20}
            key={index}
            withBorder
            p={40}
          >
            <Title ta="center" size="h5" color="#FF8700">
              {pkg.title}
            </Title>
            <Box
              mt={10}
              mb={20}
              height={2}
              bg="linear-gradient(90deg, #FF8700, #FF5A00, #FF3000)"
              borderRadius={2}
            ></Box>
            <ul>
              {pkg.features.map((feature, i) => (
                <li key={i}>
                  <Text ta="left" size="sm" c="dimmed" mt={10}>
                    {feature}
                  </Text>
                </li>
              ))}
            </ul>
            <Center>
              <Text ta="center" fw={700} size="lg" mt={20} c="#FF8700">
                {pkg.price}
              </Text>
            </Center>
          </Paper>
        ))}
      </Flex>
    </>
  );
};

export default Package;
