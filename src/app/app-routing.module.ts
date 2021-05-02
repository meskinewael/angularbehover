import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DynamiqueDataTableComponent } from './dynamique-data-table/dynamique-data-table.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';


const routes: Routes = [
  {path:'',component :AppComponent},
  {path:'addArticle',component: AddArticleComponent},
  {path:'listArticle',component: ListeArticleComponent},
  {path:'listBlog',component:BlogListComponent},
  {path:'addPost', component:AddPostComponent},
  {path:'dynamic', component:DynamiqueDataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
