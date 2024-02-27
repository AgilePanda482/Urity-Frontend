// import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { UrityLogo } from "./Logo.jsx";

export default function NavbarComponent() {

  return (
    <Navbar data-theme="dark" variant="sticky" className="mb-20">
      <NavbarBrand>
        <UrityLogo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/home" aria-current="page" color="primary">
            Inicio
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/añadir">
            Añadir
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/verificar">
            Verificar
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/usuarios">
            Usuarios
          </Link>
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
