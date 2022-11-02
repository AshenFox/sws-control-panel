import {
  GET_ROW_LIST,
  CREATE_NEW_ROW,
  SAVE_NEW_ROW,
  DELETE_ROW,
  UPDATE_ROW,
  MainActions,
  SET_TABLE_WIDTH,
  SET_ROW_FIELD,
} from '../../types/types';
import initialState, {
  ChangableFieldsType,
  MainState,
  RowInterface,
  RowListType,
} from './mainInitState';

const mainReducer = (state = initialState, action: MainActions): MainState => {
  const { payload, type } = action;

  switch (type) {
    case GET_ROW_LIST:
      return {
        ...state,
        row_list: payload.value,
      };

    case SET_TABLE_WIDTH:
      return {
        ...state,
        table_width: payload.value,
      };

    case CREATE_NEW_ROW:
      return {
        ...state,
        row_list: crateNewRowHelper(state.row_list, payload.parent_id, payload.value),
      };

    case SET_ROW_FIELD:
      return {
        ...state,
        row_list: setRowFieldHelper(
          state.row_list,
          payload.field,
          payload.value,
          payload.row_id
        ),
      };

    case SAVE_NEW_ROW:
      return { ...state };

    case DELETE_ROW:
      return { ...state };

    case UPDATE_ROW:
      return { ...state };

    default:
      return state;
  }
};

export default mainReducer;

const crateNewRowHelper = (
  row_list: RowListType,
  parent_id: number | null,
  new_row: RowInterface
): RowListType => {
  if (parent_id)
    return row_list.map((row) => {
      const { child, id } = row;

      if (parent_id === id) {
        return {
          ...row,
          child: [...row.child, new_row],
        };
      }

      if (child.length) {
        return {
          ...row,
          child: crateNewRowHelper(child, parent_id, new_row),
        };
      }

      return row;
    });

  return [...row_list, new_row];
};

const setRowFieldHelper = (
  row_list: RowListType,
  field: ChangableFieldsType,
  value: number | string,
  row_id: number
): RowListType => {
  return row_list.map((row) => {
    const { child, id } = row;

    if (row_id === id) {
      return {
        ...row,
        [field]: value,
      };
    }

    if (child.length) {
      return {
        ...row,
        child: setRowFieldHelper(child, field, value, row_id),
      };
    }

    return row;
  });
};
