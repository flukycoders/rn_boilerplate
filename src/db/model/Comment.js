// model/Post.js
import {Model} from '@nozbe/watermelondb';
import {field, text} from '@nozbe/watermelondb/decorators';

export default class Comment extends Model {
  static table = 'comments';
  static associations = {
    posts: {type: 'belongs_to', key: 'post_id'},
  };
  @text('title') title;
  @text('post_id') postId;
  @field('is_spam') isSpam;
}
