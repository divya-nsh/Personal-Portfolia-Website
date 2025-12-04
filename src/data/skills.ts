export type TSkill = {
  title: string;
  link: string; // URL to the skill's official website or documentation
  hint: string;
};

export const skillsMap: Record<string, TSkill> = {
  react: {
    title: "React",
    link: "https://react.dev/",
    hint: "Frontend Library",
  },
  node: {
    title: "Nodejs",
    link: "https://nodejs.org/",
    hint: "Javascript Backend Runtime",
  },
  mssql: {
    title: "MSSQL",
    link: "https://www.microsoft.com/en-in/sql-server",
    hint: " Microsoft SQL Server Database",
  },
  tanstackQuery: {
    title: "Tanstack Query",
    link: "https://tanstack.com/query/v4",
    hint: "Data Fetching Library & Server State Management",
  },
  tanstackRouter: {
    title: "Tanstack Router",
    link: "https://tanstack.com/router/v1",
    hint: "Routing Library for React",
  },
  tanstackQueryRouter: {
    title: "Tanstack Query & Router",
    link: "https://tanstack.com/",
    hint: "Data Fetching and Routing Library for React",
  },
};
