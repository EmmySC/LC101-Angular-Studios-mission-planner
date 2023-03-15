import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string [] = ["Habitat dome", "Drones", "Food containers", "Oxygen tank"];

  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(name: string, item: string) {
      let index = this.equipment.indexOf(item);
      this.equipment[index] = name; 
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  add(itemName: string) {
    for (let item of this.equipment) {
      if (itemName === item)
      return;
    }
    this.equipment.push(itemName);
  }

}