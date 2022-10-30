import { SET_IS_TOO_SHORT } from './../../types/types';
import {
  GET_ADDRESS_LIST,
  MainActions,
  SET_IS_LOADING,
  SET_IS_MENU_OPEN,
  SET_IS_NOTHING_FOUND,
  SET_QUERY,
} from '../../types/types';
import initialState, { MainState } from './mainInitState';

/* 

SET_CONTENT_LOADER_ISAPPEARING,
  SET_CONTENT_LOADER_ISEXITED,
  SET_SHOW_SECTION_LOADER,
  SET_SHOW_NAVIGATION,
  SET_SHOW_MENU,
  SET_DIRECTION,

*/

const mainReducer = (state = initialState, action: MainActions): MainState => {
  const { payload, type } = action;

  switch (type) {
    case SET_IS_MENU_OPEN:
      return {
        ...state,
        is_menu_open: payload.value,
      };

    case GET_ADDRESS_LIST:
      return {
        ...state,
        address_list: payload.value,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        is_loading: payload.value,
      };

    case SET_QUERY:
      return {
        ...state,
        query: payload.value,
      };

    case SET_IS_NOTHING_FOUND:
      return {
        ...state,
        is_nothing_found: payload.value,
      };

    case SET_IS_TOO_SHORT:
      return {
        ...state,
        is_too_short: payload.value,
      };

    default:
      return state;
  }
};

export default mainReducer;
