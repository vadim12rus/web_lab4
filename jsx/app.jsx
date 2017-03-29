var App = React.createClass ({
   render: function() {
      return (
         <div className="container">
            <div className="menu col-md-4">
                <ShapeSettingsForm/>
            </div>
            <Canvas/>
            <div className="clear"></div>
         </div>
      );
   }
});

var ShapeSettingsForm = React.createClass ({
   render() {
      return (
         <form className="form-signin" id="settings-form">
            <BasicSettings/>
            <CircleSettings/>
            <TriangleSettings/>
            <RectangleSettings/>
            <ButtonBlock/>
         </form>
      );
   }
});

var BasicSettings = React.createClass ({
    render() {
        return (
            <div>
			    <div className="shape_type">
				    <select id="shape_type" onchange="updateShapeSetting()">
						<option value="circle">
		    				Circle
			    		</option>
     					<option value="triangle">
    						Triangle
	    				</option>
		    			<option value="rectangle">
			    			Rectangle
    			    	</option>
				    </select>
	    		</div>
                <div>
                    <div className="color">
					    <label>Fill Color:</label> <input id="fill_color" placeholder=""></input>
				    </div>
                    <div className="color">
					    <label>Border Color:</label> <input id="border_color" placeholder=""></input>
				    </div>
                </div>
            </div>
        )
    }
});

var CircleSettings = React.createClass ({
    render() {
        return (
           <div className="circle" id="circle">
				<div className="radius">
					<label>Radius:</label> <input id="radius" placeholder="Radius"></input>
				</div>
				<div className="coordinate">
					<div>
						<label>CenterX:</label> <input id="centerX" placeholder="CenterX"></input>
					</div>
					<div>
						<label>CenterY:</label> <input id="centerY" placeholder="CenterY"></input>
					</div>
				</div>
			</div>
        )
    }
});

var TriangleSettings = React.createClass ({
    render() {
        return (
           <div className="triangle" id="triangle">
				<div className="coordinate">
					<div>
						<label>X1:</label> <input id="triangle_x1" placeholder=""></input>
					</div>
					<div>
						<label>Y1:</label> <input id="triangle_y1" placeholder=""></input>
					</div>
				</div>
				<div className="coordinate">
					<div>
						<label>X2:</label> <input id="triangle_x2" placeholder=""></input>
					</div>
					<div>
						<label>Y2:</label> <input id="triangle_y2" placeholder=""></input>
					</div>
				</div>
				<div className="coordinate">
					<div>
						<label>X3:</label> <input id="triangle_x3" placeholder=""></input>
					</div>
					<div>
						<label>Y3:</label> <input id="triangle_y3" placeholder=""></input>
					</div>
					<div className="clear"></div>
				</div>
			</div>
        )
    }
});

var RectangleSettings = React.createClass ({
    render() {
        return (
            <div className="rectangle" id="rectangle">
				<div className="coordinate">
					<div>
						<label>X1:</label> <input id="rectangle_x1" placeholder="X1"></input>
					</div>
					<div>
						<label>Y1:</label> <input id="rectangle_y1" placeholder="Y1"></input>
					</div>
				</div>
				<div className="coordinate">
					<div>
						<label>X2:</label> <input id="rectangle_x2" placeholder="X2"></input>
					</div>
					<div>
						<label>Y2:</label> <input id="rectangle_y2" placeholder="Y2"></input>
					</div>
				</div>
			</div>
        )
    }
});

var ButtonBlock = React.createClass({
    render() {
        return (
            <input class="submit" id="submit"  type="button" value="Отправить"></input>
        );
    }
});

var Canvas = React.createClass ({
   render() {
      return (
        <canvas className="col-md-8" height="500" id="drawing_area" width="650"></canvas>
      );
   }
});

ReactDOM.render(<App/>, document.getElementById('main'));