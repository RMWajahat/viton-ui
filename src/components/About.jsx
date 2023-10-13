import React from "react";
import vidstory from "../assets/VideoAbt.mp4";
import { NavLink } from "react-router-dom";
export const About = () => {
  return (
    <section className="about">
      <div className="head_abt">
        <div className="abtleft">
          <small>. SINCE 2019</small>
          <h1>
            More than just a <span>creative</span> design Agency
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
            doloribus sit amet consectetur adipisicing. Blanditiis, excepturi
            molestiae.
          </p>
          <button className="btn">Get in touch</button>
        </div>
        <div className="abtright"></div>
      </div>
      <div className="abtnum wid-80 section">
        <h1>Our Inspiration</h1>
        <ul>
          <li>
            <span>100+</span>
            <span>Satisfied Clients</span>
          </li>
          <li>
            <span
              style={{
                fontSize: "10vh",
                fontWeight: "200",
                color: "peachpuff",
              }}
            >
              |
            </span>
          </li>
          <li>
            <span>
              21 <small>⭐</small>
            </span>
            <span>Awards</span>
          </li>
          <li>
            <span
              style={{
                fontSize: "10vh",
                fontWeight: "200",
                color: "peachpuff",
              }}
            >
              |
            </span>
          </li>
          <li>
            <span>16</span>
            <span>Team Memebers</span>
          </li>
        </ul>
      </div>
      <div className="story section">
        <video src={vidstory} loop muted autoPlay></video>
        <div className="rightstory">
          <h1>Our Timeline</h1>
          <p>
            Lit amet consectetur adipisicing elit. Quis odit impedit nostrum
            minima doloribus optio facilis.Eaque cupiditate expedita quia facere
            incidunt. Numquam veniam beatae, dolorem placeat illo quis ducimus.
          </p>
          <button className="btn">Get in touch</button>
        </div>
      </div>
      <div className="cores section wid-80">
        <h1>
          The <span>Core values</span> we add <small>.</small>
          <small>.</small>
          <small>.</small>
        </h1>
        <section className="services">
          <div className="service">
            <i class="bx bx-check-shield"></i>
            <h2>Quality</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod sunt nemo?
            </p>
          </div>
          <div className="service">
            <i class="bx bx-bulb"></i>
            <h2>Creativity</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod sunt nemo?
            </p>
          </div>
          <div className="service">
            <i class="bx bxs-zap"></i>
            <h2>Innovation</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod sunt nemo?
            </p>
          </div>
          <div className="service">
            <i class="bx bx-check-double"></i>
            <h2>Integrity</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod sunt nemo?
            </p>
          </div>
          <div className="service">
            <i class="bx bx-group"></i>
            <h2>Teamwork</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod sunt nemo?
            </p>
          </div>
          <div className="service">
            <i class="bx bxs-adjust-alt"></i>
            <h2>Simplicity</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quod sunt nemo?
            </p>
          </div>
        </section>
      </div>
      <div className="offer">
        <span className="contain">
        <i class="bx bx-cube bx-spin"></i>
        <i class='bx bx-rocket' ></i>
        <i class='bx bx-analyse bx-spin' ></i>
        <h1>Let's togeather create something Big for YOU</h1>
        <NavLink to={"/services"} className="btn navbtn">
          Create Project
        </NavLink>
        </span>
      </div>
    </section>
  );
};
