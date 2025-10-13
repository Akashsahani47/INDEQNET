import React from "react";
import { 
  Target, 
  Eye, 
  Users, 
  Shield, 
  FileText, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  BookOpen,
  Lock,
  Scale,
  Heart
} from "lucide-react";

const InvestorCharter = () => {
  const visionMission = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vision",
      content: "Invest with knowledge & safety."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Mission",
      content: "Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness."
    }
  ];

  const businessDetails = [
    "To publish research report based on the research activities of the RA",
    "To provide an independent unbiased view on securities.",
    "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
    "To provide research recommendation, based on analysis of publicly available information and known observations.",
    "To conduct audit annually",
    "To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.",
    "To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place."
  ];

  const services = [
    {
      category: "Onboarding & Documentation",
      items: [
        "Onboarding of Clients",
        "Sharing of terms and conditions of research service",
        "Completing KYC of fee paying clients"
      ]
    },
    {
      category: "Disclosure & Transparency",
      items: [
        "Disclosure of material information for informed decision making",
        "Disclosure of business activity and disciplinary history",
        "Disclosure of the extent of use of Artificial Intelligence tools",
        "Disclosure of third-party research provider conflicts",
        "Disclosure of conflicts of interest between research and other activities"
      ]
    },
    {
      category: "Service Standards",
      items: [
        "Distribution of research reports without discrimination",
        "Maintaining confidentiality until reports are public",
        "Respecting data privacy rights and protecting information",
        "Adherence to disclosed service timelines",
        "Providing clear guidance and caution notices for complex products",
        "Treating all clients with honesty and integrity",
        "Ensuring confidentiality of client information"
      ]
    }
  ];

  const grievanceMechanism = [
    {
      title: "Direct Complaint to Research Analyst",
      description: "Investors may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "SCORES 2.0 Portal",
      description: "Web-based centralized grievance redressal system of SEBI for effective time-bound resolution.",
      link: "https://scores.sebi.gov.in",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "RAASB Email",
      description: "Direct email to designated email ID of Research Analyst Administration and Supervisory Body.",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "SMARTODR Platform",
      description: "Online conciliation or arbitration for unresolved complaints.",
      icon: <Scale className="w-6 h-6" />
    }
  ];

  const investorRights = [
    { icon: <Lock className="w-5 h-5" />, text: "Right to Privacy and Confidentiality" },
    { icon: <Eye className="w-5 h-5" />, text: "Right to Transparent Practices" },
    { icon: <Scale className="w-5 h-5" />, text: "Right to fair and Equitable Treatment" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Right to Adequate Information" },
    { icon: <FileText className="w-5 h-5" />, text: "Right to Initial and Continuing Disclosure" },
    { icon: <Shield className="w-5 h-5" />, text: "Right to Fair & True Advertisement" },
    { icon: <Clock className="w-5 h-5" />, text: "Right to Awareness about Service Parameters" },
    { icon: <Users className="w-5 h-5" />, text: "Right to be Heard and Satisfactory Grievance Redressal" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Right to have timely redressal" },
    { icon: <ArrowRight className="w-5 h-5" />, text: "Right to Exit from Financial product or service" },
    { icon: <AlertCircle className="w-5 h-5" />, text: "Right to receive clear guidance and caution notice" },
    { icon: <Heart className="w-5 h-5" />, text: "Additional Rights to vulnerable consumers" }
  ];

  const investorDos = [
    "Always deal with SEBI registered Research Analyst.",
    "Ensure that the Research Analyst has a valid registration certificate.",
    "Check for SEBI registration number.",
    "Refer to the list of SEBI registered Research Analysts on SEBI website.",
    "Pay attention towards disclosures made in the research reports before investing.",
    "Pay your Research Analyst through banking channels only and maintain duly signed receipts.",
    "Check for research recommendation before buying/selling securities.",
    "Ask all relevant questions and clear your doubts before acting on recommendation.",
    "Seek clarifications on complex and high risk financial products.",
    "Be aware of your right to stop availing services as per terms.",
    "Provide feedback to your Research Analyst on services received.",
    "Do not be bound by clauses contravening regulatory provisions.",
    "Inform SEBI about Research Analyst offering assured or guaranteed returns."
  ];

  const investorDonts = [
    "Do not provide funds for investment to the Research Analyst.",
    "Don't fall prey to luring advertisements or market rumors.",
    "Do not get attracted to limited period discount or other incentive, gifts, etc.",
    "Do not share login credentials and password of your trading and demat accounts."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
  
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Investor Charter
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For Research Analysts & Research Entities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* A. Vision & Mission */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">A. Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionMission.map((item, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-green-400 mb-4">{item.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* B. Business Details */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">B. Business Details</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <ul className="space-y-4">
              {businessDetails.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-300">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* C. Services Provided */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">C. Services Provided</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-green-400 mb-4 text-center">{service.category}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* D. Grievance Redressal */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">D. Grievance Redressal Mechanism</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {grievanceMechanism.map((item, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-green-400">{item.title}</h3>
                </div>
                <p className="text-gray-300 mb-3">{item.description}</p>
                {item.link && (
                  <a href={item.link} className="text-green-400 hover:text-green-300 transition-colors duration-300 text-sm">
                    {item.link}
                  </a>
                )}
              </div>
            ))}
          </div>
          
          {/* Physical Complaint Address */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mt-8">
            <h3 className="text-lg font-bold text-green-400 mb-4 text-center">Physical Complaints Address</h3>
            <div className="text-gray-300 text-center">
              <p>Office of Investor Assistance and Education,</p>
              <p>Securities and Exchange Board of India,</p>
              <p>SEBI Bhavan, Plot No. C4-A, 'G' Block,</p>
              <p>Bandra-Kurla Complex, Bandra (E),</p>
              <p>Mumbai - 400 051</p>
            </div>
          </div>
        </section>

        {/* E. Investor Rights */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">E. Rights of Investors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {investorRights.map((right, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {right.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{right.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* F. Investor Responsibilities */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">F. Expectations from Investors</h2>
          
          {/* Do's */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Do's</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {investorDos.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Don'ts */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Don'ts</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {investorDonts.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default InvestorCharter;