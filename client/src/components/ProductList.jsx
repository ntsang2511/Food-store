import { IconButton, List, Tooltip } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "../pagesCss/Menu.css";
import { useState } from "react";
import { deleteProduct } from "../utils/menuUtils";
import {DeleteForeverOutlined, EditAttributesOutlined} from '@mui/icons-material';
function ProductList({ products }) {
  const { productId } = useParams();
  const firstId = productId || "";
  const [activeProductId, setActiveProductId] = useState(firstId);
  if(products){
    return (
      <List>
        {products.map(({ id, name, img}) => {
          return (
            <>
            <Link
              key={id}
              to={`products/${id}`}
              style={{ textDecoration: "none" }}
              onClick={(event) => {
                if (event.target.classList.contains('btn-edit')) {
                  event.preventDefault();
                  window.location.href = `/edit/${id}`;
                }else if(event.target.classList.contains('btn-delete')){
                  event.preventDefault();
                }
                setActiveProductId(id)
              }}
              className="link-item"
            >
              <div
                className="menu__content-list"
                style={{
                  backgroundColor:
                    id === activeProductId ? "rgb(255 211 140)" : null,
                }}
              >
                
                <div className="menu__content-item">
                  {/* <button type="button" class="btn btn-danger btn-delete" onClick={async (e) => {
                    e.preventDefault();
                    const { delelteProduct } = await deleteProduct(id);
                    console.log('123123');
                  }}>Xóa</button> */}
                  <Tooltip onClick={async (e) => {
                    e.preventDefault();
                    const { delelteProduct } = await deleteProduct(id);
                    console.log('123123');
                    window.location.href= '/menu'; 
                  }} title="Xóa sản phẩm" sx={{position: 'absolute', right: "0"}} className="btn-delete">
                    <IconButton size="small">
                      <DeleteForeverOutlined sx={{color: 'white'}}/>
                    </IconButton>
                  </Tooltip>
                  {/* <a class="btn btn-primary btn-edit" href={`http://localhost:5173/edit/${id}`}>Edit</a> */}
                  <Tooltip title="Chỉnh sửa sản phẩm" className="btn-edit" sx={{position: 'absolute', right: "0", marginRight: '30px'}}>
                    <IconButton size="small" className="btn-edit">
                      <EditAttributesOutlined sx={{color: 'white'}} className="btn-edit"/>
                    </IconButton>
                  </Tooltip>
                  <div className="menu__content-item-title">{name}</div>
                  <img
                    className="menu__content-item-img"
                    src={img}
                    alt="Food"
                  />
                </div>
              </div>
            </Link>
            </>
          );
        })}
      </List>
    );
  }else{
    return <div></div>
  }
}

export default ProductList;
