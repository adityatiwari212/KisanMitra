import axios from 'axios';

// Action Types
const COMM_UPLOAD_REQUEST = 'COMM_UPLOAD_REQ';
const COMM_UPLOAD_SUCCESS = 'COMM_UPLOAD_SUCC';
const COMM_UPLOAD_FAILURE = 'COMM_FAIL';

// Action Creators
const uploadCommunityRequest = () => ({
  type: COMM_UPLOAD_REQUEST
});

const uploadCommunitySuccess = (data) => ({
  type: COMM_UPLOAD_SUCCESS,
  payload: data
});

const uploadCommunityFailure = (error) => ({
  type: COMM_UPLOAD_FAILURE,
  payload: error
});

// Thunk Action Creator
export const uploadCommunity = (comment) => async (dispatch) => {
  try {
    console.log("From Actions");
    console.log(comment);
    dispatch(uploadCommunityRequest());

    const config = { headers: { "Content-Type": "application/json" } };
    console.log("From Actions2");
    const {data}  = await axios.post(`/api/v1/uploadComm`, comment, config);
    console.log("From Actions3");
    dispatch(uploadCommunitySuccess(data));
  } catch (error) {
    console.log(error)
    dispatch(uploadCommunityFailure(error.response.data.message));
  }
};
