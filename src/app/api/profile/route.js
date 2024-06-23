import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const profiles = await Profile.find().select("-userId");
    //console.log(profiles)
    return NextResponse.json({data: profiles}, {status:200})
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      amenities,
      rules,
      category,
    } = body;

    //console.log(body)
    const session = await getServerSession(req);
    //console.log("session in profile",session);
    if (!session) {
      return NextResponse.json(
        { error: "Please login to your account first!" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    //console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "Account was not found!" },
        { status: 404 }
      );
    }

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json({ error: "Invalid Data!" }, { status: 400 });
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      price: +price,
      constructionDate,
      amenities,
      rules,
      category,
      userId: new Types.ObjectId(user._id),
    });
    //console.log(newProfile);
    return NextResponse.json({ message: "New Ad is added" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      _id,
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      amenities,
      rules,
      category,
    } = body;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Please login to your account first!" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    //console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "Account was not found!" },
        { status: 404 }
      );
    }
    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json({ error: "Invalid Data!" }, { status: 400 });
    }

    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "You don't have access to edit this advertisement" },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.description = description;
    profile.phone = phone;
    profile.location = location;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    profile.save();

    return NextResponse.json(
      { message: "Advertisement was successfully edited." },
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
