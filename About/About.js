"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function About() {
  const [foods, setFoods] = useState([]);

  const url = "https://next-js-api-route-snowy.vercel.app/api/todos";

  const getApi = async () => {
    const res = await fetch(url)
      .then((res) => res.text())
      .then((food) => {
        setFoods(JSON.parse(food));
      });
    console.log("hello");
  };

  console.log(foods);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h1>This is Test-Site from Next.js</h1>
      <ul className="ul-container">
        {foods
          ? foods.map((food) => (
              <li className="list" key={food.name}>
                <p>商品名:{food.name}</p>
                <p>説明:{food.description}</p>
                <p>値段:{food.price}</p>
                <a href={food.website}>リンク</a>
              </li>
            ))
          : "error"}
      </ul>
      <br />
    </>
  );
}
