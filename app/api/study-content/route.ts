import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") || "";

  // year, month, day 구분

  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  if (!date) {
    return NextResponse.json(
      { error: "유효한 날짜가 제공되지 않았습니다." },
      { status: 400 }
    );
  }

  try {
    // MD 파일이 저장된 디렉토리 경로
    const studyContentDir = path.join(
      process.cwd(),
      "public",
      "study",
      year,
      month
    );

    // 날짜에 해당하는 MD 파일 경로
    const filePath = path.join(studyContentDir, `${day}.md`);

    // 파일 읽기
    const content = await fs.readFile(filePath, "utf-8");

    // 성공적으로 파일을 읽었다면 내용을 반환
    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown",
      },
    });
  } catch (error) {
    console.error("Error reading study content:", error);
    return NextResponse.json(
      { error: "해당 날짜의 학습 내용을 찾을 수 없습니다." },
      { status: 404 }
    );
  }
}
