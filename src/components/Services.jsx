import React from "react";
import servise from "./services.json";
import serviceperson from "./Servicepeople.json";
import logo from "../assets/marketing.jpg";
export const Services = () => {
  return (
    <>
      <marquee
        behavior=""
        direction="left"
        scrollamount="12"
        className="marquee"
      >
        <ul>
          <li>
            <i class="bx bxl-meta"></i>
          </li>
          <li>
            <i class="bx bxl-github"></i>
          </li>
          <li>
            <i class="bx bxl-gitlab"></i>
          </li>
          <li>
            <i class="bx bxl-kubernetes"></i>
          </li>
        </ul>
      </marquee>

      <h1 className="servicehead">Services We Offer</h1>
      <section className="services">
        {servise.map((data) => (
          <div className="service">
            <i className={data.image}></i>
            <h2>{data.service}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </section>
      <div className="top-margin">
        <p
          class="bx bx-badge-check"
          style={{ textAlign: "center", fontSize: "9vw",marginBottom:"8vh" }}
        >
          {" "}
          Certified Professionals
        </p>
        {serviceperson.map((person) => (
          <div className="people">
            <div className="persondata">
              <h1>{person.sername}</h1>
              <h3>{person.work}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                aut sint quas blanditiis iste natus sit amet consectetur
                adipisicing elit. Delectus reiciendis laborum hic?
              </p>
              <a class="fancy" href="#">
                <span class="top-key"></span>
                <span className="text">View Projects   <i className="bx bx-arrow-back bx-flip-horizontal" style={{color: '#040404'}} />
</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </a>
            </div>
            <img src={person.perimage} alt={"pic"} className="personpic" />
          </div>
        ))}
      </div>
    </>
  );
};
