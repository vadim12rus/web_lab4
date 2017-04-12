import { CCanvas } from "./Canvas";
export interface IShape {
    calculateArea(): number;
    calculatePerimeter(): number;
    setFillColor(fillColor: string): void;
    getFillColor(): string;
    setOutlineColor(outlineColor: string): void;
    getOutlineColor(): string;
    draw(canvas: CCanvas): void;
}
