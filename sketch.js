var weight  = [35,38,40,45];

function setup() 
{
  createCanvas(400,400);
  var sum = weight[0] + weight[1] + weight[2] + weight[3] ;
  var average = sum / weight.length;
  console.log(sum);
  console.log(average);
  console.log(weight);
  console.log(weight[2]);
}

function draw() 
{
background(51);

}

