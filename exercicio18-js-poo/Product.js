class Product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    AddToStock(quantity){
        this.inStock += quantity;
    }

    CalculateDiscount(discount){
        return this.price * ((100-discount)/100)
    }
}

const watch = new Product("Relogio de Pulso", "descrição", 80)

watch.AddToStock(99)

const priceWithDiscount = watch.CalculateDiscount(15)

console.log(watch)
console.log(priceWithDiscount)
console.log(watch.CalculateDiscount(10))