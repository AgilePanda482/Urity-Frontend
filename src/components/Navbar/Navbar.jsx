// import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { UrityLogo } from "./Logo.jsx";
import { NavLink } from "react-router-dom";
import UdeG from "../../assets/UdeG.svg";


export default function NavbarComponent() {
  const activeStyles = {
    color: "var(--nextui-colors-primary)",
  };
  const photo = UdeG;
  // eslint-disable-next-line react/no-unknown-property
  <style jsx global>{`
    .active {
      @apply text-primary;
    }
  `}</style>;

  return (
    <Navbar data-theme="dark" variant="sticky">
      <NavbarBrand>
        <UrityLogo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem >
          <NavLink to="/home" className="nav-link">Inicio</NavLink>
          {/* <Link href="/home" aria-current="page" color="primary">Inicio</Link> */}
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/añadir" className="nav-link">Añadir</NavLink>
          {/* <Link color="foreground" href="/añadir">Añadir</Link> */}
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/verificar" className="nav-link">Verificar</NavLink>
          {/* <Link color="foreground" href="/verificar">Verificar</Link> */}
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/usuarios" className="nav-link">Usuarios</NavLink>
          {/* <Link color="foreground" href="/usuarios">Usuarios</Link> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end" data-theme="dark">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="UdeG"
              size="sm"
              src={photo}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Sesión iniciada como</p>
              <p className="font-semibold">UdeG</p>
            </DropdownItem>
            <DropdownItem key="configurations">Configuraciones</DropdownItem>
            <DropdownItem key="help_and_feedback">Ayuda y Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
