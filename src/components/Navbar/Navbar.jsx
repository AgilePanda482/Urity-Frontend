import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { UrityLogo } from "./Logo.jsx";
import universidad from "../../assets/descarga.png";
import leones from "../../assets/leones.svg";
import { NavLink } from "react-router-dom";
import { transform } from "framer-motion";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const pic = user;
  const photo = leones;
  // const photo = universidad;

  const activeStyles = {
    color: "var(--nextui-colors-primary)",
  };

  // eslint-disable-next-line react/no-unknown-property
  <style jsx global>{`
    .active {
      @apply text-primary;
    }
  `}</style>;

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} data-theme="dark" variant="sticky">
      <NavbarContent className="sm:hidden md:hidden lg:hidden xl:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden md:hidden lg:hidden xl:hidden"
        />
      </NavbarContent>

      <NavbarBrand>
        <UrityLogo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/home" className="nav-link">
            Inicio
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/añadir" className="nav-link">
            Añadir
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/verificar" className="nav-link">
            Verificar
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to="/usuarios" className="nav-link">
            Usuarios
          </NavLink>
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
              <p className="font-semibold">UdeG Prepa 17</p>
            </DropdownItem>
            <DropdownItem key="configurations">Configuraciones</DropdownItem>
            <DropdownItem key="help_and_feedback">
              Ayuda y Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu data-theme="dark" className="gap-4">
        <NavbarMenuItem>
          <NavLink to="/home" className="text-2xl nav-link cursor-pointer">
            Home
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink to="/añadir" className="text-2xl nav-link cursor-pointer">
            Añadir
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink to="/verificar" className="text-2xl nav-link cursor-pointer">
            Verificar
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink to="/usuarios" className="text-2xl nav-link cursor-pointer">
            Usuarios
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
