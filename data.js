// ============================================================
//  data.js  —  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
//  All content is here. Touch nothing else for routine updates.
// ============================================================

const DATA = {

  // ── PERSONAL ─────────────────────────────────────────────
  personal: {
    name:       "Pranay Jain",
    title:      "Data & AI Automation Analyst",
    tagline:    "I build systems that turn noise into signal - and manual effort into automation.",
    about:      "VIT EEE grad who ended up obsessed with the gap between data existing and data being useful. At Deloitte I build audit intelligence pipelines, outside work I build AI agents that automate the boring parts of my digital life. I care less about the tech stack and more about whether the output actually changes how someone works.",
    location:   "Chennai, India",
    email:      "pranayjain354@gmail.com",
    phone:      "+91 9150924356",
    links: {
      linkedin:  "https://www.linkedin.com/in/pranay-jain-650ab0147/",        // ← replace with your URL
      portfolio: "#",
      leetcode:  "https://leetcode.com/u/pranayjain29/",        // ← replace
      blog:      "https://pranaykjain.blogspot.com",
      github:    "https://github.com/pranayjain29",           // ← replace
      resume:    "Pranay_Jain_Resume.pdf"        // ← put your PDF in same folder
    }
  },

  // ── HERO STATS TICKER ────────────────────────────────────
  // These scroll across the hero section
  stats: [
    { value: "50+",   label: "Dashboards Built"         },
    { value: "90%",   label: "Manual Effort Eliminated" },
    { value: "12",    label: "Audit Fraud Tests Automated"    },
    { value: "60%",   label: "Audit Effort Cut"         },
    { value: "9.27",  label: "CGPA at VIT"              },
    { value: "200+",  label: "LeetCode Problems"        },
    { value: "Days → 1hr", label: "Fraud Analysis Automation" },
    { value: "7+",     label: "AI Agents in Pipeline"    },
  ],

  // ── PROJECTS ─────────────────────────────────────────────
  // hook:    shown on the card BEFORE expanding (make them want to click)
  // problem: the "why did this need to exist"
  // approach: what you actually built / how you thought about it
  // outcome: the result / impact
  // bullets: detailed points shown in expanded modal
  projects: [
    {
      id:       "audit-ai",
      title:    "Audit AI Agent",
      period:   "Mar – Apr 2026",
      stack:    ["OpenAI Agents SDK", "Claude", "Databricks", "PySpark"],
      hook:     "What if a week of fraud analysis happened while you brewed coffee?",
      problem:  "Financial audits require running 12+ journal-entry fraud tests across hundreds of thousands of rows - manually, by auditors and analysts, taking days per engagement.",
      approach: "Architected a multi-agent pipeline: four specialist sub-agents (account, amount, temporal, user-behavior) each run their domain tests in parallel, then cross-feed flagged entities to a corroboration layer. An orchestrator ReAct agent synthesises findings into a weighted composite risk score and generates structured outputs.",
      outcome:  "Manual audit sampling effort cut from days to under one hour. Outputs are an Excel workbook ordered by risk score + a narrative fraud story document - ready to present to an engagement partner.",
      bullets: [
        "4 specialist sub-agents + orchestrator over PySpark - fully automated 12 journal-entry fraud tests",
        "Cross-agent corroboration: agents share flagged journal numbers and users of interest, surfacing highest-risk entries",
        "PySpark-native risk engine with hierarchical flagging, percent-rank windowing, cross-test bonus logic",
        "ReAct-protocol orchestrator with exponential backoff and shared flagged-cache",
        "Output: risk-ordered Excel workbook + narrative fraud docx, presentation-ready"
      ],
      github:   "https://github.com/pranayjain29/Innovation-Day",   // ← replace
      demo:     "",                      // ← add live demo link if any
      color:    "#b8975a"
    },
    {
      id:       "engrain",
      title:    "Engrain — AI Reading Assistant",
      period:   "Jan – Feb 2026",
      stack:    ["FastAPI", "Gemini", "Docker", "GCP", "Cloud Run"],
      hook:     "Reading without retaining is just entertainment. This fixes that.",
      problem:  "People highlight, annotate, and read extensively - then remember almost none of it. Note-taking tools help store, but not think.",
      approach: "Built a full-stack learning platform where highlights are semantically indexed (not just stored), and an AI chat layer operates in three distinct modes - Brainstorm, Socratic, Implementation - with a 3-tier hierarchical memory compression to maintain context across long reading sessions.",
      outcome:  "80% reduction in manual note-organisation effort. Modular 8-service backend (SOLID principles) collapsed a 2,200-line monolith into a clean, scalable architecture. Deployed on Google Cloud Run with full CI/CD.",
      bullets: [
        "Semantic search over highlights using vector embeddings - find ideas, not just keywords",
        "4-mode AI chat: Brainstorm (generative), Socratic (questioning), Implementation (actionable)", "Search (cross-linking notes)",
        "3-tier hierarchical memory compression for context-aware conversations across long sessions",
        "8 focused microservices, SOLID principles - from 2,200-line monolith to clean architecture",
        "Deployed on GCP Cloud Run, CI/CD via Cloud Build, personalised learning paths"
      ],
      github:   "https://engrain-frontend-155584388807.asia-south1.run.app/",
      demo:     "",
      color:    "#5b7fff"
    },
    {
      id:       "invoice-bot",
      title:    "AI Transaction & Invoicing Bot",
      period:   "Jul – Aug 2025",
      stack:    ["AI Agents", "Python", "Supabase", "Telegram"],
      hook:     "Type what you sold. Your database shouldn't have to wait.",
      problem:  "Small business owners and sales teams log transactions in WhatsApp/Telegram in natural language. Converting these to structured records and GST-compliant invoices is daily manual drudgery.",
      approach: "Built a multilingual AI bot that parses conversational sales messages into structured transaction records, stores them in Supabase, auto-generates GST-compliant PDF invoices, and provides on-demand business intelligence via text queries.",
      outcome:  "90% reduction in manual data entry. Invoice creation time: minutes → 5 seconds. On-demand BI available via plain text queries - summaries, trends, CSV exports.",
      bullets: [
        "Multilingual NLP: understands sales messages in multiple languages, extracts entities",
        "Structured transaction storage via Supabase with full audit trail",
        "Automated GST-compliant PDF invoice generation - 5-second turnaround",
        "On-demand BI engine: text summaries, trend detection, CSV export on request",
        "90% reduction in manual data entry for end users"
      ],
      github:   "https://github.com/pranayjain29/VyapariBot",
      demo:     "",
      color:    "#6bbf8e"
    },
    {
      id:       "ecomm-intelligence",
      title:    "AI E-Commerce Intelligence Tool",
      period:   "May – Jun 2025",
      stack:    ["Python", "N8N", "AI Agents", "Web Scraping"],
      hook:     "Checking competitor prices manually is a full-time job. It shouldn't be.",
      problem:  "E-commerce teams spend significant time manually checking Amazon and Flipkart for competitor pricing and product category trends - repetitive, error-prone, and not scalable.",
      approach: "Built an automated multi-platform scraping system (initially N8N, migrated to Python for reliability) with AI-generated BI reports - trend analysis, market segment insights, pricing strategy recommendations delivered as structured documents.",
      outcome:  "~80% reduction in manual market research time. Real-time price monitoring system cutting team monitoring effort by up to 90%.",
      bullets: [
        "Multi-platform scraping: Amazon + Flipkart product categories, automated and scheduled",
        "AI-generated BI reports with trend analysis and market segment insights",
        "Pricing strategy recommendations delivered to sales team as structured documents",
        "Real-time price monitoring - up to 90% reduction in manual checking effort",
        "Reusable, modular scripts for different product categories"
      ],
      github:   "https://github.com/pranayjain29/ecommerceTool-Flask",
      demo:     "",
      color:    "#c46b8a"
    }
  ],

  // ── EXPERIENCE ───────────────────────────────────────────
  experience: [
    {
      company:  "Deloitte USI",
      role:     "Audit Analyst — Audit & Assurance",
      period:   "Sept 2024 – Present",
      bullets: [
        "Built and modified 50+ Power BI and Tableau dashboards for audit teams across 10+ Fortune 500 clients",
        "Performed 50+ financial data reconciliations using Databricks PySpark & SQL with rigorous data quality checks",
        "Automated reporting workflows with Excel & VBA, cutting manual effort by 40%"
      ]
    },
    {
      company:  "Zebronics",
      role:     "Business Analyst Intern — MIS E-Commerce",
      period:   "Apr – Aug 2024",
      bullets: [
        "Automated market research with Python, reducing manual effort by 90% via reusable workflow automation",
        "Generated 10+ e-commerce market reports via SQL, EDA, and statistical analysis for the sales team",
        "Automated Excel MIS reporting with VBA & Tableau, improving cross-team efficiency by 80%"
      ]
    }
  ],

  // ── EDUCATION ────────────────────────────────────────────
  education: {
    institution: "Vellore Institute of Technology, Chennai",
    degree:      "B.Tech — Electrical & Electronics Engineering",
    period:      "Aug 2020 – May 2024",
    cgpa:        "9.27 / 10"
  },

  // ── SKILLS ───────────────────────────────────────────────
  // Three clusters shown in a triangular visual layout.
  // Add/remove skills freely. The visual auto-adjusts.
  skillClusters: [
    {
      id:     "data",
      label:  "Data & Analytics",
      color:  "#b8975a",
      skills: ["Tableau", "Power BI", "Microsoft Excel", "SQL", "Databricks", "Data Cleaning", "EDA", "Statistics", "Data Visualization", "ETL"]
    },
    {
      id:     "ai",
      label:  "AI & Automation",
      color:  "#5b7fff",
      skills: ["OpenAI Agents SDK", "CrewAI", "N8N Workflow", "Machine Learning", "Generative AI", "Macros & VBA", "Predictive Modelling", "ReAct Agents", "Opencode"]
    },
    {
      id:     "eng",
      label:  "Engineering",
      color:  "#6bbf8e",
      skills: ["Python", "PySpark", "FastAPI", "Docker", "GCP", "Supabase", "SQL", "C / C++", "CI/CD", "Cloud Run"]
    }
  ],

  // ── CERTIFICATIONS ───────────────────────────────────────
  certifications: [
    { name: "Deploy Gen AI & Agentic AI at Scale",                    tags: "GenAI · GCP · AWS",       period: "Nov 2025 – Jan 2026" },
    { name: "Data Analytics for Business Professionals",               tags: "Python · Statistics",      period: "Jun 2025"            },
    { name: "Master AI Agents with OpenAI Agents SDK, CrewAI, MCP",   tags: "AI Agents",                period: "Apr – May 2025"      },
    { name: "Master Microsoft Excel Macros and Excel VBA",             tags: "Excel Automation",         period: "Oct – Nov 2024"      },
    { name: "Tableau Advanced: Master Tableau in Data Science",        tags: "Tableau",                  period: "Mar – May 2023"      }
  ],

  // ── BLOG ─────────────────────────────────────────────────
  blog: {
    url:    "https://pranaykjain.blogspot.com",
    rssUrl: "https://pranaykjain.blogspot.com/feeds/posts/default?alt=json&max-results=3"
  }

};
