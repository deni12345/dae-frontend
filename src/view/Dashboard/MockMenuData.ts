export const mockSheet = {
  sheet: "Happy Party",
  menu: {
    foods: [
      { name: "Pizza 1", price: 10 },
      { name: "Burger 2", price: 8 },
      { name: "Salad 3", price: 5 },
      { name: "Burger 4", price: 8 },
      { name: "Salad 5", price: 5 },
      { name: "Pizza 6", price: 10 },
      { name: "Burger 7", price: 8 },
      { name: "Salad 8", price: 5 },
      { name: "Burger 9", price: 8 },
      { name: "Salad 10", price: 5 },
      { name: "Pizza 11", price: 10 },
      { name: "Burger 12", price: 8 },
      { name: "Salad 13", price: 5 },
      { name: "Pizza 14", price: 10 },
      { name: "Burger 15", price: 8 },
    ],
    drinks: [
      { name: "Coke", price: 2 },
      { name: "Water", price: 1 },
      { name: "Beer", price: 5 },
    ],
    drinkToppings: [
      { name: "Lemon", price: 0.5 },
      { name: "Mint", price: 1 },
      { name: "Ice", price: 0.2 },
    ],
  },
};

export type Menu = typeof mockSheet.menu;
export type MenuType = keyof Menu;
// export type MenuType = typeof mockSheet.menu.foods;
