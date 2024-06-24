


import {
  ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS , PRODUCT_UPLOAD_FAIL , PRODUCT_UPLOAD_SUCCESS , PRODUCT_UPLOAD_REQUEST
} from "../constants/productConstants";


export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST: return {

      loading: true,
      product: []
    };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload.products,

      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_ERRORS: return {
      ...state,
      error: null,
    }
    default:
      return state;
  }
} 


export const productDetailsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: return {

      loading: true,
      ...state
    };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_ERRORS: return {
      ...state,
      error: null,
    }
    default:
      return state;
  }
} 


export const productUploadsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_UPLOAD_REQUEST: return {

      loading: true,
      ...state
    };
    case PRODUCT_UPLOAD_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        
      };
    case PRODUCT_UPLOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_ERRORS: return {
      ...state,
      error: null,
    }
    default:
      return state;
  }
} 

export const DataFromApi = (state = {data : []} , action)=>{
  switch(action.type){
    case "CROP_DATA_REQUEST" : return {
      loading : true ,
      ...state
    };
    case "CROP_DATA_SUCCESS": return {
      loading : false ,
      data : action.payload,
    };
    case "CROP_DATA_FAIL": return {
      loading : false ,
      error : action.payload
    }
    default:
      return state;
  }
}