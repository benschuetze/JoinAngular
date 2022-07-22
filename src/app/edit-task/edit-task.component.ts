import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  categories: string[] = [
    'IT',
    'Management',
    'Controlling',
    'UX/Design',
    'Support',
    'Maintenance'
  ];

  urgencies: string[] = [
    'Low',
    'Medium',
    'High'
  ]

  date = new Date(this.data['task']['date']['seconds']);

  constructor(public dialogRef:MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
