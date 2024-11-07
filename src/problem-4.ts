type Circle = {
  shape: string;
  radius: number;
};
type Rectangle = {
  shape: string;
  width: number;
  height: number;
};
type CircleAndRectangle = Circle | Rectangle;

const isCircle = (shape: CircleAndRectangle): shape is Circle => {
  return shape.shape === "circle";
};
const isRectangle = (shape: CircleAndRectangle): shape is Rectangle => {
  return shape.shape === "rectangle";
};

const calculateShapeArea = (shape: CircleAndRectangle) => {
  if (isCircle(shape)) {
    return Number((Math.PI * shape.radius * shape.radius).toFixed(2));
  } else if (isRectangle(shape)) {
    return shape.width * shape.height;
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  height: 4,
  width: 6,
});
console.log(rectangleArea);
