import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  addArticle : FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder , private ArticleService: ArticleService) { }

  ngOnInit(): void {
    this.addArticle = this.formBuilder.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      auteur: ['', Validators.required],
      date: ['', Validators.required],
      
    });
  }
  articleManager(){ 
    const ArticleList = this.addArticle.value;
  this.ArticleService.updatedDataSelection(ArticleList);
  }

}
