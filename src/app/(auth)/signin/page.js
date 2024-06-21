import SigninPage from "@/components/templates/SigninPage";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Signin = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return <SigninPage />;
};

export default Signin;
