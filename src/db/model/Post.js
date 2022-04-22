// model/Post.js
import {Model} from '@nozbe/watermelondb';
import {field, text, date, writer} from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
  static table = 'posts';
  // static associations = {
  //   comments: {type: 'has_many', foreignKey: 'post_id'},
  // };
  @text('title') title;
  @text('body') body;
  // @field('is_pinned') isPinned;
  @date('subtitle') subtitle;
  // @date('archived_at') archivedAt;

  @writer async addComment(data) {
    console.log(data);
    // const newComment = await this.collections
    //   .get('comments')
    //   .create(comment => {
    //     comment.post.set(this);
    //     comment.author.set(author);
    //     comment.body = body;
    //   });
    return data;
  }
}
