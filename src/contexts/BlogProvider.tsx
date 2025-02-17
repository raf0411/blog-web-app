import React, { createContext, useContext, useState, ReactNode } from "react";

type Blog = {
  id: number;
  title: string;
  date?: string;
  content: string;
};

type BlogContextType = {
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
  addBlog: (newBlog: Blog) => void;
  removeBlog: (id: number) => void;
  editBlog: (id: number, modifiedFields: Partial<Blog>) => void;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};

type BlogProviderProps = {
  children: ReactNode;
};

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Journey Through Time: The History of Ancient Civilizations",
      date: "July 10, 2025",
      content:
        "Ancient civilizations have shaped our modern world with their remarkable achievements in architecture, art, governance, and technology. Long before modern conveniences, societies thrived with complex social hierarchies and innovative methods of communication. For instance, in ancient Egypt, the construction of the pyramids was not only an architectural marvel but also a reflection of deep religious beliefs that unified communities. The builders applied advanced mathematics and astronomy to create structures that have withstood millennia, serving as enduring symbols of human perseverance and ingenuity. Similarly, the civilizations of Mesopotamia pioneered written language with the invention of cuneiform, revolutionizing record-keeping, trade, and governance. This innovation laid the groundwork for the evolution of law and literature. In ancient Greece, the seeds of Western philosophy, science, and politics were sown by thinkers such as Socrates, Plato, and Aristotle, whose ideas continue to influence modern thought. Their inquiries into ethics, metaphysics, and the nature of knowledge challenged established norms and fostered a culture of intellectual curiosity that has persisted through the ages. Archaeological discoveries across these ancient lands reveal intricate details about daily life, from elaborate trade networks and religious rituals to innovations in art and engineering. Every artifact, inscription, and ruin provides a glimpse into the sophisticated social structures and creative energies of these bygone eras. As we continue to unearth relics of the past, we not only reconstruct historical narratives but also draw lessons that inform modern society. By studying the triumphs and challenges of these early civilizations, we gain insights into how human ingenuity can overcome obstacles, laying the foundations for continuous progress and innovation in our own time.",
    },
    {
      id: 2,
      title:
        "The Wonders of Technology: How Innovations are Shaping Our Future",
      date: "August 05, 2025",
      content:
        "Technology has evolved at an unprecedented pace, reshaping the way we live, work, and connect with one another. From the early days of the industrial revolution to today’s digital age, advancements in electronics, computing, and connectivity have transformed every facet of human existence. The evolution from steam engines to microprocessors and from bulky telephones to smartphones exemplifies the rapid progress that defines our era. Today, the Internet of Things (IoT) interlinks everyday objects, creating smart ecosystems that streamline urban living and enhance efficiency. Breakthroughs in artificial intelligence and machine learning are revolutionizing industries by optimizing processes in healthcare, finance, education, and beyond. For example, AI-driven diagnostics assist medical professionals in early disease detection, while advanced data analytics empower businesses to make informed decisions quickly and accurately. Quantum computing, still in its nascent stages, promises to solve complex problems that are beyond the reach of classical computers, potentially transforming research in physics, chemistry, and materials science. Alongside these innovations, digital platforms have democratized education and information access, enabling individuals worldwide to learn new skills and collaborate on global projects. However, this remarkable progress also brings challenges such as data privacy, cybersecurity, and the digital divide. As societies become increasingly reliant on digital infrastructure, the need for robust security measures and ethical frameworks grows ever more critical. Policymakers, educators, and technologists are working in tandem to ensure that these advancements are harnessed responsibly, paving the way for a future where technology serves as an enabler of equitable growth and enhanced human potential.",
    },
    {
      id: 3,
      title: "Culinary Adventures: Exploring Global Flavors",
      date: "September 15, 2025",
      content:
        "Food is much more than sustenance—it is a vibrant expression of culture, history, and creativity. Around the world, culinary traditions have evolved over centuries, influenced by geography, climate, and the exchange of ideas between peoples. In Italy, for example, the art of pasta making is revered; recipes are passed down through generations, with each region adding its own signature twist. Over in Morocco, bustling spice markets burst with the scents of cumin, saffron, and cinnamon, all merging to create dishes that are as aromatic as they are flavorful. In Asia, the culinary landscape is diverse and dynamic—from the delicate balance of sweet, sour, salty, and umami in Thai cuisine to the precision and artistry found in Japanese sushi. Each dish tells a story of local ingredients, time-honored techniques, and an unwavering passion for flavor. The modern culinary scene has also embraced fusion, where traditional recipes are reinvented using contemporary techniques and international influences. This creative blending not only honors the past but also pushes the boundaries of what food can be. Food festivals and culinary tours offer immersive experiences, allowing enthusiasts to learn about the origins of recipes, meet local chefs, and even partake in hands-on cooking classes. In today’s world, there is a growing movement toward sustainable and locally sourced ingredients, encouraging chefs to reduce waste and support local agriculture. Ultimately, exploring global flavors is a journey of discovery that celebrates the universal language of food—a language that connects us, fosters community, and reminds us of the rich tapestry of human culture.",
    },
    {
      id: 4,
      title: "Mindfulness and Meditation: A Path to Inner Peace",
      date: "October 20, 2025",
      content:
        "In the relentless pace of modern life, finding inner peace has become a cherished quest for many. Mindfulness and meditation offer a sanctuary from the overwhelming noise and stress of everyday routines. Rooted in ancient traditions, these practices encourage individuals to embrace the present moment and observe their thoughts without judgment. By cultivating this awareness, practitioners often experience a profound sense of calm and clarity. Meditation, whether practiced in solitude or as part of a group, provides a structured approach to achieving mental balance. Techniques such as deep breathing, visualization, and body scanning help reduce stress, lower blood pressure, and enhance overall cognitive function. Scientific studies have confirmed that regular mindfulness practices can alleviate symptoms of anxiety and depression, contributing to improved emotional well-being. Beyond the physical and mental benefits, mindfulness is a journey of self-discovery. It invites individuals to explore their inner landscapes, confront personal challenges, and gradually transform vulnerabilities into strengths. Communities centered around mindfulness have emerged worldwide, offering workshops, retreats, and online forums where people can share their experiences and support one another. This collective pursuit of inner peace not only nurtures individual well-being but also fosters a sense of connectedness and compassion. In a world marked by rapid change and uncertainty, the practice of mindfulness serves as a steady anchor, reminding us that true balance comes from within. Every moment dedicated to mindful awareness is a step toward a life of greater harmony, resilience, and genuine fulfillment.",
    },
    {
      id: 5,
      title: "Travel Diaries: A Guide to Off-the-Beaten-Path Destinations",
      date: "November 05, 2025",
      content:
        "Travel is a transformative experience, especially when it takes you off the beaten path and into the heart of unexplored destinations. For the adventurous traveler, these hidden gems offer an escape from the crowded tourist trails and a chance to connect deeply with local cultures and untouched natural landscapes. Imagine wandering through a remote mountain village where traditions have been preserved for centuries, or discovering a secluded coastal haven with pristine beaches and crystal-clear waters. Such journeys provide not only breathtaking vistas but also intimate encounters with local customs, folklore, and culinary traditions that have remained unspoiled by modern commercialization. In these off-the-beaten-path destinations, every encounter tells a story—from the warm hospitality of villagers who share their ancestral recipes to the ancient ruins that whisper secrets of past civilizations. Travelers often find that these experiences foster a deeper connection with nature and a more meaningful understanding of cultural diversity. Moreover, such journeys encourage sustainable tourism practices, as visitors learn to appreciate and support local businesses and environmental conservation efforts. The freedom to explore without a rigid itinerary allows for serendipitous discoveries and spontaneous adventures, enriching the travel experience far beyond the typical photo opportunities. In a world where digital distractions are ever-present, stepping away to explore remote locales can offer a much-needed respite and a chance to rediscover the simple pleasures of life. Travel diaries documenting these adventures serve as powerful reminders that some of the most memorable experiences are found in the unexpected, urging us to venture beyond the familiar and embrace the beauty of the unknown.",
    },
  ]);

  // CREATE
  const addBlog = (newBlog: Blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  // DELETE
  const removeBlog = (id: number) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
  };

  // UPDATE
  const editBlog = (id: number, modifiedFields: Partial<Blog>) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, ...modifiedFields } : blog
      )
    );
  };

  return (
    <BlogContext.Provider
      value={{ blogs, setBlogs, addBlog, removeBlog, editBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};
