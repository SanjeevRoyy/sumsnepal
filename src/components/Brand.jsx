import React, { useRef } from "react";
import sagarmatha from "/assets/sagarmathalogo.png";
import Cogknit from "/assets/cogknitlogo.png";
import nepbigyapan from "/assets/neplogo.png";
import uzizu from "/assets/uzizulogo.png";
import { Flex, Image, Paper, Text } from "@mantine/core";
import Marquee from "react-fast-marquee";
import LazyLoad from "react-lazyload";
import { useInView, motion } from "framer-motion";

const Brand = () => {
  const textref = useRef(null);
  const isTextInView = useInView(textref, { once: true });

  const brands = [
    {
      img: sagarmatha,
    },
    {
      img: Cogknit,
    },
    {
      img: nepbigyapan,
    },
    {
      img: uzizu,
    },
  ];
  return (
    <>
      <motion.div
        ref={textref}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isTextInView ? 1 : 0, x: isTextInView ? 0 : -100 }}
        transition={{ duration: 1 }}
      >
        <Text p={10} ta="center" mt={50} size="50px">
          Accompained by the most innovative teams
        </Text>
      </motion.div>
      <Marquee speed={80} pauseOnHover={false}>
        <LazyLoad height={200} once>
          <Flex mt={50} gap={60}>
            {brands.map((item, index) => {
              return <Image h={50} src={item.img} alt="Brand Logo" />;
            })}
          </Flex>
        </LazyLoad>
      </Marquee>
    </>
  );
};

export default Brand;
