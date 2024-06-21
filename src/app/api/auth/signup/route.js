import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log(email, password);

    if (!email || !password) {
      return NextResponse.json({ error: "Invalid data!" }, { status: 422 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User's already existed!" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    //console.log(newUser)
    return NextResponse.json(
      { message: "Account is created successfully." },
      { status: 201 }
    );


  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
