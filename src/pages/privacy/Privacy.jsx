import { Text, Title, List, Paper, Group } from "@mantine/core";
import React from "react";

const Privacy = () => {
  return (
    <Paper p={50}>
      <Title size="h2">Privacy and Security Commitment by Sums</Title>
      <List mt={20} withPadding>
        <List.Item>
          <Group align="baseline" gap={2}>
            <Text fw={700}>Compliance with Data Privacy Laws:</Text>
            <Text>
              Strict adherence to data privacy laws and regulations of each
              respective country in accordance with their constitution.
            </Text>
          </Group>
        </List.Item>

        <List.Item>
          <Group align="baseline" gap={2}>
            <Text mt={10} fw={700}>
              Strong Security Measures:
            </Text>
            <Text>
              Implementation of strong security measures to protect personal
              information and data of students and educational partners.
            </Text>
          </Group>
        </List.Item>

        <List.Item>
          <Group align="baseline" gap={2}>
            <Text mt={10} fw={700}>
              Industry-Standard Encryption:
            </Text>
            <Text>
              Use of industry-standard encryption protocols to safeguard data
              transmissions and storage.
            </Text>
          </Group>
        </List.Item>

        <List.Item>
          <Group align="baseline" gap={2}>
            <Text mt={10} fw={700}>
              User Identity Verification:
            </Text>
            <Text>
              Robust system for verifying user identities to ensure only
              authorized individuals can access sensitive information.
            </Text>
          </Group>
        </List.Item>

        <List.Item>
          <Group align="baseline" gap={2}>
            <Text mt={10} fw={700}>
              Regular Security Audits:
            </Text>
            <Text>
              Conducts regular security audits to identify and address any
              potential vulnerabilities proactively.
            </Text>
          </Group>
        </List.Item>

        <List.Item>
          <Group align="baseline" gap={2}>
            <Text mt={10} fw={700}>
              Privacy and Security Investment:
            </Text>
            <Text>
              Continual investment in maintaining the highest standards of
              security to ensure users feel secure.
            </Text>
          </Group>
        </List.Item>

        <List.Item>
          <Group align="baseline" gap={2}>
            <Text mt={10} fw={700}>
              Assurance to students and educational Priority on Privacy and
              Security:
            </Text>
            <Text>
              Assurance to students and educational partners that their privacy
              and security are a top priority for Sums.
            </Text>
          </Group>
        </List.Item>
      </List>
    </Paper>
  );
};

export default Privacy;
