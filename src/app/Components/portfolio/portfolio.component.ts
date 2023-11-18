import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from 'src/app/Services/projects.service';
import { Project } from 'src/app/_models/Project';
import { Tag } from 'src/app/_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects={} as Project[];
  isCollapsed:boolean=true;
  typescript:boolean=false;
  angular:boolean=false;
  html:boolean=false;
  css:boolean=false;
  firebase:boolean=false;

  constructor(private titleService:Title, private projectService:ProjectsService) {
    this.titleService.setTitle("Luqman-portfolio");
  }

  filter(){
    let filterTags:Tag[]=[];
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.html){
      filterTags.push(Tag.HTML)
    }
    if(this.css){
      filterTags.push(Tag.CSS)
    }
    if(this.firebase){
      filterTags.push(Tag.FIREBASE)
    }

    this.projects=this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilter(){
    this.angular=false;
    this.firebase=false;
    this.html=false;
    this.typescript=false;

    this.projects=this.projectService.getProjects();
  }
  ngOnInit(): void {
    this.projects=this.projectService.getProjects();
  }

}
