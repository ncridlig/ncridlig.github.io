import { BlogBuilder } from "../components/blog/BlogBuilder";

export function createBlogPosts(t) {
  const buildPost = (key) => {
    const data = t(`blog:${key}`, { returnObjects: true });

    const post = new BlogBuilder({
      title: data.title,
      image: data.image,
      description: data.description,
    });

    for (const item of data.content) {
      switch (item.type) {
        case "heading":
          post.addHeading(item.text);
          break;
        case "paragraph":
          post.addParagraph(item.text);
          break;
        case "linkParagraph":
          post.addLinkParagraph(item.text, item.linkText, item.linkUrl);
          break;
        case "image":
          post.addImage(item.url);
          break;
        case "video":
          post.addVideo(item.url);
          break;
        default:
          break;
      }
    }

    post.addFooter(data.footer);
    return post;
  };

  const posts = [];

  // Published posts (newest first)
  posts.push(buildPost("thesis"));
  posts.push(buildPost("drone"));
  posts.push(buildPost("roscar"));
  posts.push(buildPost("sacmi"));

  // Drafts — uncomment when ready:
  // posts.push(buildPost("homeAssistant"));
  // posts.push(buildPost("othello"));

  return posts;
}
