import { NextResponse } from "next/server";

export async function GET(reqest) {
  return NextResponse.json([
    {
      name: "Red Dragon",
      level: "Lv1",
      stamina: "500,000",
    },
    {
      name: "Green Dragon",
      level: "Lv1",
      stamina: "300,000",
    },
    {
      name: "Ggold Drgon",
      level: "Lv1",
      stamina: "300,000",
    },
    {
      name: "Desker",
      level: "Lv1",
      stamina: "30,000",
    },
    {
      name: "Desker",
      level: "Lv2",
      stamina: "100,000",
    },
    {
      name: "Desker",
      level: "Lv3",
      stamina: "150,000",
    },
  ]);
}
