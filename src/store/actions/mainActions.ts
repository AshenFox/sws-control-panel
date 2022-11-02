import {
  ChangableFieldsType,
  RowListType,
  RowInterface,
} from './../reducers/main/mainInitState';
import {
  AppActions,
  GET_ROW_LIST,
  CREATE_NEW_ROW,
  SAVE_NEW_ROW,
  DELETE_ROW,
  UPDATE_ROW,
  SET_TABLE_WIDTH,
  SET_ROW_FIELD,
} from '../types/types';
import { ThunkActionApp } from '../store';
import { api_url, token } from '../../helpers/values';

// SET_TABLE_WIDTH
export const set_table_width = (value: number): AppActions => ({
  type: SET_TABLE_WIDTH,
  payload: {
    value,
  },
});

// GET_ROW_LIST
export const get_row_list = () => <ThunkActionApp>(async (dispatch, getState) => {
    try {
      const options: RequestInit = {
        method: 'GET',
      };

      const response = await fetch(api_url + token + '/row/list', options);

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err);
      }

      const data = (await response.json()) as RowListType;

      dispatch({
        type: GET_ROW_LIST,
        payload: {
          value: data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

// CREATE_NEW_ROW
export const create_new_row = (parent_id: number | null): AppActions => ({
  type: CREATE_NEW_ROW,
  payload: {
    parent_id,
    value: {
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
    },
  },
});

// SAVE_NEW_ROW
export const save_new_row = (row: RowInterface) => <ThunkActionApp>(async (
    dispatch,
    getState
  ) => {
    try {
      const options: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(row),
      };

      const response = await fetch(api_url + token + '/row/create', options);

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err);
      }

      const data = await response.json();

      console.log(data);

      /* dispatch({
      type: GET_ROW_LIST,
      payload: {
        value: data,
      },
    }); */
    } catch (err) {
      console.log(err);
    }
  });

// DELETE_ROW
export const delete_row = (id: number) => <ThunkActionApp>(async (dispatch, getState) => {
    try {
      const options: RequestInit = {
        method: 'DELETE',
      };

      const response = await fetch(api_url + token + '/row/' + id + '/delete', options);

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err);
      }

      const data = await response.json();

      console.log(data);

      /* dispatch({
    type: GET_ROW_LIST,
    payload: {
      value: data,
    },
  }); */
    } catch (err) {
      console.log(err);
    }
  });

// SET_ROW_FIELD
export const set_row_field = (
  field: ChangableFieldsType,
  value: number | string,
  row_id: number
): AppActions => ({
  type: SET_ROW_FIELD,
  payload: {
    field,
    value,
    row_id,
  },
});

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
