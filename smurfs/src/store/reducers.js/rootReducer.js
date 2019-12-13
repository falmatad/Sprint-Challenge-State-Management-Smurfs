import {FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, POST_USER_START, POST_USER_SUCCESS, POST_USER_FAILURE} from '../actions/index';

export const initialState = {
  userList: [],
  isFetching: false,
  error: "",
  isPosting: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userList: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case POST_USER_START:
        console.log("Post User started");
    return {
    ...state,
    userList: action.payload,
    isPosting: true, 
    error: ''
    }
    
    case POST_USER_SUCCESS:
    return {
    ...state,
    isPosting: false,
    error: ''
    }
    
    case POST_USER_FAILURE:
    return {
    ...state,
    error: action.payload,
    isPosting: false
    }
    default:
      return state;
  }
};
