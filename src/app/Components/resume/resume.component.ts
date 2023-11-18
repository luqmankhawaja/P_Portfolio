import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  isExperienceOpen: boolean= false;
  isSummaryOpen: boolean= false;
  isEducation: boolean= false;
  isSkillOpen: boolean= false;
  isInterests: boolean= false;


  constructor(private titleService:Title, private renderer:Renderer2 ) {
    this.titleService.setTitle("Luqman-resume");
  }

downloadPdf(){
  const link=this.renderer.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href','../../../assets/resume.pdf');
  link.setAttribute('download','resume.pdf');
  link.click();
  link.remove()
  
}
  ngOnInit(): void { }

}
