import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comments } from '../comment/comments'
import { Observable } from 'rxjs';

import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsUrl = "http://localhost:3000/comments"
  commentsVoiceUrl = "http://localhost:3000/speech?comment="

  constructor(private http: HttpClient) { }

  addComments(comment: string) {
    const obj = {
      descricao: comment
    }
    return this.http.post(`${this.commentsUrl}`, obj);
  }

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.commentsUrl}`);
  }

  getVoiceComments(comment: string) {
    const sound = new Howl({
      src: `${this.commentsVoiceUrl}${comment}`,
      html5: true,
    });
    sound.play();

  }
}
