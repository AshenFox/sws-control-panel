import {
  AppActions,
  GET_ADDRESS_LIST,
  SET_IS_LOADING,
  SET_IS_MENU_OPEN,
  SET_IS_NOTHING_FOUND,
  SET_IS_TOO_SHORT,
  SET_QUERY,
} from '../types/types';
import { ThunkActionApp } from '../store';
import { api_url, token } from '../../helpers/values';
import { AddressListType } from '../reducers/main/mainInitState';

// SET_IS_MENU_OPEN
export const set_is_menu_open = (value: boolean): AppActions => ({
  type: SET_IS_MENU_OPEN,
  payload: {
    value,
  },
});

// SET_IS_LOADING
export const set_is_loading = (value: boolean): AppActions => ({
  type: SET_IS_LOADING,
  payload: {
    value,
  },
});

// SET_QUERY
export const set_query = (value: string): AppActions => ({
  type: SET_QUERY,
  payload: {
    value,
  },
});

// SET_IS_MENU_OPEN
export const set_is_nothing_found = (value: string): AppActions => ({
  type: SET_IS_NOTHING_FOUND,
  payload: {
    value,
  },
});

// SET_IS_TOO_SHORT
export const set_is_too_short = (value: boolean): AppActions => ({
  type: SET_IS_TOO_SHORT,
  payload: {
    value,
  },
});

// GET_ADDRESS_LIST
export const get_address_list = () => <ThunkActionApp>(async (dispatch, getState) => {
    try {
      const {
        main: { query },
      } = getState();

      const options: RequestInit = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + token,
        },
        body: JSON.stringify({ query }),
      };

      dispatch(set_is_nothing_found(''));
      dispatch(set_is_too_short(false));

      if (query.length <= 3) {
        dispatch(set_is_too_short(true));
        return;
      }

      dispatch(set_is_loading(true));

      const response = await fetch(api_url, options);

      const data = (await response.json()) as { suggestions: AddressListType };

      dispatch({
        type: GET_ADDRESS_LIST,
        payload: {
          value: data.suggestions,
        },
      });
      dispatch(set_is_loading(false));

      if (!data.suggestions.length) dispatch(set_is_nothing_found(query));
    } catch (err) {
      console.log(err);
      dispatch(set_is_loading(false));
    }
  });

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
