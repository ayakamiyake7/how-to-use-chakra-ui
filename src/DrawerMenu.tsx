import { Button, MenuButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { IconButton } from "@chakra-ui/react";
import React from "react";

const DrawerMenu = () => {
  const { onOpen } = useDisclosure();
  const btnref = React.useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Button ref={btnref} onClick={onOpen}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
      </Button>
    </div>
  );
};

export default DrawerMenu;
