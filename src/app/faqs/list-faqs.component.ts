import { Component, OnInit } from '@angular/core';
import {Faq} from '../models/faq';
import {FaqService} from '../services/faq.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-list-faqs',
  templateUrl: './list-faqs.component.html',
  styleUrls: ['./list-faqs.component.css']
})
export class ListFaqsComponent implements OnInit {
  faqs:Faq[];
  constructor(
    private service:FaqService, 
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.loadFaqs();
  }

  registerIcons(){
    this.matIconRegistry.addSvgIcon('plusIcon',
    this.domSanitizer.bypassSecurityTrustResourceUrl('../supporting-files/plus-icon.svg')
    );
  }

  loadFaqs(){
    this.service.getFaqs().subscribe(data=> {
      this.faqs = data as Faq[];
    });
  }
}