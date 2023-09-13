{{#each comments as |comment|}}
  <div class="comment">
    <p>{{comment.content}}</p>
    <p>Posted by {{comment.author}}</p>
  </div>
{{/each}}