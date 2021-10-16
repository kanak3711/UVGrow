import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" ,backgroundColor:"#87d1d3" }}>
      <Link route="/">
        <a className="item"style={{ color:"white",backgroundColor:"#22a783 " ,fontSize:"30px" }} >UVGrow</a>
      </Link>
      
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item" style={{ color:"white",backgroundColor:"#22a783 " ,fontSize:"20px" }}> Local Business</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
