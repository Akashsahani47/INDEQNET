import React from "react";
import { 
  Shield, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Award,
  CheckCircle,
  Users,
  MapPin,
  Building
} from "lucide-react";

const ComplianceData = () => {
  const companyInfo = [
    {
      icon: <Building className="w-6 h-6" />,
      label: "Registered Name",
      value: "RGX RESEARCH PRIVATE LIMITED"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Registration Number",
      value: "INH000021094"
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "BSE Enlistment No.",
      value: "6577"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      label: "Type",
      value: "Research Entity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Category",
      value: "Non-Individual"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Address",
      value: "White Orchid Shop 105 Beside Shell Petrol Pump, Adajan Dn, Surat City, Surat, Gujarat, 395009"
    }
  ];

  const officerInfo = [
    {
      role: "Principal Officer",
      name: "RGX",
      mobile: "9326872065",
      email: "rgxresearch3@gmail.com",
      icon: <User className="w-6 h-6" />
    },
    {
      role: "Compliance Officer / Grievance Officer",
      name: "Ms. Devanshi P. Sheth",
      mobile: "9324060130",
      email: "rgxcompliance@gmail.com",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91 9833883611",
      href: "tel:+919833883611"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "ritesh.gokani3@gmail.com",
      href: "mailto:ritesh.gokani3@gmail.com"
    }
  ];

  const complianceFeatures = [
    "SEBI Registered Research Analyst",
    "Regular Internal Audits",
    "Transparent Disclosure Practices",
    "Conflict of Interest Management",
    "Client Data Protection",
    "Regulatory Compliance Monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
       
        {/* Company Information */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Company Information</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-400 mb-1">{info.label}</h3>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Officer Information */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Key Officers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {officerInfo.map((officer, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    {officer.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400">{officer.role}</h3>
                    <p className="text-gray-300">{officer.name}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Mobile Number</p>
                      <a 
                        href={`tel:+91${officer.mobile}`}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                      >
                        +91 {officer.mobile}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email Address</p>
                      <a 
                        href={`mailto:${officer.email}`}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                      >
                        {officer.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Contact Information</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <span className="text-gray-300 text-lg">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Compliance Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComplianceData;