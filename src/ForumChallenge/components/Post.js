{{#each posts as |post|}}
  <div class="post">
    <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
    <p>Posted by {{post.author}}</p>
  </div>
{{/each}}