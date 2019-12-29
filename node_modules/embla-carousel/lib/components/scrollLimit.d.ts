import { ChunkSize } from './chunkSize';
import { Limit } from './limit';
declare type Params = {
    chunkSize: ChunkSize;
    contentSize: number;
    loop: boolean;
};
export declare type ScrollLimit = {
    measure: (scrollSnaps: number[]) => Limit;
};
export declare function ScrollLimit(params: Params): ScrollLimit;
export {};
