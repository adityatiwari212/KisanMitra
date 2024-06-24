
import {
  ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS , PRODUCT_UPLOAD_FAIL , PRODUCT_UPLOAD_SUCCESS , PRODUCT_UPLOAD_REQUEST
} from "../constants/productConstants";

import axios from "axios";

export const getProduct = () => async ( dispatch ) =>{
  try {
    dispatch ( { type: ALL_PRODUCT_REQUEST}) ;

    const {data} = await axios.get("/api/v1/products")
    console.log(data)
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type : ALL_PRODUCT_FAIL ,
      payload : error.response.data.message,
    })
  }

}

export const clearErrors = ()=> async(dispatch)=>{
  dispatch({
    type :CLEAR_ERRORS
  })
}



export const getProductDetails = (id) => async ( dispatch ) =>{

  console.log("this is gPD"  + id)

  try {
    dispatch ( { type: PRODUCT_DETAILS_REQUEST}) ;

    const {data} = await axios.get(`/api/v1/product/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product
    })
  }catch(error){
    dispatch({
      type : PRODUCT_DETAILS_FAIL ,
      payload : error.response.data.message,
    })
  }

}


export const uploadImage = (formData) => async (dispatch)=>{
  try{
    dispatch({
      type : "IMAGEUPLOADREQ"
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    
    const { data } = await axios.post(`/api/v1/product/upload/image`, formData, config);

    dispatch({ type: "IMAGEUPLOADSUCCESS", payload: data });
  } catch(error){
    dispatch({
      type : "IMAGE_UPLOAD_FAIL" ,
      payload: error.response.data.message,
    })
  }
}

export const productNew = (productData) => async (dispatch) => {
  console.log(productData)
  try {
    dispatch({ type: PRODUCT_UPLOAD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/product/new`, productData, config);
    console.log(data);
    
    dispatch({ type: PRODUCT_UPLOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPLOAD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getCropDataFromApi = (input)=> async(dispatch)=>{
  try{

      dispatch({
        type : "CROP_DATA_REQUEST"
      })
      console.log("inside the actions from api")
      console.log(input)
      
      // const request = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&filters%5Bstate.keyword%5D=${input.state}&filters%5Bcommodity%5D=${input.commodity}`
      const request = `https://api.data.gov.in/resource/73140461-fda6-4e1b-9b6f-8026067a0077?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&filters%5Bstate%5D=Maharashtra
      `
      console.log(request)


      axios.get(request).then((res)=>{
        console.log(res.data.records[0])
      })



      console.log("after api get")
      // console.log(data)
      // console.log(Object.keys(data))
      // console.log(data.records)

      dispatch({
        type : "CROP_DATA_SUCCESS",
        // payload : data
      })
  }catch(error){
    console.log(error)
    dispatch({
      type : "CROP_DATA_ERROR" ,
      payload : error.response.data.message,
    })
  }
}

