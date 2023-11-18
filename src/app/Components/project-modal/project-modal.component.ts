import { Project } from 'src/app/_models/Project';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {
  project={} as Project;
  constructor(public BsModalRef:BsModalRef) { }

  ngOnInit(): void {
  }

}
