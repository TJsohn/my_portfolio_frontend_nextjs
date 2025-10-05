import axios from "axios";
import https from "https";

export default async function Projects() {
  let projects = [];
  let included = [];
  try {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL?.replace(/\/$/, "");
    const url = `${baseUrl}/jsonapi/node/project?include=field_project_image,field_project_image.field_media_image`;
    const { data } = await axios.get(url, {
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      timeout: 5000,
    });
    projects = data.data || [];
    included = data.included || [];
  } catch (error) {
    // Optionally log error for debugging, but remove for production
  }

  function getImageUrl(project) {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL?.replace(/\/$/, "");
    const imageRel = project.relationships?.field_project_image?.data;
    if (!imageRel) {
      return null;
    }
    const media = included.find(
      (item) => item.type === "media--image" && item.id === imageRel.id
    );
    if (!media) {
      return null;
    }
    const fileRel = media.relationships?.field_media_image?.data;
    if (!fileRel) {
      return null;
    }
    const file = included.find(
      (item) => item.type === "file--file" && item.id === fileRel.id
    );
    if (!file) {
      return null;
    }
    return file ? `${baseUrl}${file.attributes.uri.url}` : null;
  }

  return (
    <section id="projects" className="projects-page visible">
      <div className="projects-container">
        <h1>Projects</h1>
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="projects-list">
            {projects.map((project) => {
              const imageUrl = getImageUrl(project);
              const githubUrl = project.attributes.field_github || "";
              const liveUrl = project.attributes.field_link || "";
              return (
                <div key={project.id} className="project-card">
                  <h2>{project.attributes.title}</h2>
                  {imageUrl && (
                    <img src={imageUrl} alt={project.attributes.title} className="project-image" />
                  )}
                    <div className="project-description">
                      {project.attributes.title === "HR App" && (
                        <>
                          <p>An employee data management app built with React and JSON server.</p>
                          <ul>
                            <li>Add and update employee information</li>
                            <li>Simple UI for HR tasks</li>
                          </ul>
                        </>
                      )}
                      {project.attributes.title === "Finnish Event Planner" && (
                        <>
                          <p>Web app for exploring and organizing local summer events. Team project at Business College Helsinki.</p>
                          <ul>
                            <li>Built with React and JSON-server</li>
                            <li>Developed event cards and Add Event form</li>
                            <li>Collaborated on API and database design</li>
                          </ul>
                        </>
                      )}
                      {project.attributes.title === "Pancake Order App" && (
                        <>
                          <p>Playful app for customizing and ordering pancakes. Built with JavaScript.</p>
                          <ul>
                            <li>Real-time price updates</li>
                            <li>Order management features</li>
                          </ul>
                        </>
                      )}
                    </div>
                    <div className="project-links">
                      {project.attributes.field_project_url?.uri && (
                        <a
                          href={project.attributes.field_project_url.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn"
                        >
                          {project.attributes.title === "Finnish Event Planner" ? "GitHub" : "Live Site"}
                        </a>
                      )}
                    </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}