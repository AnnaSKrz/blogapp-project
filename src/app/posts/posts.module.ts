import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PostItemComponent } from './post-item/post-item.component';
import { RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { postRoutes } from './post.routes';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AddPostConfirmComponent } from './add-post-form/add-post-confirm/add-post-confirm.component';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    PostsListComponent,
    AddPostFormComponent,
    PostItemComponent,
    PostDetailsComponent,
    AddPostConfirmComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatBottomSheetModule,
    MatListModule,
    RouterModule.forChild(postRoutes)
  ]
})
export class PostsModule { }
