import { AlignSize } from './alignSize';
declare type Params = {
    snapSizes: number[];
    alignSize: AlignSize;
    loop: boolean;
};
export declare type ScrollSnap = {
    measure: (snapSize: number, index: number) => number;
};
export declare function ScrollSnap(params: Params): ScrollSnap;
export {};
