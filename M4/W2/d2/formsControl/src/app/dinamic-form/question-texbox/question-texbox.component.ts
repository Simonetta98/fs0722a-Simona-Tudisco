import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; ////

@Component({
  selector: 'app-question-texbox',
  templateUrl: './question-texbox.component.html',
  styleUrls: ['./question-texbox.component.scss']
})
export class QuestionTexboxComponent implements OnInit {

  heroForm = new FormGroup ({
    name: new FormControl(''),
    weakness: new FormControl('')
  });

  preview: string = '';

  save() {
    this.preview = JSON.stringify(this.heroForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}


