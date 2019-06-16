import React from "react";
import { Menu, } from "semantic-ui-react";
import { NavLink, } from "react-router-dom";



const Navbar = () => (

  <>

      <Menu>

        <NavLink to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>

        <NavLink to="/about">
          <Menu.Item>
            About
          </Menu.Item>
        </NavLink>

        <NavLink to="/departments">
          <Menu.Item>
            Departments
          </Menu.Item>
        </NavLink>

      </Menu>

  </>

);


export default Navbar;
