import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";

// Mock data - replace with real data in production
const projects = {
  "1": {
    title: "RL-Based Latent Regime Modeling using β-VAE & GMM",
    description: "An RL-based signal which dynamically infers latent market regimes by optimizing actions through reinforcement learning, allowing the agent to adapt trading strategies and risk exposure as the underlying market structure evolves.",
    fullDescription: "Developed a latent regime inference framework by integrating a β-Variational Autoencoder (β-VAE) with a Gaussian Mixture Model (GMM) to uncover hidden structural patterns in futures and ETF data. The β-VAE compresses high-frequency equity signals into latent features, while the GMM clusters these into distinct regimes such as calm, sideways, crisis and overheated states. This unsupervised, data-driven approach eliminates rigid threshold rules and provides a flexible way to detect regime shifts, enabling more effective risk-aware trading strategies, tactical allocation and portfolio hedging. In the pilot phase, the framework was backtested on multi-asset futures and ETF datasets and tested on major cryptocurrencies (BTC, ETH), achieving Sharpe, Calmar,\ and Sortino ratios all above 1. Alpha scores were consistently positive, ranging from +1–2% in equity allocations to +8–15% in index strategies (SPY/QQQ) and as high as +35–46% in crypto assets, while beta values remained below 1 or near zero. The system also reduced portfolio volatility by approximately 15–20% and cut maximum drawdowns by 30–40%, delivering materially improved downside protection. In addition, a Reinforcement Learning (PPO) agent was integrated on top of the inferred regimes to optimize dynamic allocation decisions, further enhancing the framework’s adaptability to shifting market conditions. Looking forward, the framework is being expanded beyond futures, ETFs and crypto to include options and broader multi-asset hedging applications, with the goal of building a more comprehensive and resilient regime-aware allocation system.",
    image: "/BT.png",
    githubUrl: "https://github.com/vansh0016",
  },
  "2": {
    title: "Parameter-efficient Tuning of Flan-T5",
    description: "Fine-tuned the Flan-T5 Large model using QLoRA for efficient event extraction on noisy real-world text, improving robustness and reducing computational overhead through parameter-efficient training.",
    fullDescription: "Worked on parameter-efficient fine-tuning of Flan-T5 Large using QLoRA (0.8% trainable parameters) for event detection in noisy social media text. Designed a training strategy that combined instruction tuning and gradient checkpointing, reducing GPU memory usage by ~58% while maintaining performance comparable to full fine-tuning. Leveraged speed-optimized training data pipelines, which cut overall training time by nearly 50%, enabling faster experimentation and iteration cycles. Conducted ablations against full fine-tuning (100% parameters), k-shot and zero-shot baselines, confirming that QLoRA-based fine-tuning can achieve the same level of accuracy with a fraction of the resources.",
    image: "/parameter.png",
    githubUrl: "https://github.com/vansh0016",
  },
  "3": {
    title: "Universal Document-Level Information Extraction",
    description: "A document-level information extraction system using Graph Convolutional Networks and meta-learning to perform cross-domain entity and relation extraction, improving generalization and accuracy on unseen domains.",
    fullDescription: "Built a document-level information extraction pipeline by integrating Graph Convolutional Networks (GCNs) with Model-Agnostic Meta-Learning (MAML) to jointly perform Named Entity Recognition (NER) and Relation Extraction (RE) across 34 diverse domains. Designed BERT-enhanced token-level graphs incorporating embeddings, syntactic dependencies and co-reference links to capture richer context beyond sentence boundaries. Implemented balanced relation sampling strategies and structured output formatting to address domain variability and reduce class imbalance, ensuring higher accuracy and consistent outputs across tasks. This approach delivered 25–30% F1 improvements on previously unseen domains compared to strong LLM baselines, demonstrating significant gains in generalization, scalability and robustness for real-world NLP applications.",
    image: "/DocIE.png",
    githubUrl: "https://github.com/vansh0016",
  },
  "4": {
    title: "Options Pricing` and Hedging Strategies",
    description: "Developed an options pricing and hedging framework using Black-Scholes and Binomial models with Monte Carlo simulations to model stochastic price dynamics and evaluate risk mitigation strategies across market regimes.",
    fullDescription: "The options pricing and hedging project focused on developing a comprehensive quantitative framework to model derivative pricing, portfolio risk and dynamic hedging strategies under varying market conditions. Using the Black-Scholes and Binomial models, option prices and Greeks such as Delta, Gamma and Vega were computed to assess sensitivity and optimize rebalancing decisions. Monte Carlo simulations were employed to model stochastic price dynamics and volatility behavior, enabling realistic scenario analysis and stress testing. The framework further evaluated hedging efficiency and Value-at-Risk reduction across different market regimes, demonstrating the practical application of quantitative modeling to enhance portfolio stability and risk-adjusted performance.",
    image: "/pricing.png",
    githubUrl: "https://github.com/vansh0016",
  },
  "5": {
    title: "Supply Chain Analytics Using Statistical Methods",
    description: "A statistical modeling solution built with R, utilizing regression analysis and time-series forecasting to optimize inventory levels, reduce logistics costs and improve demand prediction accuracy.",
    fullDescription: "Cleaned and preprocessed large datasets to ensure data quality, consistency, and accuracy, laying a solid foundation for reliable model development. Designed and implemented predictive models using Multiple Linear Regression, Random Forest, Decision Trees, and Logistic Regression to forecast critical supply chain metrics, including insurance costs, freight costs, and optimal transportation modes. These models incorporated key variables such as manufacturing site locations, delivery destinations, and operational constraints, enabling precise predictions and better logistical planning. Leveraged statistical techniques to optimize delivery routes and transportation methods, leading to a 15% reduction in overall logistics expenses. Conducted sensitivity analysis to identify the impact of different variables on model performance, enabling data-driven decision-making and improving robustness. Employed backward subset selection for feature optimization, significantly enhancing model accuracy to 94%, which provided actionable insights to streamline supply chain operations.",
    image: "/SPA.png",
    githubUrl: "https://github.com/vansh0016/supplychain",
  },
  "6": {
    title: "Financial Performance Analysis for Revenue Optimization",
    description: "A data-driven solution built with Excel and Power BI, automating financial data processing and leveraging interactive dashboards to optimize revenue streams and identify cost-saving opportunities.",
    fullDescription: "This project focused on transforming financial data into actionable strategies for revenue growth and cost reduction by leveraging Microsoft Excel and Power BI. It began with automating data workflows through Excel macros, which streamlined the cleaning and formatting of financial datasets which include income statements, balance sheets, cash flow statements, reducing manual effort by 30%. Trend and ratio analysis revealed critical insights, such as declining gross margins in specific business units and a tightening liquidity ratio, prompting a reevaluation of cash flow strategies. Interactive dashboards built in Power BI provided real-time visibility into KPIs like revenue performance, cost breakdowns and also identifying inefficiencies. Scenario modeling using Excel’s What-If Analysis tools enabled predictive decision-making, such as forecasting the impact of  price hikes or ad spend reallocation. ",
    image: "/FA.png",
    githubUrl: "https://github.com/vansh0016",
  },
  "7": {
    title: "Prediction Of Parkinson's Disease using Machine Learning",
    description: "A machine learning solution built with Python and XGBoost, analyzing voice parameter datasets to predict Parkinson's risk, enabling early diagnosis and intervention.",
    fullDescription: "In the Prediction of Parkinson’s Disease project, I focused on developing a machine learning model to predict the likelihood of Parkinson’s disease based on voice parameters of patients. I conducted extensive data cleaning, feature engineering and model selection to ensure accurate predictions. By analyzing key vocal features such as pitch, jitter and shimmer, I was able to identify patterns indicative of Parkinson’s disease. Utilizing algorithms like Support Vector Machines (SVM) and Random Forest, the model was trained to recognize these patterns and provide reliable predictions. The project also involved evaluating the model’s performance using metrics such as accuracy, precision and recall. This helped in refining the model for better predictive capabilities. This work significantly enhanced my expertise in data analysis, machine learning and healthcare informatics, contributing to the early detection and treatment of Parkinson’s disease.",
    image: "/PD.png",
    githubUrl: "https://github.com/vansh0016/parkprediction",
  },
  "8": {
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
