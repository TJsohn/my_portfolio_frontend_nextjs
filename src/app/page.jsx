import axios from "axios";
import https from "https";

export default async function Home() {
  let welcomeContent = "<h1>Hello, I'm <span class=\"highlight\">TJ Sohn</span></h1><h2 class=\"subtitle\">Full-Stack Web Developer</h2><p>I build modern web apps with React and Drupal</p>";
  
  try {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL?.replace(/\/$/, "");
    
    if (!baseUrl) {
      console.warn("NEXT_PUBLIC_DRUPAL_BASE_URL not found in environment variables");
    } else {
      const url = `${baseUrl}/jsonapi/node/page?filter[title]=Home`;

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
    console.error("Failed to fetch Home page:", error?.message || error);
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div dangerouslySetInnerHTML={{ __html: welcomeContent }} />
      </div>
    </section>
  );
}