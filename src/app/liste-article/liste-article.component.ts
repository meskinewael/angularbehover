import { Component, OnInit ,OnDestroy} from '@angular/core';
import {articlesData} from 'src/assets/articleList';
import {Articles} from '../Modules/Articles';
import {ArticleService} from '../article.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleFormDialogComponent } from '../article-form-dialog/article-form-dialog.component';
import { ShowArticleComponent } from '../show-article/show-article.component';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit ,OnDestroy {
  
  constructor(private ArticleService:ArticleService ,public dialog: MatDialog) { }
  dataSource  = new MatTableDataSource(articlesData);
  Article : Articles ={
    titre:"",
    contenu:"",
    auteur:"",
    date:"",
  }
  displayedColumns: string[] = ['titre', 'contenu', 'auteur', 'date','action'];
  Subscription: Subscription;
  ngOnInit(): void {
   this.Subscription= this.ArticleService.data.subscribe( data=>{
      if(Array.isArray(data)==false&&data){
        this.Article  = {
          titre:data['titre'],
          contenu:data['contenu'],
          auteur:data['auteur'],
          date:data['date']
         };
         
         articlesData.push(this.Article);
         
         this.dataSource  = new MatTableDataSource(articlesData);
        }
    })
  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }
  edit(data: Articles) {
   
    const dialogRef = this.dialog.open(ArticleFormDialogComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ArticleService.edit(result);
      }
    });
  }
  show(data: Articles) {
    
    const dialogRef = this.dialog.open(ShowArticleComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ArticleService.edit(result);
      }
    });
  }



}
