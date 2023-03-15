import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string [] = ["Mars soil sample", "Plant growth in habitat", "Human bone density"];
  experimentBeingEdited: string;

  constructor() { }

  ngOnInit() {
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  remove(experiment: string) {  
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  add(experimentName: string) {
    for (let experiment of this.experiments) {
      if (experimentName === experiment)
      return;
    }
    this.experiments.push(experimentName);
  }

  save(name: string, experiment: string) {
    let index = this.experiments.indexOf(experiment); //find indexOf in the array
    this.experiments[index] = name
  }

}

