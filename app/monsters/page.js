"use client";
import { useState, useEffect } from "react";
import Styles from "./monster.module.css";

export default function About() {
  const [monsters, setMonsters] = useState([]);
  const url = "https://api-test-inky.vercel.app/api/league";

  const getApi = async () => {
    const res = await fetch(url)
      .then((res) => res.text())
      .then((mons) => {
        setMonsters(JSON.parse(mons));
      });
  };

  console.log(monsters);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h1>This is Test-Site from Next.js</h1>
      <ul className="ul-container">
        {monsters
          ? monsters.map((mons) => (
              <li className={Styles.li} key={mons.name}>
                <p>名前:{mons.name}</p>
                <p>レベル:{mons.level}</p>
                <p>体力:{mons.stamina}</p>
              </li>
            ))
          : "error"}
      </ul>
      <br />
    </>
  );
}
