import { AddressListType } from './../reducers/main/mainInitState';
export const SET_IS_MENU_OPEN = 'SET_IS_MENU_OPEN';
export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_QUERY = 'SET_QUERY';
export const SET_IS_NOTHING_FOUND = 'SET_IS_NOTHING_FOUND';
export const SET_IS_TOO_SHORT = 'SET_IS_TOO_SHORT';

export interface SetIsMenuOpen {
  type: typeof SET_IS_MENU_OPEN;
  payload: {
    value: boolean;
  };
}

export interface GetAddressList {
  type: typeof GET_ADDRESS_LIST;
  payload: {
    value: AddressListType;
  };
}

export interface SetIsLoading {
  type: typeof SET_IS_LOADING;
  payload: {
    value: boolean;
  };
}

export interface SetQuery {
  type: typeof SET_QUERY;
  payload: {
    value: string;
  };
}

export interface SetIsNothingFound {
  type: typeof SET_IS_NOTHING_FOUND;
  payload: {
    value: string;
  };
}

export interface SetIsTooShort {
  type: typeof SET_IS_TOO_SHORT;
  payload: {
    value: boolean;
  };
}

export type MainActions =
  | SetIsMenuOpen
  | GetAddressList
  | SetIsLoading
  | SetQuery
  | SetIsNothingFound
  | SetIsTooShort;

export type AppActions = MainActions;
