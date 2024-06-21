import AddProfilePage from "@/components/templates/AddProfilePage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const Edit = async (props) => {
  await connectDB();
  const id = props.params.profileId;
  const profile = await Profile.findOne({ _id: id });
  if (!profile) return <h3>There is something wrong.Please Try again...</h3>;
  return <AddProfilePage data={JSON.parse(JSON.stringify(profile))}/>
};

export default Edit;
