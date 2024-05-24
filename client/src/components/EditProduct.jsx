import { useParams, useSubmit, useLocation, useLoaderData} from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { Navigate } from 'react-router-dom';
function EditProduct() {
  const {product} = useLoaderData();
  const location = useLocation();
  const submit = useSubmit();
  const {productId} = useParams();
  const [editProductNameChange, setEditProductNameChange] = useState(product.name);
  const [editProductDescriptionChange, setEditProductDescriptionChange] = useState(product.description);
  const [editProductImgChange, setEditProductImgChange] = useState(product.img);

  const handleOnChangeName = (e) => {
    setEditProductNameChange(e.target.value);
  };
  const handleOnChangeDescription = (e) => {
    setEditProductDescriptionChange(e.target.value);
  };
  const handleOnChangeImg = (e) => {
    setEditProductImgChange(e.target.value);
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    submit(
      {
        id: productId,
        name: editProductNameChange,
        description: editProductDescriptionChange,
        img: editProductImgChange,
      },
      { method: "POST", action: location.pathname }
    );
    if(submit){
      alert("Chỉnh sửa món ăn thành công");
      window.location.href= '/menu'; 
    }
  };
  return (
    <div>
      <Navbar />
      <form className="form__add-food">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Tên món ăn
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={editProductNameChange}
            onChange={handleOnChangeName}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Mô tả món ăn
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={editProductDescriptionChange}
            onChange={handleOnChangeDescription}
          />
        </div>

        <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
            Hình ảnh món ăn
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={editProductImgChange}
            onChange={handleOnChangeImg}
          />
        </div>
        <img alt="Hình ảnh món ăn" id="myImg" />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleEditProduct}
        >
          Chỉnh sửa
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
