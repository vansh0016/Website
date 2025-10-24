import { Badge } from "@/components/ui/badge";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  abstract?: string;
}

const publications: Publication[] = [
  {
    title: "USW-Based Subsurface Multi-Defect Detection Using CNN-BiLSTM for Transportation Infrastructure",
    authors: "V. Setpal, D. Liao, S. Gill",
    venue: "IEEE BigData",
    year: "2025",
    abstract:
      "Developed a CNN-BiLSTM-based framework for subsurface multi-defect detection in concrete slabs using ultrasonic surface wave data, enhancing detection accuracy and robustness for transportation infrastructure monitoring.",
  },
  {
    title: "Deep Learning-Based Subsurface Multi-Defect Detection in Concrete Slabs Using Ultrasonic Surface Waves",
    authors: "V. Setpal, D. Liao, S. Gill",
    venue: "TRB Annual Meeting",
    year: "2026",
    abstract:
      "Conducted extensive ablation studies to compare multiple architectures for subsurface multi-defect detection in concrete slabs using ultrasonic surface wave data.",
  },
  {
    title: "Economic Recession Analysis",
    authors: "V. A. Setpal, S. Padmane, P. Gangurde, R. Goray, Dr. T.Rajani Mangala",
    venue: "IJARESM",
    year: "2024",
    link: "https://www.ijaresm.com/uploaded_files/document_file/Vansh_Ashok_SetpalFmR6.pdf",
    abstract:
      "Economic recessions, marked by significant declines in economic activity, have profound effects on societies, governments and businesses around the world. In response to these challenges, this paper employs a combination of statistical tools and machine learning techniques to conduct a detailed analysis and prediction of economic downturns.",
  }
];

export const PublicationsSection = () => {
  return (
    <section id="publications" className="min-h-screen py-16 relative bg-gradient-to-br from-[rgb(12,10,34)] to-[rgb(6,12,28)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,118,210,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">Publications</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-r from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] backdrop-blur-lg p-6 rounded-xl border border-white/5 hover:border-blue-400/30 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{pub.title}</h3>
                  <p className="text-blue-200 text-sm">{pub.authors}</p>
                </div>
                <div className="text-right">
                  <div
                    className="text-blue-300/80 text-sm truncate max-w-[160px]"
                    title={pub.venue}
                  >
                    {pub.venue}
                  </div>
                  <div className="text-blue-300/60 text-xs">{pub.year}</div>
                </div>
              </div>

              {pub.abstract && <p className="text-gray-300 mb-4 text-sm leading-relaxed">{pub.abstract}</p>}

              <div className="flex gap-2 items-center">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-300 hover:underline"
                  >
                    View Paper
                  </a>
                ) : (
                  <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">Accepted for Publication</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
