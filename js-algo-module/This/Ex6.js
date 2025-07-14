const coffeeShop = {
  beans: 40,
  money:100,

  drinkRequirements: {
    latte: {beanRequirement: 10, price:5},
    americano: {beanRequirement: 5,price:10},
    doubleShot: {beansRequirement: 15, price:15},
    frenchPress: {beanRequirement: 12,price:20}
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]) {
      if (this.drinkRequirements[drinkType].beanRequirement <= this.beans) {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
      } else {
        console.log("Sorry, we're all out of beans");
      }
    } else {
      console.log("Sorry, we don't make filtered");
    }
  },
  buyBeans:function(numBeans){
    this.money -= numBeans;
    this.beans  += numBeans;
  },

  buyDrink: function(drinkType){
        this.money += this.drinkRequirements[drinkType].price;
        this.makeDrink(drinkType);
  }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
