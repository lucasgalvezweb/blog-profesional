import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
    slug: string;
    title: string;
    date: string;
    content?: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/,'');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date
        };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents)

    return {
        slug,
        title: data.title,
        date: data.date,
        content,
    };
}
