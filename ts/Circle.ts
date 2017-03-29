const CIRCLE_FILL_COLOR: string = "#00000";
const CIRCLE_OUTLINE_COLOR: string = "#00000";
const CENTER_X: number = 10;
const CENTER_Y: number = 10;
const CIRCLE_RADIUS: number = 55;

class CCircle extends CShape {
    private centerX: number;
    private centerY: number;
    private radius: number;

    constructor(x: number = CENTER_X, y: number = CENTER_Y, radius: number = CIRCLE_RADIUS,
                fillColor: string = CIRCLE_FILL_COLOR, outlineColor: string = CIRCLE_OUTLINE_COLOR) {
        super(fillColor, outlineColor);
        this.centerX = x;
        this.centerY = y;
        this.radius = radius;
    }

    public calculateArea(): number {
        return Number((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
    }
    public getCenterX(): number {
        return this.centerX;
    }
    public getCenterY(): number {
        return this.centerY;
    }
    public getRadius(): number {
        return this.radius;
    }
    public calculatePerimeter(): number {
        return Number((2 * Math.PI * this.radius).toFixed(2));
    }
    public draw(canvas: CCanvas): void {
        canvas.drawCircle(this.radius, this.centerX, this.centerY, this.getFillColor(), this.getOutlineColor());
    }
    public setCenterX(x: number) {
        this.centerX = x;
    }
    public setCenterY(y: number) {
        this.centerY = y;
    }
    public setRadius(radius: number) {
        this.radius = radius;
    }
}
