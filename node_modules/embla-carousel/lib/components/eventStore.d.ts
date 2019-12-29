declare type EventHandler = (evt: Event) => void;
declare type EventOptions = AddEventListenerOptions | boolean;
export declare type EventStore = {
    add: (node: EventTarget, type: string, handler: EventHandler, options?: EventOptions) => EventStore;
    removeAll: () => EventStore;
};
export declare function EventStore(): EventStore;
export {};
