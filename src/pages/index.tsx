import "../index.scss";
import { Hero } from '../sections/Hero';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts, Post } from '@/lib/post';
import { WhyWorkWithMe } from "@/sections/WhyWorkWithMe";

interface BlogIndexProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

const BlogIndex = ({ posts }: BlogIndexProps) => (
  <main>
    <h1>Bienvenido al home</h1>
    <Link href="/blog">Blog</Link>
    <Hero />
    <WhyWorkWithMe />
  </main>
);

export default BlogIndex;