import axios from "axios";
import https from "https";

export default async function Home() {
  let welcomeContent = "Welcome to my portfolio! I'm a Full-Stack Web Developer passionate about creating amazing digital experiences.";
  
  try {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL?.replace(/\/$/, "");
    
    if (!baseUrl) {
      console.warn("NEXT_PUBLIC_DRUPAL_BASE_URL not found in environment variables");
    } else {
      const url = `${baseUrl}/jsonapi/node/page?filter[title]=Home`;
      console.log("Fetching from:", url);

      const { data } = await axios.get(url, { 
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        timeout: 5000 
      });

      const page = data.data?.[0];
      
      if (page?.attributes?.body?.value) {
        welcomeContent = page.attributes.body.value;
      }
    }
  } catch (error) {
    console.error("Failed to fetch Home page:", error.message);
    // Continue with default content instead of showing error to users
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm TJ Sohn — Full-Stack Web Developer</h1>
        <div dangerouslySetInnerHTML={{ __html: welcomeContent }} />
        
        <div className="cta-buttons">
          <a href="/projects" className="cta-button">View My Work</a>
          <a href="/contact" className="cta-button secondary">Get In Touch</a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}