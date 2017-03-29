class CCanvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D ;

    constructor() {
        this.canvas = <HTMLCanvasElement> document.getElementById("drawing_area");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.scale(1, -1);
    }

    public clear(): void {
        this.ctx.clearRect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height);
    }

    public drawText(perimeter: number, area: number): void {
        let TEXT_COORDINATE_X: number = -150;
        let TEXT_COORDINATE_Y: number = 240;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.font = "20px Arial";
        this.ctx.scale(1, -1);
        this.ctx.fillStyle = "#000";
        this.ctx.fillText("Perimeter = " + perimeter.toString() + " Area = " + area.toString(),
                        TEXT_COORDINATE_X, TEXT_COORDINATE_Y);
        this.ctx.restore();
    }

    public drawCircle(radius: number, centerX: number, centerY: number, fillColor: string, outlineColor: string): void {
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        this.ctx.strokeStyle = outlineColor;
        this.ctx.stroke();
    }

    public drawRectangle(x1: number, y1: number, x2: number, y2: number,
                         fillColor: string, outlineColor: string): void {
        this.ctx.beginPath();
        this.ctx.rect(x1, y1, x2 - x1, y2 - y1);
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        this.ctx.strokeStyle = outlineColor;
        this.ctx.stroke();
    }

    public drawTriangle(x1: number, y1: number, x2: number,
                        y2: number, x3: number, y3: number,
                        fillColor: string, outlineColor: string): void {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.closePath();
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        this.ctx.strokeStyle = outlineColor;
        this.ctx.stroke();
    }
}
