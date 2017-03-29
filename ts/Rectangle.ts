const RECTANGLE_FILL_COLOR: string = "#00000";
const RECTANGLE_OUTLINE_COLOR: string = "#00000";
const RECTANGLE_X1: number = 100;
const RECTANGLE_Y1: number = 100;
const RECTANGLE_X2: number = -100;
const RECTANGLE_Y2: number = -100;

class CRectangle extends CShape {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;
    constructor(x1: number = RECTANGLE_X1, y1: number = RECTANGLE_Y1,
                x2: number = RECTANGLE_X2, y2: number = RECTANGLE_Y2,
                fillColor: string = RECTANGLE_FILL_COLOR, outlineColor: string = RECTANGLE_OUTLINE_COLOR) {
        super(fillColor, outlineColor);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    public setCoordinates(x1: number, y1: number, x2: number, y2: number): void {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    public getWidth(): number {
        return Math.abs(this.x2 - this.x1);
    }

    public getHeight(): number {
        return Math.abs(this.y2 - this.y1);
    }

    public calculateArea(): number {
        return Number((this.getWidth() * this.getHeight()).toFixed(2));
    }

    public calculatePerimeter(): number {
        return Number((2 * (this.getWidth() + this.getHeight())).toFixed(2));
    }

    public draw(canvas: CCanvas): void {
        canvas.drawRectangle(this.x1, this.y1, this.x2, this.y2, this.getFillColor(), this.getOutlineColor());
    }
}
