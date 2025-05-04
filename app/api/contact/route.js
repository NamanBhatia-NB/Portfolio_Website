import { NextResponse } from "next/server";
import { connectDB } from "@/app/api/utils/db";
import Contact from "@/app/models/Contact";

export async function POST(req) {
    try {
        const data = await req.json();

        if (!data.name || !data.email || !data.message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        await connectDB();
        const saved = await Contact.create(data);

        return NextResponse.json({ success: true, saved });
    } catch (err) {
        console.error("🚨 Internal Server Error:", err.message);
        console.error(err.stack);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}