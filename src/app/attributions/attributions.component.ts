import { Component, OnInit } from '@angular/core';

interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-attributions',
  templateUrl: './attributions.component.html',
  styleUrls: ['./attributions.component.scss']
})
export class AttributionsComponent implements OnInit {
  comments: Comment[] = [];
  newCommentName = '';
  newCommentMessage = '';

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    const stored = localStorage.getItem('familyComments');
    if (stored) {
      this.comments = JSON.parse(stored).map((comment: any) => ({
        ...comment,
        timestamp: new Date(comment.timestamp)
      }));
    }
  }

  saveComments() {
    localStorage.setItem('familyComments', JSON.stringify(this.comments));
  }

  addComment() {
    if (this.newCommentName.trim() && this.newCommentMessage.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        name: this.newCommentName.trim(),
        message: this.newCommentMessage.trim(),
        timestamp: new Date()
      };
      
      this.comments.unshift(comment);
      this.saveComments();
      
      this.newCommentName = '';
      this.newCommentMessage = '';
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

