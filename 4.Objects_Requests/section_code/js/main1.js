function FastCar(brand,color){
    this.brand = brand;
    this.color = color;
    this.seats = 2;
    this.available = function(){
        console.log(this.name + ' is not available');
    }
 }
 
var ford = new FastCar('Ford','Black')

//delete ford.seats;

// if('color' in ford){
//     console.log('has a color')
// }


for(var field in ford){
  if(field === 'brand' ){
    console.log(ford[field])
  }
}


