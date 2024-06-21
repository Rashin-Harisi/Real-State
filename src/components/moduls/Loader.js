import { ThreeDots } from "react-loader-spinner";

function Loader({color="#304ffe", height=45}) {
  return (
    <ThreeDots
      color={color}
      height={height}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
}

export default Loader;
