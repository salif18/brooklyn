const magassin = []
class Products {
  constructor(id,name,price,vendu){
    this.id=id;
    this.name=name;
    this.price=price;
    this.vendu=vendu
  }
}
const phone1 = new Products(1,'iphone X',350,'minus')
const phone2 = new Products(2,'iphone 11',600,'more')
const phone3 = new Products(3,'iphone 8',350,'minus')
const phone4 = new Products(4,'iphone xr',500,'more')
const phone5 = new Products(5,'iphone 7',250,'minus')
const phone6 = new Products(6,'iphone Xsmax',460,'more')
const phone7 = new Products(7,'iphone 6',150,'minus')
const phone8 = new Products(8,'iphone 6plus',100,'minus')
const phone9 = new Products(9,'iphone 8s',200,'minus')
const phone10 = new Products(10,'iphone 13',800,'more')
const phone11 = new Products(11,'iphone 14',1350,'minus')
const phone12 = new Products(12,'iphone 12 pro',650,'more')

magassin.push(phone1,phone2,phone3,phone4,phone5,phone6,
phone7,phone8,phone9,phone10,phone11,phone12)

magassin.filter((x)=> x.vendu === 'more').map((a)=>console.log(a))