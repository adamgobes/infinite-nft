import { FunctionComponent } from 'react';
interface GridItemProps {
    columnIndex: number;
    rowIndex: number;
    style: any;
}
declare type GridItemRendererType = (data: any, columns: number, gutter: number, padding: number) => FunctionComponent<GridItemProps>;
export declare const GridItemRenderer: GridItemRendererType;
export {};
