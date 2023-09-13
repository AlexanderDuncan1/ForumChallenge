{{#each opinions as |opinion|}}
  <div class="opinion">
    <p>{{opinion.content}}</p>
    <p>Posted by {{opinion.author}}</p>
  </div>
{{/each}}