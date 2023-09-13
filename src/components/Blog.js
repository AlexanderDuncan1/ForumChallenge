{{#with blog}}
  <div class="blog-post">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <p>Posted by {{author.username}} on {{createdAt}}</p>
    <div class="comments">
      {{#each comments}}
        <div class="comment">
          <p>{{this.content}}</p>
          <p>Commented by {{this.author.username}} on {{this.createdAt}}</p>
        </div>
      {{/each}}
    </div>
    <form action="/blogs/{{id}}/comments" method="post">
      <textarea name="content" required></textarea>
      <button type="submit">Submit Comment</button>
    </form>
  </div>
{{/with}}