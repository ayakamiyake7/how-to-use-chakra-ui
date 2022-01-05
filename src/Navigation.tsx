import { Link, Stack } from "@chakra-ui/react";
import React from "react";

const HoverLink = (props: any) => (
  <Link rounded="base" _hover={{ bg: "gry.200" }} p={2} {...props} />
);

const Navigation = () => {
  return (
    <Stack as="nav">
      <HoverLink href="/burger">Burger</HoverLink>
      <HoverLink href="/sidemenu">Sidemenu</HoverLink>
    </Stack>
  );
};

export default Navigation;
