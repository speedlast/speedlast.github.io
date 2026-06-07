(function () {
  "use strict";

  const posts = window.BLOG_POSTS || [];

  const formatDate = function (dateString, options) {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", options || {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const resolvePostUrl = function (post) {
    return post.url || `./blog/${post.slug}/`;
  };

  const archive = document.querySelector("[data-blog-archive]");

  if (archive) {
    archive.innerHTML = posts.map(function (post) {
      return `
        <li class="blog-archive-item">
          <a class="blog-archive-title" href="${resolvePostUrl(post)}">${post.title}</a>
          <div class="blog-archive-meta">
            <time datetime="${post.date}">${formatDate(post.date, { year: "numeric", month: "short", day: "numeric" })}</time>
            <span>${post.category}</span>
          </div>
          ${post.description ? `<p class="blog-archive-description">${post.description}</p>` : ""}
        </li>
      `;
    }).join("");
  }

  const detail = document.querySelector("[data-blog-detail]");

  if (detail) {
    const slug = detail.dataset.blogSlug;
    const post = posts.find(function (item) { return item.slug === slug; });

    if (!post) { return; }

    document.title = `${post.title} | Luyi Lin`;

    const title = detail.querySelector("[data-post-title]");
    const author = detail.querySelector("[data-post-author]");
    const published = detail.querySelector("[data-post-date]");
    const contact = detail.querySelector("[data-post-contact]");
    const description = detail.querySelector("[data-post-description]");
    const hero = detail.querySelector("[data-post-hero]");

    if (title) { title.textContent = post.title; }
    if (author) { author.textContent = post.author; }
    if (published) {
      published.dateTime = post.date;
      published.textContent = `${formatDate(post.date)}.`;
    }
    if (contact) { contact.textContent = post.email || post.category || ""; }
    if (description) { description.textContent = post.description || ""; }
    if (hero && post.heroImage) {
      hero.src = post.heroImage;
      hero.alt = post.title;
      hero.hidden = false;
    }
  }
})();
