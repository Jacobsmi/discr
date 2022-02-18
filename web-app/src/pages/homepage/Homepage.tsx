import "./Homepage.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useState } from "react";
import DrawerMenu from "../../components/DrawerMenu";

const Homepage = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <div className="Homepage">
      <DrawerMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="Homepage-Topbar">
        <h2>Discr</h2>
        <IconButton
          className="Homepage-Topbar-MenuIcon"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default Homepage;
