import {Comment} from '@readme/shared-types';

export class BlogCommentEntity implements Comment {
  public commentText: string;
  public postId: string;
  public userId: string;
  public commentId?: string;

  constructor (blogComment: Comment) {
    this.fillEntity(blogComment);
  }

  public toObject() {
    return {...this};
  }



  public fillEntity(blogComment: Comment) {
    this.commentText = blogComment.commentText,
    this.postId = blogComment.postId,
    this.userId = blogComment.userId,
    this.commentId = blogComment.commentId;
  }

}
