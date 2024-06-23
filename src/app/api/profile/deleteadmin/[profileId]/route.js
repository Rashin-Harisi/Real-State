import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connectDB();
    const id = context.params.profileId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Please login to your account first!" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "Account was not found!" },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
        return NextResponse.json({ error: "Limit access!" }, { status: 403 });
      }


    await Profile.deleteOne({ _id: id });
    
    return NextResponse.json(
      { message: "The ad was successfully deleted." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
}
