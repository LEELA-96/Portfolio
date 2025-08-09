import React from 'react';

const data = {
  name: "Leela Prasad A",
  role: "Senior AI/ML Engineer – AWS Certified",
  location: "Dallas, TX",
  email: "leelaprasad.it@gmail.com",
  phone: "+1 (469) 298-9432",
  github: "https://github.com/LEELA-96",
  linkedin: "https://linkedin.com/in/your-linkedin", // Replace with actual
  summary: `Senior AI/ML Engineer with 8+ years in Generative AI, NLP, and data engineering across finance, healthcare, and e-commerce. Expert in RAG platforms, LLMOps, and hybrid-cloud deployments — delivering 40% faster query resolution, 30% hallucination reduction, and 99.9% uptime.`,
  skills: [
    {
      category: "Data Analysis & Visualization",
      items: ["Excel", "Tableau", "AWS QuickSight", "Snowflake", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "LangChain", "LangSmith"]
    },
    {
      category: "Generative AI & NLP",
      items: ["LLMs", "RAG", "Prompt Engineering", "Transformers", "LoRA", "QLoRA", "PEFT", "OpenAI GPT-4/3.5", "Anthropic", "Amazon Bedrock"]
    },
    {
      category: "Development & MLOps",
      items: ["Python", "FastAPI", "Flask", "Docker", "Kubernetes (EKS/AKS)", "Jenkins", "Terraform", "MLflow", "Azure ML", "SageMaker"]
    },
    {
      category: "Data Engineering",
      items: ["Apache Spark", "Kafka", "Airflow", "AWS Glue", "Kinesis", "PostgreSQL", "OpenSearch", "Elasticsearch"]
    }
  ],
  projects: [
    {
      title: "Hybrid-cloud RAG Platform — Fidelity",
      subtitle: "OpenSearch + LangChain orchestration for enterprise RAG",
      details: [
        "Architected hybrid-cloud RAG — improved retrieval accuracy by 25%.",
        "Automated ingestion of 5M+ docs and multi-model embeddings.",
        "Built FastAPI microservices used by 12+ business units.",
        "Reduced average query resolution time by 40%."
      ]
    },
    {
      title: "Virtual Health Assistant — Teladoc Health",
      subtitle: "Conversational AI & MLOps enablement",
      details: [
        "Improved user satisfaction by 25% via model & tooling improvements.",
        "Built MLOps pipelines with Azure ML, Databricks, MLflow.",
        "Fine-tuned BioBERT/ClinicalBERT and integrated LLM flows.",
        "Implemented monitoring (Prometheus, Grafana)."
      ]
    },
    {
      title: "Product Search Analytics — DataBeat",
      subtitle: "Real-time product search pipelines",
      details: [
        "Processed 500M+ search events monthly (Spark).",
        "Developed real-time ingestion with Kafka & Kinesis.",
        "Improved search relevance & reduced \"no results\" queries.",
        "Delivered dashboards using Tableau & QuickSight."
      ]
    },
    {
      title: "Customer Analytics & Automation — iLink Digital",
      subtitle: "Automation, APIs & ETL",
      details: [
        "Processed 500K+ daily records, reducing manual work 65%.",
        "Built Flask REST APIs delivering KPIs within seconds.",
        "Improved query performance by 70% via indexing & caching."
      ]
    }
  ],
  experience: [
    {
      role: "Senior ML Engineer — ECCP",
      company: "Fidelity Investments",
      dates: "May 2024 – Present",
      location: "NC",
      points: [
        "Architected hybrid-cloud RAG (OpenSearch & LangChain) — +25% retrieval accuracy, -40% query time.",
        "Automated ingestion for 5M+ docs; multi-model embeddings; FastAPI microservices adopted by 12+ teams.",
        "Fine-tuned GPT & Anthropic LLMs via LoRA/QLoRA & PEFT; reduced hallucinations 30%.",
        "Led CI/CD with Jenkins & Terraform; managed AWS EKS & Azure AKS deployments (99.9% uptime)."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Teladoc Health",
      dates: "Jul 2021 – Aug 2022",
      location: "Lewisville, TX",
      points: [
        "Improved virtual assistant satisfaction by 25% through model improvements & tooling.",
        "Built MLOps pipelines (Azure ML, Databricks, MLflow) reducing deployment time to <1 day."
      ]
    },
    {
      role: "Data Engineer",
      company: "DataBeat",
      dates: "Jun 2019 – Jun 2021",
      location: "Hyderabad, India",
      points: [
        "Processed 500M+ monthly search events with Spark; reduced analytics latency from 24h to 3h.",
        "Integrated Elasticsearch with relevance tuning; improved search accuracy 40%."
      ]
    },
    {
      role: "Python Developer",
      company: "iLink Digital",
      dates: "May 2017 – May 2019",
      location: "Chennai, India",
      points: [
        "Automated 500K+ daily records; saved $50K annually; built REST APIs & ETL pipelines."
      ]
    }
  ],
  education: [
    {
      degree: "MS, Computer Science",
      school: "University of North Texas"
    },
    {
      degree: "BTech, Computer Science",
      school: "SRKR Engineering College"
    }
  ],
  certifications: [
    "AWS Certified ML Specialty",
    "Microsoft Azure AI Associate",
    "Generative AI (DeepLearning.AI)",
    "Mathematics for ML (Imperial College London)",
    "Databases & SQL (IBM)"
  ]
};

function SectionTitle({ children }) {
  return <h2 className="text-cyan-400 text-xl font-semibold mb-4 border-b border-cyan-700 pb-1 inline-block">{children}</h2>;
}

function App() {
  return (
    <div className="min-h-screen bg-[#081018] text-[#e6eef3] font-sans px-6 py-8 max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <div>
          <h1 className="text-3xl font-extrabold">{data.name}</h1>
          <p className="text-cyan-400 font-semibold">{data.role}</p>
          <p className="text-gray-400">{data.location}</p>
          <div className="mt-2 flex flex-wrap gap-4">
            <a href={`mailto:${data.email}`} className="text-cyan-400 hover:underline">📧 {data.email}</a>
            <a href={`tel:${data.phone.replace(/[^0-9]/g, '')}`} className="text-cyan-400 hover:underline">📱 {data.phone}</a>
          </div>
          <div className="mt-3 flex gap-3">
            <a href={data.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-mono">GitHub</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-mono">LinkedIn</a>
          </div>
        </div>
      </header>

      <section className="mb-12">
        <SectionTitle>Summary</SectionTitle>
        <p className="text-gray-300 leading-relaxed max-w-3xl">{data.summary}</p>
      </section>

      <section className="mb-12">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {data.skills.map(({ category, items }) => (
            <div key={category} className="bg-[#0d1115] rounded-md p-4 border border-[#1f2937]">
              <h3 className="text-cyan-400 font-semibold mb-2">{category}</h3>
              <ul className="list-disc list-inside text-gray-400 text-sm">
                {items.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {data.projects.map(({ title, subtitle, details }) => (
            <article key={title} className="bg-[#0d1115] p-4 rounded-md border border-[#1f2937] shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-cyan-300 font-semibold">{title}</h3>
              <p className="text-gray-400 text-sm mb-2">{subtitle}</p>
              <ul className="list-disc list-inside text-gray-400 text-xs">
                {details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-6 max-w-4xl">
          {data.experience.map(({ role, company, dates, location, points }) => (
            <div key={role + company} className="bg-[#0d1115] p-4 rounded-md border border-[#1f2937]">
              <h3 className="text-cyan-300 font-semibold">{role}</h3>
              <p className="text-gray-400 text-sm mb-1">{company} • {dates} • {location}</p>
              <ul className="list-disc list-inside text-gray-400 text-xs">
                {points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle>Education & Certifications</SectionTitle>
        <div className="max-w-4xl">
          <h4 className="text-cyan-400 font-semibold mb-2">Education</h4>
          <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
            {data.education.map(({ degree, school }) => (
              <li key={degree}>{degree} — {school}</li>
            ))}
          </ul>
          <h4 className="text-cyan-400 font-semibold mb-2">Certifications</h4>
          <ul className="list-disc list-inside text-gray-400 text-sm">
            {data.certifications.map(cert => <li key={cert}>{cert}</li>)}
          </ul>
        </div>
      </section>

      <footer className="text-center text-gray-600 text-xs py-6 border-t border-gray-700">
        © 2025 Leela Prasad A — Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
