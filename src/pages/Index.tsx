import { DashboardNav } from "@/components/DashboardNav";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceSection } from "@/components/ExperienceSection";
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
      title: "Economic Recession Analysis",
      description: "A data-driven economic recession prediction system built with Python, leveraging machine learning models.",
      image: "/econrec.png",
    },
    {
      id: "2",
      title: "Supply Chain Analytics Using Statistical Methods",
      description: "A statistical modeling solution built with R, utilizing regression analysis and time-series forecasting to optimize inventory levels, reduce logistics costs and improve demand prediction accuracy.",
      image: "/SPA.png",
    },
    {
      id: "3",
      title: "Automated Stock Trading System Using AI Agents",
      description: "An AI-driven trading platform built with Python, leveraging agent-based architecture and SMA technical indicators to execute data-driven buy/sell signals, achieving 14% annualized returns while maintaining risk-managed portfolios.",
      image: "/BT.png",
    },
    {
      id: "4",
      title: "Financial Performance Analysis for Revenue Optimization",
      description: "A data-driven solution built with Excel and Power BI, automating financial data processing and leveraging interactive dashboards to optimize revenue streams and identify cost-saving opportunities.",
      image: "/FA.png",
    },
    {
      id: "5",
      title: "Prediction Of Parkinson's Disease using Machine Learning",
      description: "A machine learning solution built with Python and XGBoost, analyzing voice parameter datasets to predict Parkinson's risk, enabling early diagnosis and intervention.",
      image: "/PD.png",
    },
    {
      id: "6",
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
            <h1 className="text-5xl font-bold mb-6 text-white">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-300">
              Turning Data into Decisions, One Insight at a Time.
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
                src="/IMG_4953-rm.png"
                alt="Professional headshot"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-8">
                A data analytics engineer passionate about uncovering insights that drive smarter decisions. 
                With experience in visualization, NLP and financial markets, I translate complex data into actionable strategies. 
                My work blends analytics, storytelling, and problem-solving to create real-world impact.
                I transform data into insights, turning complexity into clarity and action.
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
        </div>
      </section>
    </div>
  );
};

export default Index;