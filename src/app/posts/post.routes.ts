import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';


export const postRoutes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'posts', component: PostsListComponent},
    {path:'posts/add', component: AddPostFormComponent},
    {path: 'posts/:postId', component: PostDetailsComponent},
    {path: '**', component: PageNotFoundComponent},
]