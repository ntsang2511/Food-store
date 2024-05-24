import { useLoaderData } from "react-router-dom";
import "../pagesCss/About.css";
import { Typography } from "@mui/material";
import moment from "moment";
function ProductInfo() {
  const { product } = useLoaderData();
  if (product) {
    return (
      <div className="about">
        <div className="about__image">
          <img src={product.img} alt="food" className="about__image-item" />
        </div>
        <div className="about__content">
          <h1 className="about__content-title">This is {product.name}</h1>
          <br />
          <h5 className="about__content-small-title">Miêu tả sản phẩm</h5>
          <p className="about__content-para">
            {product.description}
            <br />
            <Typography sx={{ fontSize: "10px" }}>
              Cập nhập lần cuối vào lúc: {moment(product.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
            </Typography>
          </p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ProductInfo;
