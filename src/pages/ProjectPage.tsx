import "./ProjectPage.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { loadProjects, type Project} from "../lib/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    loadProjects().then((all) => {
      setProject(all.find((p) => p.slug === slug) ?? null);
    });
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  return (
    <>
    <Navbar/>
    <main>
        <article className="prose max-w-none">
        <h1>{project.attributes.title}</h1>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {project.content}
        </ReactMarkdown>
        </article>
    </main>
    <Footer/>
    </>
  );
}
