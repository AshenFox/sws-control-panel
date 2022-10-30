// export type Direction = 'left' | 'right';

export interface AddressType {
  value: string;
  unrestricted_value: string;
  data: any;
}

export type AddressListType = AddressType[];

export interface MainState {
  is_menu_open: boolean;
  is_loading: boolean;
  is_nothing_found: string;
  is_too_short: boolean;
  query: string;
  address_list: AddressListType;
}

// =========================

const mainInitState: MainState = {
  is_menu_open: false,
  is_loading: false,
  is_nothing_found: '',
  is_too_short: false,
  query: '',
  address_list: [],
};

export default mainInitState;
