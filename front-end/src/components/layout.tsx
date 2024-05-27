import React, { ReactNode } from 'react';
import { Container } from 'reactstrap';
import MyNavbar from './navbar';
import '../index.css';

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="layout">
        <MyNavbar />
        <header className="jumbotron-background">
        </header>
        <main>{children}</main>
      </div>
    );
  };
  

export default Layout;