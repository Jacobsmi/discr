import { Box, Divider, Drawer } from "@mui/material";
import { Link } from "react-router-dom";

export interface DrawerMenuProps {
  drawerOpen: boolean;
  setDrawerOpen: (isOpened: boolean) => void;
}

const DrawerMenu = ({ drawerOpen, setDrawerOpen }: DrawerMenuProps) => {
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Box
        sx={{
          width: "80vw",
        }}
      >
        <Link to="/about">About</Link>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
