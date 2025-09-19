import fm from "front-matter";

export interface ProjectAttributes {
  title: string;
  date?: string;
  description?: string;
  tags?: string[];
}

export interface Project {
  slug: string;
  attributes: ProjectAttributes;
  content: string;
}

const projectFiles = import.meta.glob("../projects/*.md", { query: "?raw", import: "default" });

export async function loadProjects(): Promise<Project[]> {
  const projects: Project[] = [];

  for (const path in projectFiles) {
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";
    const raw = await projectFiles[path]();
    const { attributes, body } = fm<ProjectAttributes>(raw);

    projects.push({
      slug,
      attributes,
      content: body,
    });
  }

  return projects;
}
