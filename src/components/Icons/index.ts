import { FC } from 'react';
import ArrowDown from './ArrowDown';
import Back from './Back';
import Document from './Document';
import FolderOne from './FolderOne';
import FolderTwo from './FolderTwo';
import Menu from './Menu';
import Tiles from './Tiles';
import TrashBin from './TrashBin';

export type IconType =
  | 'arrow_down'
  | 'back'
  | 'document'
  | 'folder_one'
  | 'folder_two'
  | 'menu'
  | 'tiles'
  | 'trashbin';

type IconsType = Record<IconType, FC>;

const Icons: IconsType = {
  arrow_down: ArrowDown,
  back: Back,
  document: Document,
  folder_one: FolderOne,
  folder_two: FolderTwo,
  menu: Menu,
  tiles: Tiles,
  trashbin: TrashBin,
};

export default Icons;
