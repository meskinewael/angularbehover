import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogpost } from './Modules/Blogpost';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url="http://127.0.0.1:8080/blogposts/v1/";
  constructor(private http:HttpClient) { 

  }

  createBlogpost(post: Blogpost[]) 
  {
    return this.http.post(this.url,post);
  }
  getBlogpost():Observable<Blogpost[]>
  {
    return this.http.get<Blogpost[]>(this.url);
  
  }
  
  updateBlogpost(blogpost: Blogpost) {
    return this.http.put(this.url, blogpost);
  }

  deleteBlogpost(id: string){
    return this.http.delete(`${this.url}?_id=${id}`);
  }
}
