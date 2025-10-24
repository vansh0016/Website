import { DashboardNav } from "@/components/DashboardNav";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { Github, Linkedin, Mail } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import codingAnimation from "../assets/graph.json";
import backgroundAnimation from "../assets/graph.json";

const Index = () => {
  const projects = [
    {
      id: "1",
      title: "RL-Based Latent Regime Modeling using β-VAE & GMM",
      description: "An RL-based signal which dynamically infers latent market regimes by optimizing actions through reinforcement learning, allowing the agent to adapt trading strategies and risk exposure as the underlying market structure evolves.",
      image: "/BT.png",
    },
    {
      id: "2",
      title: "Parameter-efficient Tuning of Flan-T5",
      description: "Fine-tuned the Flan-T5 Large model using QLoRA for efficient event extraction on noisy real-world text, improving robustness and reducing computational overhead through parameter-efficient training.",
      image: "/parameter.png",
    },
    {
      id: "3",
      title: "Universal Document-Level Information Extraction",
      description: "A document-level information extraction system using Graph Convolutional Networks and meta-learning to perform cross-domain entity and relation extraction, improving generalization and accuracy on unseen domains.",
      image: "/DocIE.png",
    },
    {
      id: "4",
      title: "Options Pricing` and Hedging Strategies",
      description: "Developed an options pricing and hedging framework using Black-Scholes and Binomial models with Monte Carlo simulations to model stochastic price dynamics and evaluate risk mitigation strategies across market regimes.",
      image: "/pricing.png",
    },
    {
      id: "5",
      title: "Supply Chain Analytics Using Statistical Methods",
      description: "A statistical modeling solution built with R, utilizing regression analysis and time-series forecasting to optimize inventory levels, reduce logistics costs and improve demand prediction accuracy.",
      image: "/SPA.png",
    },
    {
      id: "6",
      title: "Financial Performance Analysis for Revenue Optimization",
      description: "A data-driven solution built with Excel and Power BI, automating financial data processing and leveraging interactive dashboards to optimize revenue streams and identify cost-saving opportunities.",
      image: "/FA.png",
    },
    {
      id: "7",
      title: "Prediction Of Parkinson's Disease using Machine Learning",
      description: "A machine learning solution built with Python and XGBoost, analyzing voice parameter datasets to predict Parkinson's risk, enabling early diagnosis and intervention.",
      image: "/PD.png",
    },
    {
      id: "8",
      title: "Optimizing Insurance Claims Management with Predictive Modeling and Sentiment Analysis",
      description: "An ML model built with Python, to predict claim outcomes and identify dispute patterns",
      image: "/IC.png",
    },
  ];

  // Generate random data for the animated chart
  const generateData = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      name: i.toString(),
      value1: Math.random() * 100,
      value2: Math.random() * 100,
    }));
  };

  const data = generateData(20);

  return (
    <div className="min-h-screen bg-[rgb(18,24,56)] text-white">
      <DashboardNav />

      {/* Home Section with Centered Welcome Message and Animations */}
      <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden flex items-center justify-center">
        {/* Lottie Animation as Background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <Lottie
            animationData={backgroundAnimation}
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 text-white">Hi, and welcome to my corner of the internet.</h1>
            <p className="text-xl text-gray-300">
              I explore patterns, train models and make data do cool things.
            </p>
          </div>
          {/* <div className="w-100 h-100 mt-8 flex justify-center items-center">
            <Lottie animationData={codingAnimation} loop={true} />
          </div> */}
        </div>
      </section>

      {/* Update background colors for all sections */}
      <section id="about" className="min-h-screen py-16 bg-[rgb(18,24,56)] relative">
        <div className="absolute inset-0 bg-fixed" style={{ backgroundImage: 'url("/path-to-your-background.jpg")', opacity: 0.1 }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/IMG_8750.png"
                alt="Professional headshot"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-8">
                Hi, I’m Vansh.
                A researcher who is passionate about developing data-driven and intelligent systems that bridge theory and real-world impact. 
                My work spans across quantitative modeling, reinforcement learning and natural language processing, with a focus on building robust and practical frameworks for real-world production environments.
                I am deeply interested in advancing research at the intersection of machine learning, optimization and decision intelligence to solve complex, high-dimensional problems.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/vansh0016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  <Github className="w-6 h-6 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vanshsetpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="mailto:vsetpal@gmu.edu"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  <Mail className="w-6 h-6 mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section id="projects" className="min-h-screen py-16 bg-[rgb(18,24,56)] relative">
        <div className="absolute inset-0 bg-fixed opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
    </section>

    <PublicationsSection />

  <section id="contact" className="min-h-screen py-16 bg-[rgb(18,24,56)] relative">
        <div className="absolute inset-0 bg-fixed" style={{ backgroundImage: 'url("/path-to-your-background.jpg")', opacity: 0.1 }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form action="https://formsubmit.co/vanshsetpal88@gmail.com" method="POST" className="space-y-6 bg-primary/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white/10">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <input type="hidden" name="_captcha" value="false"></input>
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                Send Message
              </Button>
            </form>
          </div>
          {/* Social links after contact form */}
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/vanshsetpal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:vsetpal@gmu.edu"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;