export declare type Callback = () => void;
export declare type Event = 'init' | 'scroll' | 'select' | 'dragStart' | 'dragEnd' | 'destroy' | 'resize';
export declare type EventDispatcher = {
    dispatch: (evt: Event) => EventDispatcher;
    on: (evt: Event, cb: Callback) => EventDispatcher;
    off: (evt: Event, cb: Callback) => EventDispatcher;
};
export declare function EventDispatcher(): EventDispatcher;
