export interface MainState {
  is_menu_open: boolean;
  row_list: RowListType;
  table_width: number;
}

// =========================

export type ChangableFieldsType =
  | 'salary'
  | 'rowName'
  | 'equipmentCosts'
  | 'overheads'
  | 'estimatedProfit';

export interface RowInterface {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: RowListType;
  isBeingEdited?: boolean;
  isNew?: boolean;
  parentId?: number | null;
}

export type RowListType = RowInterface[];

const mainInitState: MainState = {
  is_menu_open: false,
  row_list: [],
  table_width: 0,
};

export default mainInitState;
