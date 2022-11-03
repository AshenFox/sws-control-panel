import { RowUpdateResponseInterface } from '../../actions/types';
import {
  GET_ROW_LIST,
  CREATE_NEW_ROW,
  DELETE_ROW,
  UPDATE_ROW,
  MainActions,
  SET_TABLE_WIDTH,
  SET_ROW_FIELD,
  SET_IS_BEING_EDITED,
  SET_IS_LOADING,
  SET_IS_MENU_OPEN,
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

    case SET_IS_BEING_EDITED:
      return {
        ...state,
        row_list: setIsBeingEditedHelper(state.row_list, payload.value, payload.row_id),
      };

    case UPDATE_ROW:
      return {
        ...state,
        row_list: updateRowsFromResponseHelper(
          state.row_list,
          payload.row_id,
          payload.value
        ),
      };

    case DELETE_ROW:
      return { ...state, row_list: deleteRowHelper(state.row_list, payload.value) };

    case SET_IS_LOADING:
      return {
        ...state,
        is_loading: payload.value,
      };

    case SET_IS_MENU_OPEN:
      return {
        ...state,
        is_menu_open: payload.value,
      };

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

const setIsBeingEditedHelper = (
  row_list: RowListType,
  value: boolean,
  row_id: number
): RowListType => {
  return row_list.map((row) => {
    const { child, id } = row;

    if (row_id === id) {
      return {
        ...row,
        isBeingEdited: value,
      };
    }

    if (child.length) {
      return {
        ...row,
        child: setIsBeingEditedHelper(child, value, row_id),
      };
    }

    return row;
  });
};

const updateRowsFromResponseHelper = (
  row_list: RowListType,
  row_id: number | null,
  value: RowUpdateResponseInterface
): RowListType => {
  return row_list.map((row) => {
    const { child, id } = row;
    const { current, changed } = value;

    if (row_id === id) {
      return {
        ...row,
        ...current,
        isBeingEdited: false,
        isNew: false,
      };
    }

    const changed_row = changed.find(({ id: changed_row_id }) => changed_row_id === id);

    if (changed_row) {
      return {
        ...row,
        ...changed_row,
        isBeingEdited: false,
        isNew: false,
        child: updateRowsFromResponseHelper(child, row_id, value),
      };
    }

    if (child.length) {
      return {
        ...row,
        child: updateRowsFromResponseHelper(child, row_id, value),
      };
    }

    return row;
  });
};

const deleteRowHelper = (row_list: RowListType, row_id: number): RowListType => {
  return row_list.filter((row) => {
    const { child, id } = row;

    if (child.length) {
      row.child = deleteRowHelper(child, row_id);
    }

    return row_id !== id;
  });
};
