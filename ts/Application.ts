class CApplication {
    private canvas: CCanvas;
    constructor() {
        this.canvas = new CCanvas();
        this.setDefaultValueInMenuSetting();
        this.addEventListener();
    }

    public render(): void {
       let shape: CShape = this.getShape();
       shape.draw(this.canvas);
       this.canvas.drawText(shape.calculatePerimeter(), shape.calculateArea());
    }

    public getShapeType(): string {
        return (<HTMLInputElement> document.getElementById("shape_type")).value;
    }

    public setMenuSetting(): void {
            let triangleElement: HTMLElement = document.getElementById("triangle");
            let rectangleElement: HTMLElement = document.getElementById("rectangle");
            let circleElement: HTMLElement = document.getElementById("circle");
            triangleElement.style.display = "none";
            rectangleElement.style.display = "none";
            circleElement.style.display = "none";
            let shapeType: string = this.getShapeType();
            if (shapeType === "triangle") {
                triangleElement.style.display = "block";
            } else if (shapeType === "rectangle") {
                rectangleElement.style.display = "block";
            } else if (shapeType === "circle") {
                circleElement.style.display = "block";
            }
        }

    public getShape(): CShape {
        let shape: CShape;
        let shapeType: string = this.getShapeType();
        if (shapeType === "circle") {
            shape = this.getCircle();
        } else if (shapeType === "rectangle") {
            shape = this.getRectangle();
        } else if (shapeType === "triangle") {
            shape = this.getTriangle();
        }
        return shape;
    }

    public getValueForm(elementId: string, defaultValue: string): string {
        let value: string = (<HTMLInputElement> document.getElementById(elementId)).value;
        return (value === defaultValue) ? defaultValue : value;
    }

    public getCircle(): CShape {
        let circle: CCircle = new CCircle();
        circle.setFillColor(this.getValueForm("fill_color", CIRCLE_FILL_COLOR));
        circle.setOutlineColor(this.getValueForm("border_color", CIRCLE_OUTLINE_COLOR));
        circle.setCenterX(Number(this.getValueForm("centerX", CENTER_X.toString())));
        circle.setCenterY(Number(this.getValueForm("centerY", CENTER_Y.toString())));
        circle.setRadius(Number(this.getValueForm("radius", CIRCLE_RADIUS.toString())));
        return circle;
    }

    public getRectangle(): CShape {
        let rectangle: CRectangle = new CRectangle();
        rectangle.setFillColor(this.getValueForm("fill_color", RECTANGLE_FILL_COLOR));
        rectangle.setOutlineColor(this.getValueForm("border_color", RECTANGLE_OUTLINE_COLOR));
        let x1: number = Number(this.getValueForm("rectangle_x1", RECTANGLE_X1.toString()));
        let y1: number = Number(this.getValueForm("rectangle_y1", RECTANGLE_Y1.toString()));
        let x2: number = Number(this.getValueForm("rectangle_x2", RECTANGLE_X2.toString()));
        let y2: number = Number(this.getValueForm("rectangle_y2", RECTANGLE_Y2.toString()));
        rectangle.setCoordinates(x1, y1, x2, y2);
        return rectangle;
    }

    public getTriangle(): CShape {
        let triangle: CTriangle = new CTriangle();
        triangle.setFillColor(this.getValueForm("fill_color", TRIANGLE_FILL_COLOR));
        triangle.setOutlineColor(this.getValueForm("border_color", TRIANGLE_OUTLINE_COLOR));
        let x1: number = Number(this.getValueForm("triangle_x1", TRIANGLE_X1.toString()));
        let y1: number = Number(this.getValueForm("triangle_y1", TRIANGLE_Y1.toString()));
        let x2: number = Number(this.getValueForm("triangle_x2", TRIANGLE_X2.toString()));
        let y2: number = Number(this.getValueForm("triangle_y2", TRIANGLE_Y2.toString()));
        let x3: number = Number(this.getValueForm("triangle_x3", TRIANGLE_X3.toString()));
        let y3: number = Number(this.getValueForm("triangle_y3", TRIANGLE_Y3.toString()));
        triangle.setCoordinates(x1, y1, x2, y2, x3, y3);
        return triangle;
    }

    public setDefaultValueInMenuSetting(): void {
        let shapeType: string = this.getShapeType();
        if (shapeType === "circle") {
            ( <HTMLInputElement> document.getElementById("fill_color")).value = CIRCLE_FILL_COLOR;
            ( <HTMLInputElement> document.getElementById("border_color")).value = CIRCLE_OUTLINE_COLOR;
            ( <HTMLInputElement> document.getElementById("radius")).value = CIRCLE_RADIUS.toString();
            ( <HTMLInputElement> document.getElementById("centerX")).value = CENTER_X.toString();
            ( <HTMLInputElement> document.getElementById("centerY")).value = CENTER_Y.toString();
        } else if (shapeType === "rectangle") {
            ( <HTMLInputElement> document.getElementById("fill_color")).value = RECTANGLE_FILL_COLOR;
            ( <HTMLInputElement> document.getElementById("border_color")).value = RECTANGLE_OUTLINE_COLOR;
            ( <HTMLInputElement> document.getElementById("rectangle_x1")).value = RECTANGLE_X1.toString();
            ( <HTMLInputElement> document.getElementById("rectangle_y1")).value = RECTANGLE_Y1.toString();
            ( <HTMLInputElement> document.getElementById("rectangle_x2")).value = RECTANGLE_X2.toString();
            ( <HTMLInputElement> document.getElementById("rectangle_y2")).value = RECTANGLE_Y2.toString();
        } else if (shapeType === "triangle") {
            ( <HTMLInputElement> document.getElementById("fill_color")).value = TRIANGLE_FILL_COLOR;
            ( <HTMLInputElement> document.getElementById("border_color")).value = TRIANGLE_OUTLINE_COLOR;
            ( <HTMLInputElement> document.getElementById("triangle_x1")).value = TRIANGLE_X1.toString();
            ( <HTMLInputElement> document.getElementById("triangle_y1")).value = TRIANGLE_Y1.toString();
            ( <HTMLInputElement> document.getElementById("triangle_x2")).value = TRIANGLE_X2.toString();
            ( <HTMLInputElement> document.getElementById("triangle_y2")).value = TRIANGLE_Y2.toString();
            ( <HTMLInputElement> document.getElementById("triangle_x3")).value = TRIANGLE_X3.toString();
            ( <HTMLInputElement> document.getElementById("triangle_y3")).value = TRIANGLE_Y3.toString();
        }
    }

    public addEventListener(): void {
        document.getElementById("submit").addEventListener("click", () => {
            this.canvas.clear();
            this.render();
        });
        document.getElementById("shape_type").addEventListener("change", () => {
            this.canvas.clear();
            this.setMenuSetting();
            this.setDefaultValueInMenuSetting();
        });
    }
}

window.onload = (): void => {
    let application: CApplication = new CApplication();
    application.setMenuSetting();
};
