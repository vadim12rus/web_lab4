abstract class CShape implements IShape {
    private fillColor: string;
    private outlineColor: string;

    constructor(fillColor: string, outlineColor: string) {
        this.fillColor = fillColor;
        this.outlineColor = outlineColor;
    }
    public setOutlineColor(outlineColor: string): void {
        this.outlineColor = outlineColor;
    }

    public getOutlineColor(): string {
        return this.outlineColor;
    }

    public setFillColor(fillColor: string): void {
        this.fillColor = fillColor;
    }

    public getFillColor(): string {
        return this.fillColor;
    }
    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;

    public abstract draw(canvas: CCanvas): void;
}
