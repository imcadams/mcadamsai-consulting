import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import ServiceCard, { ServiceCardProps } from "@/components/ServiceCard";
import CaseStudyAccordion from "@/components/CaseStudyAccordion";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      service: {
        title: "Enterprise GenAI Systems",
        icon: CpuChipIcon,
        description:
          "Production-grade implementations using GPT-4o and Claude 3.5",
        features: [
          "Multi-agent architectures",
          "RAG pipelines",
          "LLM evaluation frameworks",
        ],
      },
    },
    {
      service: {
        title: "AI Process Automation",
        icon: ServerStackIcon,
        description: "Agentic workflows for business operations",
        features: [
          "AWS Bedrock Agents",
          "Azure AI Studio",
          "Custom embeddings",
        ],
      },
    },
    {
      service: {
        title: "Technical Leadership",
        icon: CodeBracketIcon,
        description: "Architecture design & team enablement",
        features: [
          "GenAI strategy",
          "Technical debt reduction",
          "Mentorship programs",
        ],
      },
    },
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Strategic GenAI Consulting for Enterprises
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Transforming business processes through production-ready AI systems
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Schedule Technical Audit
            </a>
            <a
              href="#case-studies"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition dark:text-blue-400 dark:border-blue-400"
            >
              View Case Studies
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16" id="services">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Specialized GenAI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.service.title}
                service={service.service}
              />
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-white dark:bg-gray-800 rounded-xl">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Trusted Technical Foundations
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <TechStackBadge name="AWS Bedrock" color="orange" />
              <TechStackBadge name="Azure AI Studio" color="blue" />
              <TechStackBadge name="LangChain" color="green" />
              <TechStackBadge name="Python/TypeScript" color="purple" />
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16" id="case-studies">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Enterprise Implementation Showcases
          </h2>
          <CaseStudyAccordion />
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

// TechStackBadge component (inline for simplicity)
function TechStackBadge({ name, color }: { name: string; color: string }) {
  const colorClasses = {
    orange:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    purple:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };

  return (
    <span
      className={`${colorClasses[color]} px-4 py-2 rounded-full text-sm font-medium`}
    >
      {name}
    </span>
  );
}
