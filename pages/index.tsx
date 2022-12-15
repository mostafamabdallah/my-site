import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}
