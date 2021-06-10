import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpPostsService  {  
 
  private url: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  // public getPosts(): Observable<Post[]>{
  //   return this.http.get<Post[]>(this.url +'/posts').pipe(tap(console.log));
  // }
  public getPostsList(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url );
  }

  public getPost(id: string): Observable<Post>{
    return this.http.get<Post>(this.url +'/'+ id);
  }

  public postPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.url, post);
  } 

  public deletePost(id: string): Observable<{}>{
    return this.http.delete(this.url + '/' + id).pipe(
      tap(console.log)
    )
  }

}
