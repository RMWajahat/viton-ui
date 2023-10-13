import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export const Home = () => {
  const [active, IsActive] = useState(false);
  const handleActive = () => {
    IsActive(!active);
  };
  return <React.Fragment>
    {active ? (
      <ul className="likss">
        <i
          class="bx bx-x"
          onClick={handleActive}
          style={{
            position: "absolute",
            right: "0",
            fontSize: "4vw",
            zIndex: "1000",
            cursor: "pointer",
          }}
        ></i>
        <li>
          <NavLink to={"/home"}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to={"/services"} >SERVICES</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>CONTACT</NavLink>
        </li>
      </ul>
    ) : (
      ""
    )}
    <div style={{ display: "flex", flexBasis: "8vw 92vw", zIndex: "1000" }}>
      <section className="navbar">
        <span>
          <i
            class={active ? "bx bx-menu-alt-left menu" : "bx bx-menu menu"}
            onClick={handleActive}
          ></i>
        </span>
        <span className="icons">
          <i class="bx bxl-instagram"></i>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-linkedin"></i>
        </span>
      </section>
      <section className="head">
        <div className="left">
          <strong className="strong">hi!</strong>
          <h1>We are a CREATIVE design agency</h1>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            officiis rem voluptates. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus, error.
          </small>
          <button class="cta">
            <span>
              Get in Touch <i class="bx bx-arrow-back bx-flip-horizontal"></i>
            </span>
          </button>
        </div>

        <div className="right">
          <strong>|</strong>
          <strong>CREATIVE</strong>
          <strong>DESIGN</strong>
          <strong>BRANDING</strong>
          <strong>&</strong>
          <strong>🙂</strong>
        </div>
      </section>
    </div>
  </React.Fragment>;
};
