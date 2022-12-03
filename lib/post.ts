import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostData;
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return {
      params: {
        id: id,
      },
    };
  });
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContent);

  const blogContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  return {
    id,
    content: blogContent.toString(),
    ...matterResult.data,
  };
};
