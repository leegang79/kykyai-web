import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    console.log("[v0] API route received form data:", formData)

    // Forward the request to the actual API endpoint
    const response = await fetch("https://www.kykyai.com/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })

    console.log("[v0] External API response:", response.status, response.statusText)

    if (response.ok) {
      const responseData = await response.json().catch(() => ({ success: true }))
      return NextResponse.json(responseData, { status: 200 })
    } else {
      const errorText = await response.text().catch(() => "Unknown server error")
      console.log("[v0] External API error:", errorText)
      return NextResponse.json(
        { error: `服务器错误 (${response.status}): ${errorText || response.statusText}` },
        { status: response.status },
      )
    }
  } catch (error) {
    console.error("[v0] API route error:", error)

    if (error instanceof TypeError && error.message.includes("fetch")) {
      return NextResponse.json({ error: "无法连接到服务器，请稍后重试" }, { status: 503 })
    }

    return NextResponse.json({ error: "服务器内部错误，请稍后重试" }, { status: 500 })
  }
}
