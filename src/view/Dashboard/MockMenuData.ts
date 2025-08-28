export const mockSheetTabs = [
  {
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
  },
  {
    sheet: "Anniversary Celebration",
    menu: {
      foods: [
        { name: "Rice", price: 10 },
        { name: "Noodles", price: 8 },
        { name: "Salad", price: 5 },
      ],
      drinks: [
        { name: "Milk", price: 2 },
        { name: "Water", price: 1 },
        { name: "Juice", price: 5 },
      ],
      drinkToppings: [
        { name: "Lemon", price: 0.5 },
        { name: "Mint", price: 1 },
        { name: "Ice", price: 0.2 },
      ],
    },
  },
];

export type Sheet = (typeof mockSheetTabs)[0];
export type SheetMenu = (typeof mockSheetTabs)[0]["menu"];
export type MenuTab = keyof SheetMenu;
