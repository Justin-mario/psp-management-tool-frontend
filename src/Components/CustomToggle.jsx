import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {
    useAccordionButton,
    AccordionContext,
  } from "react-bootstrap";

const CustomToggle = ({ children, eventKey}) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <li className="nav-item">
        <Link
          href="#"
          className="nav-link "
          onClick={decoratedOnClick}
          data-bs-toggle="collapse"
          data-bs-target="#navDashboard"
          aria-expanded={isCurrentEventKey ? true : false}
          aria-controls="navDashboard"
        >
          {children}
        </Link>
      </li>
    );
};

export default CustomToggle