export declare type ChunkSize = {
    measure: (n: number) => number;
    root: number;
};
export declare function ChunkSize(root: number): ChunkSize;
