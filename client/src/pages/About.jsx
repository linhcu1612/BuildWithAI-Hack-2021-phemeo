/** @format */

import React from "react";
import Team from "../components/Team";
import avatar_linh from "../assets/avatar/avatar_linh.png";
import avatar_anh from "../assets/avatar/avatar_anh.png";
import avatar_trang from "../assets/avatar/avatar_trang.png";
import avatar_henry from "../assets/avatar/avatar_henry.png";
import avatar_thien from "../assets/avatar/avatar_thien.jpeg";

const data = [
  {
    id: 1,
    name: "Linh Cu",
    role: "Team Captain",
    image: avatar_linh,
    gmail: "nhatlinh161232@gmail.com",
  },
  {
    id: 2,
    name: "Thien Bui",
    role: "Data Scientist",
    image: avatar_thien,
    gmail: "buildwithai@thienbui.anonaddy.me",
  },
  {
    id: 3,
    name: "Anh Trinh",
    role: "Data Analyst",
    image: avatar_anh,
    gmail: "andrews.trinh@gmail.com",
  },
  {
    id: 4,
    name: "Tung Le",
    role: "Data Analyst",
    image:
      "https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad",
    gmail: "l.t.tung0509@gmail.com",
  },
  {
    id: 5,
    name: "Thanh Nguyen",
    role: "Data Analyst",
    image:
      "https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad",
    gmail: "ncthanh2000@yahoo.com",
  },
  {
    id: 6,
    name: "Hung Nguyen",
    role: "BE Developer",
    image: avatar_henry,
    gmail: "hungnguyenquoc8a2@gmail.com",
  },
  {
    id: 7,
    name: "Trang Nguyen",
    role: "Presentator + Designer",
    image: avatar_trang,
    gmail: "clovernguyenn@gmail.com",
  },
];

const About = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white", fontSize: "44px" }}>
        Phemeo Team
      </h1>
      <div className='grid grid-cols-4 gap-3'>
        {data.slice(0, 4).map((member) => {
          return <Team key={member.id} {...member} />;
        })}
      </div>
      <div
        className='grid grid-cols-3'
        style={{ marginLeft: "200px", marginRight: "200px" }}>
        {data.slice(4).map((member) => {
          return <Team key={member.id} {...member} />;
        })}
      </div>
    </>
  );
};

export default About;
