import ProfileDetailPage from "@/components/templates/ProfileDetailPage"
import Profile from "@/models/Profile"
import connectDB from "@/utils/connectDB"


const ProfileDetail = async(context) => {
   const id = context.params.profileId
   await connectDB();
   const profile = await Profile.findOne({_id : id})
    if(!profile) return <h3>There is something wrong!</h3>
  return <ProfileDetailPage data={profile}/>
}

export default ProfileDetail



export const generateMetadata= async({params:{profileId}})=>{
  await connectDB();
  const profile = await Profile.findOne({_id : profileId})
  return {
    title: profile.title,
    description: profile.description
  }
}