---
layout: page
permalink: /blog/
title: Blog
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<article class="oldspeedlast-panel oldspeedlast-blog">
  <header>
    <h2 class="oldspeedlast-title">Blog</h2>
  </header>

  <section class="oldspeedlast-blog-posts" aria-label="Blog posts">
    <ul class="oldspeedlast-blog-archive-list">
      {% if page.pagination.enabled %}
        {% assign postlist = paginator.posts %}
      {% else %}
        {% assign postlist = site.posts %}
      {% endif %}

      {% for post in postlist %}
        {% assign category = post.categories | first %}
        <li class="oldspeedlast-blog-archive-item">
          <a class="oldspeedlast-blog-archive-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <div class="oldspeedlast-blog-archive-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time>
            {% if category %}<span>{{ category }}</span>{% endif %}
          </div>
          {% if post.description %}<p class="oldspeedlast-blog-archive-description">{{ post.description }}</p>{% endif %}
        </li>
      {% endfor %}
    </ul>
  </section>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}
</article>
