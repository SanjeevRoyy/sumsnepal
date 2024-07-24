import {
  Anchor,
  Button,
  Burger,
  Group,
  Image,
  Drawer,
  Stack,
  Menu,
  Text,
  Box,
  Divider,
  Paper,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "@mantine/hooks";
import { FaChevronDown } from "react-icons/fa";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [opened, { toggle, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [navbarBg, setNavbarBg] = useState("#FDBA74");

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.getElementById("hero-section")?.clientHeight || 0;
      if (window.scrollY > heroSectionHeight) {
        setNavbarBg("white");
      } else {
        setNavbarBg("#FDBA74");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const asolutions = [
    {
      name: "Preincubation",
      description: "Idea to MVP",
      href: "preincubation",
      icon: ChartPieIcon,
    },
    {
      name: "Incubation",
      description: "MVP to Market",
      href: "Incubation",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Events/Hacathon",
      description: "Creativity and Collaboration",
      href: "Events",
      icon: FingerPrintIcon,
    },
    {
      name: "Test Bed",
      description: "Image idea to MVP",
      href: "testbed",
      icon: SquaresPlusIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
  ];

  return (
    <>
      <Group
        style={{
          zIndex: 1,
          background: navbarBg,
          transition: "background 0.3s",
        }}
        pos="sticky"
        top={0}
        p={20}
        justify="space-between"
      >
        <Link to="/">
          <Image w={100} src="assets/logo.png" />
        </Link>
        {!isMobile && (
          <Group gap={50}>
            <Menu radius={"lg"} shadow="md" width={400}>
              <Menu.Target>
                <Button
                  variant="transparent"
                  rightSection={<FaChevronDown />}
                  fw={600}
                  target="_blank"
                  c="black"
                >
                  Academia
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                {asolutions.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Menu.Item
                      style={{ display: "flex", alignItems: "center" }}
                      key={index}
                    >
                      <Group gap={30}>
                        <Paper p={8} bg="whitesmoke">
                          <Icon
                            color="#718096"
                            height={25}
                            className="icon-class"
                          />
                        </Paper>
                        <Box>
                          <Text>{item.name}</Text>
                          <Text size="sm" c="dimmed">
                            {item.description}
                          </Text>
                        </Box>
                      </Group>
                    </Menu.Item>
                  );
                })}

                <Group p={10} gap={30} mt={20} justify="center">
                  {callsToAction.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Button color="black" variant="subtle" key={index}>
                        <Icon height={20} className="icon-class" />
                        <Text>{item.name}</Text>
                      </Button>
                    );
                  })}
                </Group>
              </Menu.Dropdown>
            </Menu>

            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/industries"
            >
              Industries
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/itservices"
            >
              IT Services
            </Link>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/about"
            >
              About
            </Link>
          </Group>
        )}
        {isMobile && <Burger opened={opened} onClick={toggle} />}
        {!isMobile && (
          <Button
            onClick={() => navigate("/package")}
            c="black"
            bg="linear-gradient(to right, rgb(253, 183, 112), rgb(249, 118, 26))"
          >
            Request for Workshop
          </Button>
        )}
      </Group>

      <Drawer
        opened={opened}
        onClose={close}
        // title="Menu"
        padding="xl"
        size="md"
      >
        <Stack spacing={20} align="center">
          <Menu radius={"lg"} shadow="md" width={350}>
            <Menu.Target>
              <Button
                variant="transparent"
                rightSection={<FaChevronDown />}
                fw={600}
                target="_blank"
                c="black"
              >
                Academia
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              {asolutions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Menu.Item
                    style={{ display: "flex", alignItems: "center" }}
                    key={index}
                  >
                    <Group gap={30}>
                      <Paper p={8} bg="whitesmoke">
                        <Icon
                          color="#718096"
                          height={25}
                          className="icon-class"
                        />
                      </Paper>
                      <Box>
                        <Text>{item.name}</Text>
                        <Text size="sm" c="dimmed">
                          {item.description}
                        </Text>
                      </Box>
                    </Group>
                  </Menu.Item>
                );
              })}

              <Group p={10} gap={30} mt={20} justify="center">
                {callsToAction.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Button color="black" variant="subtle" key={index}>
                      <Icon height={20} className="icon-class" />
                      <Text>{item.name}</Text>
                    </Button>
                  );
                })}
              </Group>
            </Menu.Dropdown>
          </Menu>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/industries"
            onClick={close}
          >
            Industries
          </Link>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/itservices"
            onClick={close}
          >
            IT Services
          </Link>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/about"
            onClick={close}
          >
            About
          </Link>
          <Button
            c="black"
            bg="linear-gradient(to right, rgb(253, 183, 112), rgb(249, 118, 26))"
            onClick={close}
          >
            Request for Workshop
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
