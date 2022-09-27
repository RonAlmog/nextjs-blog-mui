import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import BlogHeaderComponent from "../../components/layout/blogHeaderComponent";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/vs2015.css";
import { useEffect } from "react";

hljs.registerLanguage("typescript", typescript);

const components = {
  BlogHeaderComponent,
};

export default function Article({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDirectory = path.join("articles");
  const files = fs.readdirSync(articlesDirectory);
  const paths = files.map((fileName: string) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
};

type Params = {
  [param: string]: any;
};

export const getStaticProps: GetStaticProps<Params> = async ({
  params: { slug },
}: Params) => {
  const article = fs.readFileSync(path.join("articles", slug + ".mdx"));
  const { data: metaData1, content } = matter(article);
  const mdxSource = await serialize(content, { scope: metaData1 });
  return { props: { source: mdxSource } };
};
