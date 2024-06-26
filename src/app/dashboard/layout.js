import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";



async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  if (!user) return <h3>There is something wrong!</h3>

  return <DashboardSidebar role={user.role} email={user.email}>{children}</DashboardSidebar>;
}

export default DashboardLayout;

export const generateMetadata= async()=>{
  const session = await getServerSession(authOptions);
  await connectDB();
  const user = await User.findOne({ email: session.user.email })
  let role= user.role.toLowerCase();
    return{
      title: `Real State | ${role} account`,
    }
  
}