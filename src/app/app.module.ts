import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { MaterialModule } from './material/material.module';
import { ArticleFormDialogComponent } from './article-form-dialog/article-form-dialog.component';
import { ShowArticleComponent } from './show-article/show-article.component';
@NgModule({
  declarations: [
    AppComponent,
    ListeArticleComponent,
    AddArticleComponent,
    ArticleFormDialogComponent,
    ShowArticleComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
