import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Nav, NavLink } from './styles';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Nav>
      <div>
        <img
          src="https://brain.agr.br/images/logo.png"
          alt="Logo da empresa Brain"
        />

        <nav>
          <NavLink as={Link} to="/" active={pathname === '/'}>
            Cadastro
          </NavLink>
          <NavLink as={Link} to="/dashboard" active={pathname === '/dashboard'}>
            Dashboard
          </NavLink>
        </nav>

        {/* <SignInButton /> */}
      </div>
    </Nav>
  );
}
