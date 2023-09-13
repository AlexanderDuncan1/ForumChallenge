{{#each articles as |article|}}
  <div class="article">
    <h2>{{article.title}}</h2>
    <p>{{article.content}}</p>
    <p>Posted by {{article.author}}</p>
  </div>
{{/each}}