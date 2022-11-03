import { ChangableFieldsType, RowInterface } from './../reducers/main/mainInitState';
import { RowListType } from '../reducers/main/mainInitState';
import { RowUpdateResponseInterface } from '../actions/types';

// =======================
export const GET_ROW_LIST = 'GET_ROW_LIST';
export const CREATE_NEW_ROW = 'CREATE_NEW_ROW';
export const DELETE_ROW = 'DELETE_ROW';
export const UPDATE_ROW = 'UPDATE_ROW';
export const SET_TABLE_WIDTH = 'SET_TABLE_WIDTH';
export const SET_ROW_FIELD = 'SET_ROW_FIELD';
export const SET_IS_BEING_EDITED = 'SET_IS_BEING_EDITED';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_IS_MENU_OPEN = 'SET_IS_MENU_OPEN';

export interface GetRowListAction {
  type: typeof GET_ROW_LIST;
  payload: {
    value: RowListType;
  };
}

export interface CreateNewRowAction {
  type: typeof CREATE_NEW_ROW;
  payload: {
    value: RowInterface;
    parent_id: number | null;
  };
}

export interface DeleteRowAction {
  type: typeof DELETE_ROW;
  payload: {
    value: number;
  };
}

export interface SetTableWidthAction {
  type: typeof SET_TABLE_WIDTH;
  payload: {
    value: number;
  };
}

export interface SetRowFieldAction {
  type: typeof SET_ROW_FIELD;
  payload: {
    field: ChangableFieldsType;
    value: number | string;
    row_id: number;
  };
}

export interface SetIsBeingEditedAction {
  type: typeof SET_IS_BEING_EDITED;
  payload: {
    value: boolean;
    row_id: number;
  };
}

export interface UpdateRowsFromResponseAction {
  type: typeof UPDATE_ROW;
  payload: {
    row_id: number | null;
    value: RowUpdateResponseInterface;
  };
}

export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  payload: {
    value: boolean;
  };
}

export interface SetIsMenuOpen {
  type: typeof SET_IS_MENU_OPEN;
  payload: {
    value: boolean;
  };
}

export type MainActions =
  | GetRowListAction
  | CreateNewRowAction
  | DeleteRowAction
  | SetTableWidthAction
  | SetRowFieldAction
  | SetIsBeingEditedAction
  | UpdateRowsFromResponseAction
  | SetIsMenuOpen
  | SetIsLoadingAction;

export type AppActions = MainActions;
