import React from "react";
import { Shield, Scale, Eye, Target, Lock, BookOpen, CheckCircle, Users } from "lucide-react";

const CodeOfConduct = () => {
  const principles = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Honesty and Good Faith",
      description: "Research analyst or research entity shall act honestly and in good faith."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Diligence",
      description: "Research analyst or research entity shall act with due skill, care and diligence and shall ensure that the research report is prepared after thorough analysis."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Conflict of Interest",
      description: "Research analyst or research entity shall effectively address conflict of interest which may affect the impartiality of its research analysis and research report and shall make appropriate disclosures to address the same."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Insider Trading or Front Running",
      description: "Research analyst or research entity or its employees shall not engage in insider trading or front running or front running of its own research report."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Confidentiality",
      description: "Research analyst or research entity or its employees shall maintain confidentiality of report till the report is made public."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Professional Standard",
      description: "Research analyst or research entity or its employees engaged in research analysis shall observe high professional standard while preparing research report."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Compliance",
      description: "Research analyst or research entity shall comply with all regulatory requirements applicable to the conduct of its business activities."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Responsibility of Senior Management",
      description: "The senior management of a research analyst or research entity shall bear primary responsibility for ensuring the maintenance of appropriate standards of conduct and adherence to proper procedures."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Code of Conduct
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For Research Analysts & Research Entities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            At RGX Technical Research, we are committed to maintaining the highest standards 
            of professional conduct and ethical behavior. Our Code of Conduct outlines the fundamental 
            principles that guide our research activities and ensure the integrity of our analysis.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {principle.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We pledge to uphold these principles in every aspect of our research and analysis, 
              ensuring that our clients receive unbiased, thorough, and reliable market insights 
              that they can trust for their investment decisions.
            </p>
          </div>
        </div>

       
      </div>
     
    </div>
  );
};

export default CodeOfConduct;