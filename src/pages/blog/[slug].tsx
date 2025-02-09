import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostBySlug, Post } from "@/lib/post";
import { remark } from "remark";
import html from 'remark-html';
import Link from "next/link";

interface PostPageProps {
    post: Post & { contentHTML: string };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();
    const paths = posts.map((post) => ({ params: { slug: post.slug } }));
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
    const slug = params?.slug as string;
    const post = getPostBySlug(slug);
    const processedContent = await remark().use(html).process(post.content || '');
    const contentHTML = processedContent.toString();

    return { props: { post: { ...post, contentHTML } } };
};

const PostPage = ({ post }: PostPageProps) => (
    <>
        <div className="px-14">
            <Link href="/blog">Blog</Link>
            <article>
                <h1>{post.title}</h1>
                <p> {post.date} </p>
                <div dangerouslySetInnerHTML={{ __html: post.contentHTML }} />
            </article>
        </div>
    </>
);

export default PostPage;