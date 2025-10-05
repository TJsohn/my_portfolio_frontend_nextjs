import axios from "axios";
import https from "https";

export default async function About() {
  let aboutContent = `
    <div class="about-intro">
      <h1>About <span class="highlight">TJ Sohn</span></h1>
      <p>I'm a passionate Full-Stack Web Developer with expertise in modern web technologies.</p>
    </div>
    
    <div class="about-details">
      <div class="about-section">
        <h2>Background</h2>
        <p>With a strong foundation in both frontend and backend development, I create comprehensive web solutions that are both functional and visually appealing. I enjoy working with cutting-edge technologies and solving complex problems.</p>
      </div>
      
      <div class="about-section">
        <h2>Skills & Technologies</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js & Next.js</li>
              <li>JavaScript & TypeScript</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>PHP</li>
              <li>Drupal CMS</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Database & Tools</h3>
            <ul>
              <li>MySQL & PostgreSQL</li>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="about-section">
        <h2>Philosophy</h2>
        <p>I believe in writing clean, maintainable code and creating user experiences that are both intuitive and engaging. Every project is an opportunity to learn something new and push the boundaries of what's possible on the web.</p>
      </div>
    </div>
  `;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL?.replace(/\/$/, "");
    const url = `${baseUrl}/jsonapi/node/page?filter[title]=About`;
    if (baseUrl) {
      const { data } = await axios.get(url, { 
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        timeout: 5000 
      });
      const page = data.data?.[0];
      if (page && page.attributes?.body?.value) {
        aboutContent = page.attributes.body.value;
      }
    }
  } catch (error) {
    // Optionally log error for debugging, but remove for production
  }

  return (
    <section id="about" className="about-page visible">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
      </div>
    </section>
  );
}
