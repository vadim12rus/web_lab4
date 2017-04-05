const TRIANGLE_FILL_COLOR: string = "#00FF00";
const TRIANGLE_OUTLINE_COLOR: string = "#00FF00";
const TRIANGLE_X1: number = 0;
const TRIANGLE_Y1: number = 0;
const TRIANGLE_X2: number = 100;
const TRIANGLE_Y2: number = 100;
const TRIANGLE_X3: number = 100;
const TRIANGLE_Y3: number = -100;

class CTriangle extends CShape {
    private x1: number;
    private x2: number;
    private x3: number;

    private y1: number;
    private y2: number;
    private y3: number;

    constructor(x1: number = TRIANGLE_X1, y1: number = TRIANGLE_Y1,
                x2: number = TRIANGLE_X2, y2: number = TRIANGLE_Y2,
                x3: number = TRIANGLE_X3, y3: number = TRIANGLE_Y3,
                fillColor: string = TRIANGLE_FILL_COLOR, outlineColor: string = TRIANGLE_OUTLINE_COLOR) {
        super(fillColor, outlineColor);
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;

    }

    public setCoordinates(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void {
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;
    }

    public calculatePerimeter(): number {
        let firstSide: number = this.hypot(this.x1 - this.x2, this.y1 - this.y2);
        let secondSide: number = this.hypot(this.x2 - this.x3, this.y2 - this.y3);
        let thirdSide: number = this.hypot(this.x1 - this.x3, this.y1 - this.y3);
        return Number((firstSide + secondSide + thirdSide).toFixed(2));
    }

    public calculateArea(): number {
        let semiPerimeter: number = this.calculatePerimeter() / 2;
        let firstSide: number = this.hypot(this.x1 - this.x2, this.y1 - this.y2);
        let secondSide: number = this.hypot(this.x2 - this.x3, this.y2 - this.y3);
        let thirdSide: number = this.hypot(this.x1 - this.x3, this.y1 - this.y3);
        let area: number = Math.sqrt(semiPerimeter * (semiPerimeter - firstSide) *
                                    (semiPerimeter - secondSide) * (semiPerimeter - thirdSide));
        return Number(area.toFixed(2));
    }

    public draw(canvas: CCanvas): void {
        canvas.drawTriangle(
            this.x1, this.y1,
            this.x2, this.y2,
            this.x3, this.y3,
            this.getFillColor(), this.getOutlineColor());
    }

    private hypot(x: number, y: number): number {
        return Math.sqrt(x * x + y * y);
    }
}
