import { Box, Flex, Image, Text } from "@mantine/core";
import React from "react";
import {Routes} from 'react-router-dom'

const Footer = () => {
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

            <Text>Meet the Team</Text>

            <Text>History</Text>

            <Text>Careers</Text>
          </Flex>

          <Flex direction="column" gap={10}>
            <Text fw="bold">Services</Text>

            <Text>Preincubation</Text>

            <Text>Incubation</Text>

            <Text>Hackathon</Text>

            <Text>Test Bed</Text>
          </Flex>

          <Flex direction="column" gap={10}>
            <Text fw="bold">Helpful Links</Text>

            <Text>Contact</Text>

            <Text>FAQs</Text>

            <Text>Live Chat</Text>
          </Flex>

          <Flex direction="column" gap={10}>
            <Text fw="bold">Legal</Text>

            <Text>Privacy Policy</Text>

            <Text>Terms & Conditions</Text>

            <Text>Returns Policy</Text>

            <Text>Accessibility</Text>
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
