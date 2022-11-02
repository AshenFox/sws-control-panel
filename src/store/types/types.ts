import { ChangableFieldsType, RowInterface } from './../reducers/main/mainInitState';
import { RowListType } from '../reducers/main/mainInitState';

// =======================
export const GET_ROW_LIST = 'GET_ROW_LIST';
export const CREATE_NEW_ROW = 'CREATE_NEW_ROW';
export const SAVE_NEW_ROW = 'SAVE_NEW_ROW';
export const DELETE_ROW = 'DELETE_ROW';
export const UPDATE_ROW = 'UPDATE_ROW';
export const SET_TABLE_WIDTH = 'SET_TABLE_WIDTH';
export const SET_ROW_FIELD = 'SET_ROW_FIELD';

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

export interface SaveNewRowAction {
  type: typeof SAVE_NEW_ROW;
  payload: {
    value: RowInterface;
  };
}

export interface DeleteRowAction {
  type: typeof DELETE_ROW;
  payload: {
    value: number;
  };
}

export interface UpdateRowAction {
  type: typeof UPDATE_ROW;
  payload: {
    value: boolean;
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

//

/* 


id: Math.random() * 10 ** 17,
      rowName: '',
      total: 0,
      salary: 0,
      mimExploitation: 0,
      machineOperatorSalary: 0,
      materials: 0,
      mainCosts: 0,
      supportCosts: 0,
      equipmentCosts: 0,
      overheads: 0,
      estimatedProfit: 0,
      child: [],
      isBeingEdited: true,
      isNew: true,
      parentId: parent_id,

*/

export type MainActions =
  | GetRowListAction
  | CreateNewRowAction
  | SaveNewRowAction
  | DeleteRowAction
  | UpdateRowAction
  | SetTableWidthAction
  | SetRowFieldAction;

/* 
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
} */

export type AppActions = MainActions;
