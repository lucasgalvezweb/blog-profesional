import { GetStaticProps } from "next";
import Link from 'next/link';
import { getAllPosts, Post } from "@/lib/post";

interface HomeProps {
    posts: Post[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const posts = getAllPosts();
    return { props: { posts } };
};

const Home = ({ posts }: HomeProps) => (
    <main>
        <h1>Mi blog tecnologico</h1>
        <Link href="/">Home</Link>
        <ul>
            {
                posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}> {post.title} </Link>
                        <p>{post.date}</p>
                    </li>
                ))
            }
        </ul>
    </main>
)

export default Home;