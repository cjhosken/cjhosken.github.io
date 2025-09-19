import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadProjects } from "../lib/projects";
import type { Project } from "../lib/projects";
import "./ProjectsPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    loadProjects().then(setProjects);
  }, []);

    const visibleProjects = projects.filter(
        (p) => !(p.attributes.tags ?? []).includes("hidden")
    );

    const sortedProjects = [...visibleProjects].sort((a, b) => {
        const dateA = a.attributes.date ? new Date(a.attributes.date).getTime() : 0;
        const dateB = b.attributes.date ? new Date(b.attributes.date).getTime() : 0;
        return dateB - dateA;
    });


    // Then apply tag filter (but ignore "hidden" as a selectable filter)
    const allTags = Array.from(
    new Set(
        sortedProjects.flatMap((p) =>
        (p.attributes.tags ?? []).filter((tag) => tag !== "hidden")
        )
    )
    );

    const filteredProjects = selectedTag
    ? sortedProjects.filter((p) => p.attributes.tags?.includes(selectedTag))
    : sortedProjects;

  return (
    <>
    <Navbar/>
    <div className="projects-page">
      <h1 className="page-title">Projects</h1>

      {/* Tag Filters */}
      <div className="filters">
        <button
          onClick={() => setSelectedTag(null)}
          className={!selectedTag ? "active" : ""}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? "active" : ""}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="card-grid">
        {filteredProjects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="card">
            <img
            src={`/projects/${p.slug}/cover.jpg`}
            className="card-cover"
            />
            <div className="card-body">
              <h2 className="card-title">{p.attributes.title}</h2>
              {p.attributes.date && (
                <p className="card-date">
                  {new Date(p.attributes.date).toLocaleDateString()}
                </p>
              )}
              {p.attributes.description && (
                <p className="card-description">{p.attributes.description}</p>
              )}
              {p.attributes.tags && (
                <div className="card-tags">
                  {p.attributes.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
