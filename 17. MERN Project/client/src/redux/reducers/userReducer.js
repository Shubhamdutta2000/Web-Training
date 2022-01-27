import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
  } from "../actionTypes/userConstants";

  // User login Reducer
  export const userLoginReducer = (state = {}, action) => {
      switch(action.type){
          case USER_LOGIN_REQUEST:
              return{
                  loading: true,
                  isAuthenticated: false,
                  error: null,
                  userInfo: null,
              };

            case USER_LOGIN_SUCCESS: 
                return{
                    loading: false,
                    userInfo: action.payload,
                    isAuthenticated: true,
                    error: null,
                };
            
            case USER_LOGIN_FAILED: 
                return{
                    isAuthenticated: false,
                };
            case USER_LOGOUT:
              return{
                isAuthenticated:false,
              };    
                
            default:
                return state;    
      }
  };



  //User Register Reducer
  export const userRegisterReducer = (
      state = {
          loading: false,
          error: null,
          userInfo: null,
      },
      action
  ) => {
      switch (action.type){
        case USER_REGISTER_REQUEST:
            return {
              loading: true,
              error: null,
            };
      
          case USER_REGISTER_SUCCESS:
            return {
              loading: false,
              userInfo: action.payload,
              error: null,
            };
      
          case USER_REGISTER_FAILED:
            return {
              loading: false,
              error: null,
            };
      
          default:
            return state;
        }
      };
      