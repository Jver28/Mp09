var canvas = new fabric.Canvas('canvas');
canvas.selectionColor = 'rgba(0,255,0,0.3)';
canvas.selectionBorderColor = 'red';
canvas.selectionLineWidth = 5;

function mesaRedonda() {
    canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
}

function mesaCuadrada() {
    canvas.add(new fabric.Rect({ width: 60, height: 60, fill: '#55f', top: 150, left: 150 }));
}

function mesaRectangula() {
    canvas.add(new fabric.Rect({ width: 80, height: 40, fill: '#5f5', top: 200, left: 200 }));
}

function silla() {
    var triangle = new fabric.Triangle({ width: 50, height: 50, fill: '#ff5', top: 250, left: 250 });
    canvas.add(triangle);
}

function eliminar() {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.remove(activeObject);
    }
}