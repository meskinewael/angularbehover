import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { MaterialModule } from './material/material.module';
import { ArticleFormDialogComponent } from './article-form-dialog/article-form-dialog.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BlogformComponent } from './blogform/blogform.component';
import { RemoveFormComponent } from './remove-form/remove-form.component';
import { DynamiqueDataTableComponent } from './dynamique-data-table/dynamique-data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeArticleComponent,
    AddArticleComponent,
    ArticleFormDialogComponent,
    ShowArticleComponent,
    BlogListComponent,
    AddPostComponent,
    BlogformComponent,
    RemoveFormComponent,
    DynamiqueDataTableComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
