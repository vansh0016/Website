import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";

// Mock data - replace with real data in production
const projects = {
  "1": {
    title: "Economic Recession Analysis",
    description: "A data-driven economic recession prediction system built with Python, leveraging machine learning models.",
    fullDescription: "Economic recessions, marked by significant declines in economic activity, have profound effects on societies, governments, and businesses around the world. In response to these challenges, this project employs a combination of statistical tools and machine learning techniques to conduct a detailed analysis and prediction of economic downturns. By providing valuable insights for policymakers and businesses, this research aims to develop strategies to mitigate the impacts of future recessions. The project's methodology is comprehensive, beginning with the meticulous collection of economic data from reputable sources such as the Federal Reserve. This data includes critical economic indicators like Gross Domestic Product (GDP), unemployment rates, and consumer spending metrics. Once collected, the data undergoes rigorous cleaning and preprocessing to ensure accuracy and consistency, which is crucial for reliable analysis. The exploratory data analysis phase follows, utilizing statistical tools to uncover initial patterns and anomalies within the data, setting the stage for deeper investigation. Predictive modeling forms the core of the project, where advanced algorithms such as Random Forest and Support Vector Machines are developed and refined. These models are trained on historical economic data to forecast potential recessions, and their performance is meticulously evaluated through precision-recall curves and Receiver Operating Characteristic (ROC) curves. This evaluation ensures that the models are both accurate and reliable, capable of making predictions that can withstand real-world application. Implementation of these models is carried out in a robust computational environment using programming languages like Python and R. Key Python libraries such as Pandas and NumPy facilitate data manipulation and numerical computations, while Scikit-learn provides the necessary framework for implementing and evaluating machine learning models. Visualization tools like Matplotlib and Seaborn are employed to graphically represent data and model outcomes, enhancing the interpretability of results. Additionally, R packages such as Tidyverse and Quantmod are used for further statistical analysis and data handling, broadening the scope of the project's analytical capabilities. The results of this project are both insightful and actionable. The predictive models indicate a stable economic outlook for 2024 with no forecasted recessions, yet signal potential downturns in several months of 2025. These predictions are invaluable for early strategic planning, allowing policymakers and business leaders to prepare and implement measures to cushion the impact of predicted downturns. In conclusion, this project underscores the critical role of statistical tools and machine learning in economic forecasting. While external factors like the COVID-19 pandemic pose challenges to prediction accuracy, ongoing refinement and updates to the models and data are essential for maintaining their effectiveness. This project not only advances our understanding of economic cycles but also provides a toolkit for navigating future economic challenges, making significant contributions to the field of economic analysis and forecasting. Through such rigorous research, stakeholders are better equipped to face economic uncertainties, promoting sustained economic stability and growth.",
    image: "/econrec.png",
    githubUrl: "https://www.ijaresm.com/uploaded_files/document_file/Vansh_Ashok_SetpalFmR6.pdf",
  },
  "2": {
    title: "Supply Chain Analytics Using Statistical Methods",
    description: "A statistical modeling solution built with R, utilizing regression analysis and time-series forecasting to optimize inventory levels, reduce logistics costs and improve demand prediction accuracy.",
    fullDescription: "Cleaned and preprocessed large datasets to ensure data quality, consistency, and accuracy, laying a solid foundation for reliable model development. Designed and implemented predictive models using Multiple Linear Regression, Random Forest, Decision Trees, and Logistic Regression to forecast critical supply chain metrics, including insurance costs, freight costs, and optimal transportation modes. These models incorporated key variables such as manufacturing site locations, delivery destinations, and operational constraints, enabling precise predictions and better logistical planning. Leveraged statistical techniques to optimize delivery routes and transportation methods, leading to a 15% reduction in overall logistics expenses. Conducted sensitivity analysis to identify the impact of different variables on model performance, enabling data-driven decision-making and improving robustness. Employed backward subset selection for feature optimization, significantly enhancing model accuracy to 94%, which provided actionable insights to streamline supply chain operations.",
    image: "/SPA.png",
    githubUrl: "https://github.com/vansh0016/supplychain",
  },
  "3": {
    title: "Automated Stock Trading System Using AI Agents",
    description: "An AI-driven trading platform built with Python, leveraging agent-based architecture and SMA technical indicators to execute data-driven buy/sell signals, achieving 14% annualized returns while maintaining risk-managed portfolios.",
    fullDescription: "Developed an AI-driven automated stock trading system leveraging a modular agent-based architecture to handle market data collection, technical analysis, risk management, and portfolio optimization. Implemented strategies using Simple Moving Averages (SMA) and advanced algorithms to generate accurate buy, sell, and hold signals. Integrated risk management protocols to assess portfolio exposure, calculate optimal position sizes, and ensure trades adhered to defined risk limits, optimizing for both profitability and safety. Conducted backtesting and achieved a 14% annualized return in simulated trading, outperforming the S&P 500 by 7% over a six-month period. The system demonstrated the potential for real-time decision-making in dynamic financial markets, contributing to improved trading efficiency and profitability.",
    image: "/BT.png",
    githubUrl: "https://github.com/vansh0016",
  },
  "4": {
    title: "Financial Performance Analysis for Revenue Optimization",
    description: "A data-driven solution built with Excel and Power BI, automating financial data processing and leveraging interactive dashboards to optimize revenue streams and identify cost-saving opportunities.",
    fullDescription: "This project focused on transforming financial data into actionable strategies for revenue growth and cost reduction by leveraging Microsoft Excel and Power BI. It began with automating data workflows through Excel macros, which streamlined the cleaning and formatting of financial datasets which include income statements, balance sheets, cash flow statements, reducing manual effort by 30%. Trend and ratio analysis revealed critical insights, such as declining gross margins in specific business units and a tightening liquidity ratio, prompting a reevaluation of cash flow strategies. Interactive dashboards built in Power BI provided real-time visibility into KPIs like revenue performance, cost breakdowns and also identifying inefficiencies. Scenario modeling using Excel’s What-If Analysis tools enabled predictive decision-making, such as forecasting the impact of  price hikes or ad spend reallocation. ",
    image: "/FA.png",
    githubUrl: "https://github.com/vansh0016",
  },
  "5": {
    title: "Prediction Of Parkinson's Disease using Machine Learning",
    description: "A machine learning solution built with Python and XGBoost, analyzing voice parameter datasets to predict Parkinson's risk, enabling early diagnosis and intervention.",
    fullDescription: "In the Prediction of Parkinson’s Disease project, I focused on developing a machine learning model to predict the likelihood of Parkinson’s disease based on voice parameters of patients. I conducted extensive data cleaning, feature engineering and model selection to ensure accurate predictions. By analyzing key vocal features such as pitch, jitter and shimmer, I was able to identify patterns indicative of Parkinson’s disease. Utilizing algorithms like Support Vector Machines (SVM) and Random Forest, the model was trained to recognize these patterns and provide reliable predictions. The project also involved evaluating the model’s performance using metrics such as accuracy, precision and recall. This helped in refining the model for better predictive capabilities. This work significantly enhanced my expertise in data analysis, machine learning and healthcare informatics, contributing to the early detection and treatment of Parkinson’s disease.",
    image: "/PD.png",
    githubUrl: "https://github.com/vansh0016/parkprediction",
  },
  "6": {
    title: "Optimizing Insurance Claims Management with Predictive Modeling and Sentiment Analysis",
    description: "An ML model built with Python, to predict claim outcomes and identify dispute patterns",
    fullDescription: "This project aimed to make insurance claims management smarter and more efficient by using advanced machine learning techniques and natural language processing (NLP). A predictive model, built primarily with Random Forest, was designed to forecast important claim outcomes like resolution times, claim amounts, and denial probabilities. By incorporating sentiment analysis, the project also analyzed claim descriptions to identify patterns linked to delays and disputes, offering a deeper understanding of the factors driving these outcomes. Through detailed multivariate analysis, the project uncovered valuable insights into how variables like coverage types and claim details impact results. By using optimization techniques, such as feature selection, the model achieved impressive accuracy with an R-squared value of 0.82 and a Mean Squared Error of 0.199, proving its ability to deliver reliable predictions. The research provides practical solutions for insurance companies to streamline their claims processes, reduce delays, and improve customer satisfaction. It highlights how data-driven approaches can transform traditional claims management, making it faster, more accurate, and customer-focused.",
    image: "/IC.png",
    githubUrl: "https://github.com/vansh0016/insuranceclaims",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/#projects" className="text-blue-400 hover:underline">
            Return to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(35,46,127)] pt-24">
      <div className="container mx-auto px-4">
        <Link
          to="/#projects"
          className="inline-flex items-center text-white hover:text-gray-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        
        <div className="bg-secondary/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-white">{project.title}</h1>
            
            <p className="text-gray-300 mb-8">
              {project.fullDescription}
            </p>
            
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors border border-white/10"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
