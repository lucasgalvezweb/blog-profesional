import "../index.scss";
import { GetStaticProps } from 'next';
import { getAllPosts, Post } from '@/lib/post';
import { AboutMe, Footer, Hero, Method, Plans, Services, WhyWorkWithMe } from "@/sections";
import { NavBar } from "../components/NavBar";
import { listMenu } from "@/data/navbar.data";
import { global } from "../helpers/globalText";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import Head from "next/head";
import Script from "next/script";

interface BlogIndexProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

const GA_MEASUREMENT_ID = "G-434926826";

const BlogIndex = ({ posts }: BlogIndexProps) => (
  <>
    <Head>
      <title>{`Inicio | ${global.companyName}`}</title>
      {/* Script de Google Analytics */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></Script>
      <Script dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}>
      </Script>
    </Head>
    <NavBar listMenu={listMenu} />
    <Hero />
    <WhyWorkWithMe />
    <Method />
    <Plans />
    <Services />
    <AboutMe />
    <div className='fixed z-50 bottom-8 right-8 animate-bounce'>
      <WhatsAppButton wpIcon="/assets/icons/whatsapp.png" wpNumber={global.phone} wpIconWidth="45" />
    </div>
    <Footer />
  </>
);

export default BlogIndex;