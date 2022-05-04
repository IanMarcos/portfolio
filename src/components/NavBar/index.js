import React from 'react';
import { Link } from 'gatsby';
import { VscOutput, VscCode, VscMortarBoard, VscAccount } from 'react-icons/vsc';
import { navigationBar } from './style.module.css';

const NavigationBar = () => {
  return (
    <nav className={navigationBar}>
      <ul>
        <li><Link to="/">
          <VscOutput size={18} />
          <p>Resumen</p>
        </Link></li>
        <li><Link to="/projects">
          <VscCode size={18} />
          <p>Proyectos</p>
        </Link></li>
        <li><Link to="/knowledge">
          <VscMortarBoard size={18} />
          <p>Conocimientos</p>
        </Link></li>
        <li><Link to="/experience">
          <VscAccount size={18} />
          <p>Experiencia</p>
        </Link></li>
      </ul>
    </nav>
  )
}
export default NavigationBar;