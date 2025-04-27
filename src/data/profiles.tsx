export const clientProfiles = [
  {
    id: 1,
    userId: 2,
    companyName: "Acme Corp",
    industry: "Tech",
    description: "We build stuff",
    companyWebsite: "https://acme.com",
  },
];

export const freelancerProfiles = [
  {
    id: 1,
    userId: 3,
    title: "Full-Stack Dev",
    skills: ["React", "Spring"],
    education: "MSc CS",
    certifications: "AWS Certified",
    githubUrl: "https://github.com/dev",
    projects: [
      {
        id: 1,
        clientId: 2,
        title: "Website Redesign",
        category: "Design",
        description: "Redesign our corporate site.",
        budget: 3000,
        deadline: "2025-05-30",
      },
      {
        id: 1,
        clientId: 2,
        title: "Website Redesign",
        category: "Design",
        description: "Redesign our corporate site.",
        budget: 3000,
        deadline: "2025-05-30",
      }
    ],
  },
];
