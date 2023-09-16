<div class="container">
  {{#each articles}}
    <div class="article">
      <h2>{{this.title}}</h2>
      <p>{{this.content}}</p>
      <p>Posted by {{this.author}} on {{this.datePosted}}</p>
      <a href="/articles/{{this.id}}">Read More</a>
    </div>
  {{/each}}
</div>