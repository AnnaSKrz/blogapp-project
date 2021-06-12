import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpPostsService } from '../http-posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  public postId = this.activatedRoute.snapshot.params.postId;

  public postDetails = this.http.getPost(this.postId);
  
  constructor( 
    private activatedRoute: ActivatedRoute,
    private http: HttpPostsService, 
    private location: Location
    ) { }

    ngOnInit(){
     
    }

  goToPostsList(){
    this.location.back();
  }
  delete(){
    this.http.deletePost(this.postId).subscribe();
    this.location.back();
  }
  

}
