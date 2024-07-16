// import { CheckCircle } from "tabler-icons-react";
import {
  Container,
  Title,
  Text,
  Grid,
  Image,
  Center,
  Box,
} from "@mantine/core";
import codeImg from "/assets/incub.png";
// import { checklistItems } from "../constants"

const Rough = () => {
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
          title: "Events/Hackathons: Validation to Investment",
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
    <Container mt="xl">
      <Title
        align="center"
        size="h1"
        mt="md"
        sx={(theme) => ({
          letterSpacing: theme.spacing.md,
          background: "linear-gradient(90deg, orange 500, orange 800)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        })}
      >
        Accelerate your Academia with QA with respect to{" "}
        <span
          style={{
            background: "linear-gradient(to right, orange 500, orange 800)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          UGC
        </span>
      </Title>
      <Grid justify="center" align="center">
        <Grid.Col xs={12} lg={6}>
          <Center>
            <Box mt={100}>
              <Image src={codeImg} alt="Coding" />
            </Box>
          </Center>
        </Grid.Col>
        <Grid.Col xs={12} lg={6}>
          <Box mt={50}>
            {checklistItems.map((item, index) => (
              <Box key={index} mb={40} display="flex" alignItems="center">
                <Center>
                  <Box
                    bg="orange"
                    mx={16}
                    height={40}
                    width={40}
                    p={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="50%"
                  >
                    {/* <CheckCircle size={24} color="white" /> */}
                  </Box>
                </Center>
                <Box>
                  <Title order={5} mt={2} mb={4}>
                    {item.title}
                  </Title>
                  <Text size="md" color="dimmed" align="justify">
                    {item.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Rough;
