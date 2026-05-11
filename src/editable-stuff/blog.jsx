import { BlogBuilder } from "../components/blog/BlogBuilder";

const POST_KEYS = ["thesis", "drone", "roscar", "sacmi"];

let _idCounter = 0;
const nextId = () => ++_idCounter;

function buildPost(key, t) {
  const data = t(`blog:${key}`, { returnObjects: true });

  const post = new BlogBuilder({
    title: data.title,
    image: data.image,
    description: data.description,
  });

  for (const item of data.content) {
    switch (item.type) {
      case "heading":
        post.addHeading(nextId(), item.text);
        break;
      case "paragraph":
        post.addParagraph(nextId(), item.text);
        break;
      case "linkParagraph":
        post.addLinkParagraph(nextId(), item.text, item.linkText, item.linkUrl);
        break;
      case "image":
        post.addImage(nextId(), item.url);
        break;
      case "video":
        post.addVideo(nextId(), item.url);
        break;
      default:
        break;
    }
  }

  post.addFooter(nextId(), data.footer);
  return post;
}

export function createBlogPosts(t) {
  return POST_KEYS.map((key) => buildPost(key, t));
}

export function createBlogPost(index, t) {
  if (index < 0 || index >= POST_KEYS.length) return null;
  return buildPost(POST_KEYS[index], t);
}
