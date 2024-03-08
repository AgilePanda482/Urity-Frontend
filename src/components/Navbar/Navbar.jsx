// import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { UrityLogo } from "./Logo.jsx";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
  // eslint-disable-next-line react/no-unknown-property
  <style jsx global>{`
    .active {
      @apply text-primary;
    }
  `}</style>;

  return (
    <Navbar data-theme="dark" variant="sticky" className="">
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
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Sesión iniciada</p>
              <p className="font-semibold">correo@escuela.com.mx</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
