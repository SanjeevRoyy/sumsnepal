import { Box, Flex, Image, Text } from "@mantine/core";
import React from "react";
import { Routes, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box mt={60} bg="#FDB973" p={100}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify={{ sm: "space-between" }}
          gap={{ base: "xl", sm: "lg" }}
        >
          <Box>
            <Image
              w={120}
              src="https://sumsnepalofficial.vercel.app/assets/logo-CDRVwuDh.png"
            />
            <Text fw="bold">Shape your ideas into value</Text>
            <Text />
          </Box>

          <Flex direction="column" gap={10}>
            <Text fw="bold">Company</Text>
            <Text size="sm">Meet the Team</Text>
            <Text size="sm">History</Text>
            <Text size="sm">Careers</Text>
          </Flex>

          <Flex direction="column" gap={10}>
            <Text fw="bold">Services</Text>

            <Text size="sm">Preincubation</Text>

            <Text size="sm">Incubation</Text>

            <Text size="sm">Hackathon</Text>

            <Text size="sm">Test Bed</Text>
          </Flex>

          <Flex direction="column" gap={10}>
            <Text fw="bold">Helpful Links</Text>

            <Text size="sm">Contact</Text>

            <Text size="sm">FAQs</Text>

            <Text size="sm">Live Chat</Text>
          </Flex>

          <Flex direction="column" gap={10}>
            <Text fw="bold">Legal</Text>

            <Text onClick={() => navigate("/privacy")} size="sm">
              Privacy Policy
            </Text>

            <Text size="sm">Terms & Conditions</Text>

            <Text size="sm">Returns Policy</Text>

            <Text size="sm">Accessibility</Text>
          </Flex>
        </Flex>

        <Text ta="center" mt={50}>
          © 2024 SUMS Nepal
        </Text>
      </Box>
    </>
  );
};

export default Footer;
