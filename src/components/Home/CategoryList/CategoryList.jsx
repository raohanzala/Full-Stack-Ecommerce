// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import CategoryImg1 from './../../../assets/category-img-chrono.jpeg'
// import CategoryImg2 from './../../../assets/category-img-luxury.jpeg'
// import CategoryImg3 from './../../../assets/category-img-luxury.jpeg'
// import { Context } from "../../../utils/context";

function Category({categories}) {
  // const { categories } = useContext(Context);
  const navigate = useNavigate();

  console.log(categories);

  return (
    <div>
      <div className="flex justify-around flex-wrap pt-10 pb-10 gap-10">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="h-[20rem] w-[15rem]"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              className="h-full w-full"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
