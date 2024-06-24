
const COMM_UPLOAD_REQUEST = 'COMM_UPLOAD_REQ';
const COMM_UPLOAD_SUCCESS = 'COMM_UPLOAD_SUCC';
const COMM_UPLOAD_FAILURE = 'COMM_FAIL';

export const communityReducer = (state = { community: {} }, action) => {
  switch (action.type) {
    case COMM_UPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMM_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case COMM_UPLOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
