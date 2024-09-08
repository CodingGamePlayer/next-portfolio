import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year")?.padStart(4, "0");
  const month = searchParams.get("month")?.padStart(2, "0");

  if (!year || !month) {
    return NextResponse.json(
      { error: "Year and month are required" },
      { status: 400 }
    );
  }

  const studyDir = path.join(process.cwd(), "public", "study", year, month);
  let dates: string[] = [];

  try {
    const files = await fs.readdir(studyDir);
    dates = files.map((file) => path.parse(file).name);
    console.log(dates);
  } catch (error) {
    console.error("Error reading directory:", error);
  }

  return NextResponse.json({ dates });
}
