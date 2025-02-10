
import { LineChart, Line, ResponsiveContainer } from "recharts";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding-animation.json";

interface HomeSectionProps {
  data: Array<{ name: string; value1: number; value2: number; }>;
}

export const HomeSection = ({ data }: HomeSectionProps) => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="value1" 
              stroke="#ff0000" 
              strokeWidth={6}
              dot={false}
              className="animate-float" 
            />
            <Line 
              type="monotone" 
              dataKey="value2" 
              stroke="#00ff00" 
              strokeWidth={6}
              dot={false}
              className="animate-float" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-white">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-300">
            I'm a passionate developer creating beautiful and functional web experiences
          </p>
        </div>
        <div className="w-64 h-64 mt-8">
          <Lottie animationData={codingAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};
