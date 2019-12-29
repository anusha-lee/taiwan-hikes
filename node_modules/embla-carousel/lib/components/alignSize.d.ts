export declare type Alignments = 'start' | 'center' | 'end';
declare type Params = {
    viewSize: number;
    align: Alignments;
};
export declare type AlignSize = {
    measure: (n: number) => number;
};
export declare function AlignSize(params: Params): AlignSize;
export {};
