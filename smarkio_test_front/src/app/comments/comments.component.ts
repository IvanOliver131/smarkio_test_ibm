import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/svc/comment/comments';
import { CommentsService } from 'src/svc/comment/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  commentsLst: Comments[];
  comment: string;

  constructor(
    private commentsSvc: CommentsService
  ) { }

  ngOnInit() {
    //Callying functions
    this.getAllComments();
  }

  addOneComment(comment) {
    if (comment == undefined || comment == '') {
      console.log('informe algum comentário')
    }
    else {
      this.commentsSvc.addComments(comment).subscribe(() => {
        this.getAllComments();
      },
        (err) => {
          console.log('ERROR')
        });
    }
  }

  getAllComments() {
    this.commentsSvc.getComments().subscribe(
      result => {
        this.commentsLst = result
      });
  }

  getVoiceComments(params: string) {
    this.commentsSvc.getVoiceComments(params)
  }

}
