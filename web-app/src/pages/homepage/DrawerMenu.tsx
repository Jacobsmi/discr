import {
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface DrawerMenuProps {
  isDrawerOpen: boolean;
  onDrawerClose: () => void;
}

const DrawerMenu = ({ isDrawerOpen, onDrawerClose }: DrawerMenuProps) => {
  return (
    <Drawer isOpen={isDrawerOpen} onClose={() => onDrawerClose()}>
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Welcome to Discr</DrawerHeader>
        <Divider />
        <Link style={{ padding: "1rem", fontWeight: "500" }} to="/about">
          About
        </Link>
        <Divider />
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
