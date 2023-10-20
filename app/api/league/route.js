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
      color: "Ggold Drgon",
      level: "Lv1",
      stamina: "300,000",
    },
    {
      color: "Desker",
      level: "Lv1",
      stamina: "50,000",
    },
    {
      color: "Desker",
      level: "Lv2",
      stamina: "100,000",
    },
    {
      color: "Desker",
      level: "Lv3",
      stamina: "150,000",
    },
  ]);
}
