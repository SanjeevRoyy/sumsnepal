import React from "react";
import sagarmatha from "/assets/sagarmathalogo.png";
import Cogknit from "/assets/cogknitlogo.png";
import nepbigyapan from "/assets/neplogo.png";
import uzizu from "/assets/uzizulogo.png";
import { Flex, Image, Paper, Text } from "@mantine/core";
import Marquee from "react-fast-marquee";
import LazyLoad from "react-lazyload";

const Brand = () => {

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
      <Text p={10} ta="center" mt={50} size="50px">
        Accompained by the most innovative teams
      </Text>
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
