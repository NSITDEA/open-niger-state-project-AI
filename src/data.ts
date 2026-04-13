export type Tier4Article = {
    title: string;
    type: "content";
  };
  
  export type Tier3Category = {
    title: string;
    children: Record<string, Tier4Article>;
  };
  
  export type Tier2Category = {
    title: string;
    description: string;
    children: Record<string, Tier3Category>;
  };
  
  export type IAData = Record<string, Tier2Category>;
  
  export const iaData: IAData = {
    "start-business": {
      title: "Start or Register a Business",
      description: "Everything you need to legally set up and register your business in Niger State.",
      children: {
        "register": {
          title: "Register my business",
          children: {
            "cac": { title: "Register with CAC (Corporate Affairs Commission)", type: "content" },
            "smedan": { title: "Register with SMEDAN", type: "content" },
            "cooperative": { title: "Register a cooperative (Ministry of Commerce)", type: "content" },
            "bank-account": { title: "Open a business bank account", type: "content" },
          },
        },
        "type-registration": {
          title: "What type of registration do I need?",
          children: {
            "guidance": { title: "Registration Guidance", type: "content" },
          },
        },
        "licence-permit": {
          title: "Get a licence or permit",
          children: {
            "permit-operational": { title: "Business permit and operational licence", type: "content" },
            "signage": { title: "Apply for signage", type: "content" },
            "right-of-way": { title: "Apply for right of way in the state", type: "content" },
            "licence-guidance": { title: "What type of licence do I need?", type: "content" },
          },
        },
      },
    },
    "tax-compliance": {
      title: "Tax & Compliance",
      description: "Understand your tax obligations and how to stay compliant with state laws.",
      children: {
        "how-to-pay": {
          title: "How to pay tax",
          children: {
            "pay-online": { title: "Pay online", type: "content" },
            "pay-physical": { title: "Pay at a physical office", type: "content" },
          },
        },
        "what-taxes": {
          title: "What taxes apply to my business?",
          children: {
            "tax-guidance": { title: "Guidance on applicable taxes", type: "content" },
          },
        },
        "state-vs-local": {
          title: "State vs local government tax",
          children: {
            "tax-differences": { title: "Understanding the difference", type: "content" },
          },
        },
      },
    },
    "get-funding": {
      title: "Get Funding",
      description: "Explore financial support options including loans and grants for your business.",
      children: {
        "loans": {
          title: "Loans",
          children: {
            "find-loans": { title: "Find loans available to my business", type: "content" },
            "loan-eligibility": { title: "Check loan eligibility", type: "content" },
            "apply-loan": { title: "How to apply for a loan", type: "content" },
          },
        },
        "grants": {
          title: "Grants",
          children: {
            "find-grants": { title: "Find grants available to my business", type: "content" },
            "grant-eligibility": { title: "Check grant eligibility", type: "content" },
            "apply-grant": { title: "How to apply for a grant", type: "content" },
          },
        },
        "scam-alerts": {
          title: "Scam alerts",
          children: {
            "spot-fake": { title: "How to spot fake loans and scam warnings", type: "content" },
          },
        },
        "difference-loans-grants": {
          title: "What is the difference between loans and grants?",
          children: {
            "funding-differences": { title: "Guidance on funding types", type: "content" },
          },
        },
      },
    },
    "land-premises": {
      title: "Land & Premises",
      description: "Find the right location for your operations, including shops and land.",
      children: {
        "shop-market": {
          title: "Get a shop or market stall",
          children: {
            "apply-shop": { title: "How to apply for a shop", type: "content" },
            "shop-eligibility": { title: "Eligibility criteria", type: "content" },
          },
        },
        "get-land": {
          title: "Get land for my business",
          children: {
            "apply-land": { title: "How to apply for land", type: "content" },
            "land-eligibility": { title: "Eligibility criteria", type: "content" },
          },
        },
        "report-land-issue": {
          title: "Report a land issue",
          children: {
            "land-form": { title: "Contact / form", type: "content" },
          },
        },
      },
    },
    "learn-connect": {
      title: "Learn & Connect",
      description: "Develop your skills and network with other businesses and associations.",
      children: {
        "training-skills": {
          title: "Training & skills",
          children: {
            "biz-training": { title: "Business training programmes", type: "content" },
            "giz-platform": { title: "GIZ Platform – Financial literacy training", type: "content" },
            "women-youth": { title: "Women and youth support programmes", type: "content" },
          },
        },
        "general-advice": {
          title: "General Advice",
          children: {
            "hear-opportunities": { title: "How to hear about opportunities early", type: "content" },
          },
        },
        "associations": {
          title: "Associations directory",
          children: {
            "biz-associations": { title: "Business Associations (directory listing)", type: "content" },
            "market-associations": { title: "Market Associations (directory listing)", type: "content" },
          },
        },
      },
    },
    "help-disputes": {
      title: "Help & Disputes",
      description: "Resolve issues, leave feedback, and find helpful resources.",
      children: {
        "complaints-feedback": {
          title: "Complaints & feedback",
          children: {
            "make-complaint": { title: "Make a complaint about a service", type: "content" },
            "give-feedback": { title: "Give feedback", type: "content" },
          },
        },
        "report-delay": {
          title: "Report a delay",
          children: {
            "delay-form": { title: "Contact / form", type: "content" },
          },
        },
        "verify-agents": {
          title: "Verify agents & offices",
          children: {
            "verify-checker": { title: "Directory / checker page", type: "content" },
          },
        },
        "contact-desk-officer": {
          title: "Contact a desk officer",
          children: {
            "desk-officer": { title: "Directory page", type: "content" },
          },
        },
        "small-claims-new": {
          title: "Small Claims - File a new claim",
          children: {
            "disputes": {
              title: "Tenant disputes / Property damage / Debt recovery / Breach of contract / Consumer protection",
              type: "content",
            },
          },
        },
        "small-claims-resources": {
          title: "Small Claims - Resources",
          children: {
            "nearest-court": { title: "Find your nearest Small Claims court", type: "content" },
            "legal-guides": { title: "Legal guides", type: "content" },
          },
        },
      },
    },
  };
  
