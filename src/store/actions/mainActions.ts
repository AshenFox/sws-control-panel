import {
  ChangableFieldsType,
  RowListType,
  RowInterface,
} from './../reducers/main/mainInitState';
import {
  AppActions,
  GET_ROW_LIST,
  CREATE_NEW_ROW,
  DELETE_ROW,
  UPDATE_ROW,
  SET_TABLE_WIDTH,
  SET_ROW_FIELD,
  SET_IS_BEING_EDITED,
  SET_IS_LOADING,
  SET_IS_MENU_OPEN,
} from '../types/types';
import { ThunkActionApp } from '../store';
import { api_url, token } from '../../helpers/values';
import { RowUpdateResponseInterface } from './types';

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

      dispatch(set_is_loading(true));

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

    dispatch(set_is_loading(false));
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

// UPDATE_ROW
export const update_row = (row: RowInterface) => <ThunkActionApp>(async (
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

      const { id, isNew } = row;

      const url = isNew
        ? api_url + token + '/row/create'
        : api_url + token + '/row/' + id + '/update';

      const response = await fetch(url, options);

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err);
      }

      const data = (await response.json()) as RowUpdateResponseInterface;

      dispatch({
        type: UPDATE_ROW,
        payload: {
          row_id: id,
          value: data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

// DELETE_ROW
export const delete_row = (id: number, isNew?: boolean) => <ThunkActionApp>(async (
    dispatch,
    getState
  ) => {
    try {
      if (!isNew) {
        const options: RequestInit = {
          method: 'DELETE',
        };

        const response = await fetch(api_url + token + '/row/' + id + '/delete', options);

        if (!response.ok) {
          const err = await response.text();
          throw new Error(err);
        }

        const data = await response.json();

        dispatch({
          type: DELETE_ROW,
          payload: {
            value: id,
          },
        });

        dispatch({
          type: UPDATE_ROW,
          payload: {
            row_id: null,
            value: data,
          },
        });
      } else {
        dispatch({
          type: DELETE_ROW,
          payload: {
            value: id,
          },
        });
      }
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

// SET_IS_BEING_EDITED
export const set_is_being_edited = (value: boolean, row_id: number): AppActions => ({
  type: SET_IS_BEING_EDITED,
  payload: {
    row_id,
    value,
  },
});

// ==================================================
// ==================================================
// ==================================================
// ==================================================
// ==================================================
