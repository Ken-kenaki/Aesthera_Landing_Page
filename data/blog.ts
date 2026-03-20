export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    category: string;
    date: string;
    excerpt: string;
    content: string;
    image: string;
    author: {
        name: string;
        role: string;
        image: string;
    };
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "rise-of-it-industry-nepal",
        title: "The Kinetic Rise of IT in Nepal",
        category: "Tech Trends",
        date: "March 15, 2024",
        excerpt: "Exploring the rapid digital transformation within the Himalayan tech hub and how it's becoming a global contender.",
        content: `
      <p>Nepal's IT sector is no longer just a local phenomenon; it's a growing global force. From software outsourcing to indigenous product development, the landscape is shifting with kinetic energy.</p>
      <h2>The Digital Leap</h2>
      <p>In the last decade, we've seen a massive influx of talent and capital into the tech ecosystem of Kathmandu and beyond. Companies are now delivering world-class solutions for international markets, proving that geography is no longer a barrier to engineering excellence.</p>
      <blockquote>"The mountains of Nepal are now home to some of the most resilient codebases in the world."</blockquote>
      <h2>Architectural Reliability</h2>
      <p>At Aesthera, we believe in 'Kinetic Monolithism'—building systems that are unshakeable yet fluid. This philosophy is shared by the new generation of Nepali developers who are prioritizing precision and scalability above all else.</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_bi537TZuV_qLgrvy4aWLGAWIt_AD77Y-sbM0W_-e5ssCbzOuEwq2ilWc3Q7fv8ai2zFzXL-GdZwCleOSn-N1BpZI_dn41bGDkTBUY3nAi6Re5gVWFnBkHLaylrtj_ggCAv0M2S3mw6u0_x_rIbBqbZbcZz5qko2vav6WtZ2-9rj0DkNSPyZdZNikA0QZL06aNsLZMncIzSKnOFRzXoZHohnybc80Tmwt-XmWgLbpGoejBL3Id6Wf_QKkSeuoOhaYdf8B3VvKuDE",
        author: {
            name: "Laxman Dhungel",
            role: "CEO, Aesthera",
            image: "/laxman.jpeg"
        }
    },
    {
        id: "2",
        slug: "saas-future-south-asia",
        title: "SaaS: The Architecture of South Asia's Future",
        category: "Business",
        date: "March 10, 2024",
        excerpt: "Scale-first strategies for emerging markets in the digital age. Why SaaS is the key to unlocking regional potential.",
        content: `
      <p>Software as a Service (SaaS) is redefining how businesses operate in South Asia. By lowering the barrier to entry for enterprise-grade tools, SaaS is empowering a new wave of MSMEs.</p>
      <h2>Scalability as a Standard</h2>
      <p>The core promise of SaaS is scalability. In markets as dynamic as ours, the ability to scale infrastructure without massive upfront costs is a game-changer. We've seen this first-hand with our proprietary tools like Gymo and Aesthera CRM.</p>
      <h2>The Global Connection</h2>
      <p>Building SaaS in Nepal for the world requires a global mindset. It's about meeting international standards for security, uptime, and user experience while maintaining a lean, agile operation.</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4XdvYvKHPDfkYEXpKwgoChCeB_AeQAghF3D3kGYP4O5gq0IrgvMBFQhQJ-aYu6mu8dWh44VKXi2oFmzmpBdsm4BR8UkXQwdBh8rVyYG3c8stmg30u5umbzCmdGChqqlQjLQiQtnCrkif8Uu4ebx8TIG5MlCJqTBtrTRrKHx7FcmahOT2jMNvxKHluMNbqLP0kTb_YfXRgmCNlIgYkOalmIgSEupSYIN3ynlirWqyTB3OwN4ayA1nxiRmmqZn-aDPF0CxKyBkLg_k",
        author: {
            name: "Prasna Maharjan",
            role: "Marketing Lead, Aesthera",
            image: "/prasna.jpeg"
        }
    },
    {
        id: "3",
        slug: "monolithism-in-design",
        title: "The Aesthetics of Kinetic Monolithism",
        category: "Design",
        date: "March 05, 2024",
        excerpt: "How we balance architectural permanence with digital fluidity in modern UI/UX design.",
        content: `
      <p>Design at Aesthera is driven by a singular concept: Kinetic Monolithism. It's the intersection of structural heaviness and digital lightness.</p>
      <h2>Intentional Friction</h2>
      <p>Most modern design tries to eliminate all friction. We believe in *intentional* friction—visual weights that ground the user and provide a sense of architectural permanence.</p>
      <h2>The Glow & The Grid</h2>
      <p>By combining rigid bento grids with fluid neon glows, we create an environment that feels both high-tech and unshakeable. It's about manifesting digital confidence through visual hierarchy.</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFfOHg63IS1zQgKhcXx2AynXjdQmmZJeTak3Cpl1VgMNSD1tXkvEBWLMy88DZ6J65IaregS9tb1g5SERB2P9UqRy80_OHwce-Y-w4qy5fZ47bAd16HfLQORNr7MG5UDWHgll44TeNamukFqHN8zddKFAEKvUSRfRyQ353rhAHzpLMSA6Zvjm59JkgAfC4bTK1RsUQbOo9ZoODysqI7TpAPPq6yymb4xG27aI0w8r4GxQYHVxtaif0xBvAHWCguYvonMQmvd9H2Onc",
        author: {
            name: "Laxman Dhungel",
            role: "CEO, Aesthera",
            image: "/laxman.jpeg"
        }
    }
];
