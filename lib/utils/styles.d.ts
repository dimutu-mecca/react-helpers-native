export declare type PositionStyle = "relative" | "absolute";
declare type AddFlexOptions = {
    x: "left" | "center" | "right" | "stretch" | "space-between";
    y: "top" | "center" | "bottom" | "stretch" | "space-between";
    direction?: "right" | "down";
};
export declare function addFlex({ x, y, direction }: AddFlexOptions): {
    readonly display: "flex";
    readonly flexDirection: "row" | "column";
    readonly alignItems: "stretch" | "center" | "flex-start" | "flex-end";
    readonly justifyContent: "center" | "space-between" | "flex-start" | "flex-end";
};
declare type UseAbsoluteOptions = {
    left?: number | string;
    top?: number | string;
    bottom?: number | string;
    right?: number | string;
};
export declare function addAbsolute({ left, top, bottom, right, }?: UseAbsoluteOptions): {
    readonly left: string | number | undefined;
    readonly top: string | number | undefined;
    readonly bottom: string | number | undefined;
    readonly right: string | number | undefined;
    readonly position: "absolute";
};
export {};
