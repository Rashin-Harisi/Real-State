import BuyResidentialPage from "@/components/templates/BuyResidentialPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const BuyResidential = async ({searchParams}) => {
    //console.log(searchParams)
    await connectDB();
    const profiles = await Profile.find({published:true}).select("-userId");
    let final = profiles
    if (searchParams.category){
        final = final.filter(profile => profile.category ===searchParams.category)
         
    }
  return <BuyResidentialPage data={final} />;
};

export default BuyResidential;
