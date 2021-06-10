import { Component, Input, OnInit } from '@angular/core';
import { HttpPostsService } from 'src/app/posts/http-posts.service';
import { Post } from 'src/app/models/post';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  title = 'Lista postów';
  posts!: Observable<Post[]> ;
  lenght: number  = 50;
  
  constructor(private http: HttpPostsService) { }

  //  getPostsList() {
  //    this.http.getPosts().subscribe();
  //  }
  ngOnInit() {
    this.posts = this.http.getPostsList();   
  }

}
