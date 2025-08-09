import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const App = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 bg-panel rounded-lg shadow-lg mt-12">
      
      {/* Left Panel */}
      <motion.aside
        className="w-full md:w-80 bg-[#0d1115] rounded-xl p-6 flex flex-col items-center text-center sticky top-12 self-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent to-accent2 flex items-center justify-center mb-4 text-[#042022] font-mono font-extrabold text-4xl shadow-lg">
          LP
        </div>
        <h1 className="text-xl font-extrabold mb-1">Leela Prasad A</h1>
        <p className="text-muted mb-4 text-sm">Senior AI/ML Engineer – AWS Certified</p>
        <p className="text-muted text-xs mb-4">Dallas, Texas</p>

        <div className="text-left w-full space-y-3 text-sm text-muted">
          <div>
            <strong className="text-accent">Email:</strong><br />
            <a href="mailto:leelaprasad.it@gmail.com" className="text-accent hover:underline">leelaprasad.it@gmail.com</a>
          </div>
          <div>
            <strong className="text-accent">Phone:</strong><br />
            <a href="tel:+14692989432" className="text-accent hover:underline">+1 (469) 298-9432</a>
          </div>
          <div>
            <strong className="text-accent">Profiles:</strong><br />
            <a href="https://github.com/LEELA-96" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#15202B] px-3 py-1 rounded text-sm hover:bg-accent hover:text-[#042022] transition mr-2">GitHub</a>
            <a href="#" onClick={() => alert('Send me your LinkedIn URL!')} className="inline-block bg-[#15202B] px-3 py-1 rounded text-sm hover:bg-accent hover:text-[#042022] transition">LinkedIn</a>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['LLMs', 'RAG', 'MLOps', 'Data Eng'].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded bg-[#15202B] text-muted">{tag}</span>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Right Content */}
      <motion.main
        className="flex-1 space-y-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero */}
        <section>
          <h2 className="text-3xl font-extrabold mb-2 text-accent2">
            Senior AI/ML Engineer — Generative AI • LLMs • Data Engineering
          </h2>
          <p className="text-muted max-w-xl">
            Senior AI/ML Engineer with 8+ years in Generative AI, NLP, and data engineering across finance, healthcare, and e-commerce. Expert in RAG platforms, LLMOps, and hybrid-cloud deployments — delivering 40% faster query resolution, 30% hallucination reduction, and 99.9% uptime.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-bold text-accent mb-3">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted text-sm">
            <div>
              <h4 className="font-semibold mb-1 text-accent">Data Analysis & Visualization</h4>
              Excel, Tableau, AWS QuickSight, Snowflake, Pandas, NumPy, Matplotlib, Seaborn, SciPy, LangChain, LangSmith
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-accent">Generative AI & NLP</h4>
              LLMs, RAG, Prompt Engineering, Transformers, LoRA, QLoRA, PEFT, OpenAI GPT-4/3.5, Anthropic, Amazon Bedrock
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-accent">Development & MLOps</h4>
              Python, FastAPI, Flask, Docker, Kubernetes (EKS/AKS), Jenkins, Terraform, MLflow, Azure ML, SageMaker
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-accent">Data Engineering</h4>
              Apache Spark, Kafka, Airflow, AWS Glue, Kinesis, PostgreSQL, OpenSearch, Elasticsearch
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="text-xl font-bold text-accent mb-3">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Hybrid-cloud RAG Platform — Fidelity",
                description: "OpenSearch + LangChain orchestration for enterprise RAG",
                bullets: [
                  "Architected hybrid-cloud RAG — improved retrieval accuracy by 25%.",
                  "Automated ingestion of 5M+ docs and multi-model embeddings.",
                  "Built FastAPI microservices used by 12+ business units.",
                  "Reduced average query resolution time by 40%.",
                ],
              },
              {
                title: "Virtual Health Assistant — Teladoc Health",
                description: "Conversational AI & MLOps enablement",
                bullets: [
                  "Improved user satisfaction by 25% via model & tooling improvements.",
                  "Built MLOps pipelines with Azure ML, Databricks, MLflow.",
                  "Fine-tuned BioBERT/ClinicalBERT and integrated LLM flows.",
                  "Implemented monitoring (Prometheus, Grafana).",
                ],
              },
              {
                title: "Product Search Analytics — DataBeat",
                description: "Real-time product search pipelines",
                bullets: [
                  "Processed 500M+ search events monthly (Spark).",
                  "Developed real-time ingestion with Kafka & Kinesis.",
                  "Improved search relevance & reduced 'no results' queries.",
                  "Delivered dashboards using Tableau & QuickSight.",
                ],
              },
              {
                title: "Customer Analytics & Automation — iLink Digital",
                description: "Automation, APIs & ETL",
                bullets: [
                  "Processed 500K+ daily records, reducing manual work 65%.",
                  "Built Flask REST APIs delivering KPIs within seconds.",
                  "Improved query performance by 70% via indexing & caching.",
                ],
              },
            ].map(({ title, description, bullets }) => (
              <motion.article
                key={title}
                className="bg-[#0c1114] rounded-lg p-5 shadow hover:shadow-lg transition cursor-pointer"
                initial="initial"
                whileHover={{ scale: 1.03 }}
                tabIndex={0}
                aria-label={title}
              >
                <h4 className="text-accent font-semibold mb-1">{title}</h4>
                <p className="text-muted text-sm mb-2">{description}</p>
                <ul className="list-disc list-inside text-xs text-[#bfefff] space-y-1">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-xl font-bold text-accent mb-3">Experience</h3>
          <div className="space-y-6 text-sm text-[#cfeff6]">
            <article>
              <h4 className="text-accent2 font-semibold">Senior ML Engineer — ECCP</h4>
              <p className="text-muted text-xs">Fidelity Investments • May 2024 – Present • NC</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Architected hybrid-cloud RAG (OpenSearch & LangChain) — +25% retrieval accuracy, -40% query time.</li>
                <li>Automated ingestion for 5M+ docs; multi-model embeddings; FastAPI microservices adopted by 12+ teams.</li>
                <li>Fine-tuned GPT & Anthropic LLMs via LoRA/QLoRA & PEFT; reduced hallucinations 30%.</li>
                <li>Led CI/CD with Jenkins & Terraform; managed AWS EKS & Azure AKS deployments (99.9% uptime).</li>
              </ul>
            </article>
            <article>
              <h4 className="text-accent2 font-semibold">Machine Learning Engineer</h4>
              <p className="text-muted text-xs">Teladoc Health • Jul 2021 – Aug 2022 • Lewisville, TX</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Improved virtual assistant satisfaction by 25% through model improvements & tooling.</li>
                <li>Built MLOps pipelines (Azure ML, Databricks, MLflow) reducing deployment time to &lt;1 day.</li>
              </ul>
            </article>
            <article>
              <h4 className="text-accent2 font-semibold">Data Engineer</h4>
              <p className="text-muted text-xs">DataBeat • Jun 2019 – Jun 2021 • Hyderabad, India</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Processed 500M+ monthly search events with Spark; reduced analytics latency from 24h to 3h.</li>
                <li>Integrated Elasticsearch with relevance tuning; improved search accuracy 40%.</li>
              </ul>
            </article>
            <article>
              <h4 className="text-accent2 font-semibold">Python Developer</h4>
              <p className="text-muted text-xs">iLink Digital • May 2017 – May 2019 • Chennai, India</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Automated 500K+ daily records; saved $50K annually; built REST APIs & ETL pipelines.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Education & Certifications */}
        <section>
          <h3 className="text-xl font-bold text-accent mb-3">Education & Certifications</h3>
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <div className="bg-[#0c1114] rounded-lg p-4 flex-1 min-w-[250px]">
              <h4 className="text-accent font-semibold mb-2">MS, Computer Science</h4>
              University of North Texas
            </div>
            <div className="bg-[#0c1114] rounded-lg p-4 flex-1 min-w-[250px]">
              <h4 className="text-accent font-semibold mb-2">BTech, Computer Science</h4>
              SRKR Engineering College
            </div>
            <div className="bg-[#0c1114] rounded-lg p-4 flex-1 min-w-[250px]">
              <h4 className="text-accent font-semibold mb-2">AWS ML – Specialty</h4>
              AWS Certified ML Specialty
            </div>
            <div className="bg-[#0c1114] rounded-lg p-4 flex-1 min-w-[250px]">
              <h4 className="text-accent font-semibold mb-2">Azure AI Associate</h4>
              Microsoft Azure AI
            </div>
            <div className="bg-[#0c1114] rounded-lg p-4 flex-1 min-w-[250px]">
              <h4 className="text-accent font-semibold mb-2">Generative AI</h4>
              DeepLearning.AI — LLMs
            </div>
            <div className="bg-[#0c1114] rounded-lg p-4 flex-1 min-w-[250px]">
              <h4 className="text-accent font-semibold mb-2">Mathematics for ML</h4>
              Imperial College London
            </div>
            <div className="bg-[#0c1114] rounded-lg p-4 flex-1 min-w-[250px]">
              <h4 className="text-accent font-semibold mb-2">Databases & SQL</h4>
              IBM
            </div>
          </div>
        </section>

        <footer className="text-muted text-xs text-center mt-12 mb-6">
          © 2025 Leela Prasad A — Built for recruiters & hiring teams •{' '}
          <a href="mailto:leelaprasad.it@gmail.com" className="text-accent hover:underline">
            Contact
          </a>
        </footer>
      </motion.main>
    </div>
  );
};

export default App;
