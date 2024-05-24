import { graphQLRequest } from "./request";

export const productLoader = async ({ params: { productId } }) => {
  console.log(productId);
  const query = `query Product($productId: String!) {
        product(productId: $productId) {
          description
          id
          img
          name
          updatedAt
        }
      }`;
  const data = await graphQLRequest({
    query,
    variables: {
      productId,
    },
  });
  return data;
};

export const menuLoader = async () => {
  const query = `query Query {
      productsType {
        id
        description
        img
        name
      }
    }`;
  const data = await graphQLRequest({ query });
  return data;
};

export const addNewProduct = async (newProduct) => {
  const query = `mutation Mutation($name: String!, $description: String!, $img:String!){
    addProduct(name: $name, description: $description, img: $img){
      name
      description
      img
      author{ 
        name
      }
    }
  }`;
  const data = await graphQLRequest({query, variables: {
    name: newProduct.name, 
    description: newProduct.description,
    img: newProduct.img
  }})
  return data;
}
export const deleteProduct = async (productId) => {
  const query = `mutation deleteProduct($productId: String!){
    deleteProduct(productId: $productId){
       name
    }
  }`;
  const data = await graphQLRequest({query, variables: {
    productId: productId
  }})
  return data;
}

export const updateProduct = async ({params, request}) => {
  const updatedProduct = await request.formData();
  const formDataObj = {};
  updatedProduct.forEach((value, key) => (formDataObj[key] = value));

  console.log({updatedProduct, formDataObj});
  const query = `mutation UpdateProduct($img: String!, $description: String!, $name: String!, $id: String!) {
    updateProduct(img: $img, description: $description, name: $name, id: $id) {
      id
      name
      description
      img
    }
  }`;
  const { updateProduct } = await graphQLRequest({
    query, 
    variables: formDataObj
  });
  console.log({updateProduct});
  return updateProduct;
  // return null;
}