export interface UpdatedRowInterface {
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
}

export type UpdatedRowListType = UpdatedRowInterface[];

export interface RowUpdateResponseInterface {
  current: UpdatedRowInterface;
  changed: UpdatedRowListType;
}
