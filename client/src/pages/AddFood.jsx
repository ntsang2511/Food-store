import {useState } from "react";
import Navbar from "../components/Navbar";
import "../pagesCss/Add_food.css";
import { addNewProduct } from "../utils/menuUtils";

function AddFood() {
  const [newProductName, setNewProductName] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductImg, setNewProductImg] = useState("");


  const handleNewProductNameChange = (e) => {
    setNewProductName(e.target.value);
  };

  const handleNewProductDescriptionChange = (e) => {
    setNewProductDescription(e.target.value);
  };
  
  const handleUpLoadFile = (e) => {
    setNewProductImg(e.target.value);
  };
  const handleAddFood = async (e) => {
    e.preventDefault();
    const { addProduct } = await addNewProduct({name: newProductName, description: newProductDescription, img: newProductImg});
    console.log({addProduct});
    alert("Thêm món thành công");
    window.location.href = "/menu";
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
            value={newProductName}
            onChange={handleNewProductNameChange}
          />
          <div id="emailHelp" className="form-text">
            Nên đặt tên càng ngắn gọn càng tốt nhưng phải đủ nghĩa
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Mô tả món ăn
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={newProductDescription}
            onChange={handleNewProductDescriptionChange}
          />
          <div id="emailHelp" className="form-text">
            Đừng ghi quá lang mang
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Hình ảnh của món ăn
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={newProductImg}
            onChange={handleUpLoadFile}
          />
        </div>
        <div id="emailHelp" className="form-text">
            Vào google tìm ảnh, chuột phải vào và chọn copy image address sau đó dán vào đây
          </div>
        <img src={newProductImg} alt="Hình ảnh món ăn" id="myImg" />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleAddFood}
        >
          Thêm món
        </button>
      </form>
    </div>
  );
}

export default AddFood;
