import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent {
  students: Student[] = [
    new Student("Jesus",31,false),
    new Student("Cecilia",32,true),
    new Student("Jose",38,false),
    new Student("Javier",37,true),
    new Student("Ivan",40,true),
    new Student("Gonzalo",43,true),
    new Student("Nicolas",32,false)
  ]
}
