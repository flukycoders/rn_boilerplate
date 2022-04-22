// model/schema.js
import {appSchema, tableSchema} from '@nozbe/watermelondb';

const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'posts',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'subtitle', type: 'string', isOptional: true},
        {name: 'body', type: 'string'},
      ],
    }),
    // tableSchema({
    //   name: 'comments',
    //   columns: [
    //     {name: 'body', type: 'string'},
    //     {name: 'post_id', type: 'string', isIndexed: true},
    //     {name: 'is_spam', type: 'boolean'},
    //   ],
    // }),
  ],
});

export default mySchema;
