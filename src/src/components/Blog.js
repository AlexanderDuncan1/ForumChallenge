{{#each blogs as |blog|}}
  <div class="blog-post">
    <h2>{{blog.title}}</h2>
    <p>{{blog.content}}</p>
    <p>Posted by {{blog.author}}</p>
  </div>
{{/each}}