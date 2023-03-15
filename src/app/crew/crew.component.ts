import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  
  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    // for (let member of this.crew) {
    //   if (member['name'] === memberName) {   //BONUS: validation for not allowing duplicates
    //     return;
    //   }
    if (!this.memberExists(memberName)) {
      this.crew.push({name: memberName, firstMission: isFirst});
    }
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    if (!this.memberExists(name)) {
      member['name'] = name;
    }
    this.memberBeingEdited = null;
  }

//helper function: BONUS: don't allow duplicate names to be added to the crew
  memberExists(name: string): boolean {
    for (let i = 0; i < this.crew.length; i++) {  //array loop --> to check, if the person already exists in the Crew List
      if (this.crew[i]['name'] === name) {
        return true;
      }
    }
    return false;
  }

}
