import "../index.scss";
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts, Post } from '@/lib/post';
import { AboutMe, Footer, Hero, Method, Plans, Services, WhyWorkWithMe } from "@/sections";
import { NavBar } from "@/components";
import { listMenu } from "@/data/navbar.data";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface BlogIndexProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

const BlogIndex = ({ posts }: BlogIndexProps) => (
  <main>
    <NavBar listMenu={listMenu} />
    <Link href="/blog">Blog</Link>
    <Hero />
    <WhyWorkWithMe />
    <Method />
    <Plans />
    <Services />
    <AboutMe />
    {/* <div className='fixed z-50 bottom-8 right-8 animate-bounce'>
      <WhatsAppButton wpIcon={wpIcon} wpNumber={global.phone} wpIconWidth="45" />
    </div> */}
    <Footer />
  </main>
);

export default BlogIndex;