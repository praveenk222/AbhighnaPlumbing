import { Component } from '@angular/core';
interface InventoryItem {
  title: string;
  stock: number;
  price: number;
}

interface TabData {
  itemName: string;
  quantity: number;
  location: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  displayedColumns: string[] = ['itemName', 'quantity', 'location'];

  inventoryItems: InventoryItem[] = [
    { title: 'Item 1', stock: 10, price: 100 },
    { title: 'Item 2', stock: 20, price: 150 },
    { title: 'Item 3', stock: 15, price: 200 },
    { title: 'Item 4', stock: 25, price: 250 },
  ];

  tabData1: TabData[] = [
    { itemName: 'Item 1', quantity: 5, location: 'Warehouse A' },
    { itemName: 'Item 2', quantity: 8, location: 'Warehouse B' },
  ];

  tabData2: TabData[] = [
    { itemName: 'Item 3', quantity: 10, location: 'Warehouse C' },
    { itemName: 'Item 4', quantity: 12, location: 'Warehouse D' },
  ];

  tabData3: TabData[] = [
    { itemName: 'Item 5', quantity: 20, location: 'Warehouse E' },
    { itemName: 'Item 6', quantity: 25, location: 'Warehouse F' },
  ];
}
