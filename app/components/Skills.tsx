import React from "react";
import Image from "next/image";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Language",
      skills: [
        {
          name: "Java",
          src: "https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white",
        },
        {
          name: "JavaScript",
          src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black",
        },
        {
          name: "TypeScript",
          src: "https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white",
        },
      ],
    },
    {
      name: "FrontEnd",
      skills: [
        {
          name: "HTML5",
          src: "https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white",
        },
        {
          name: "CSS3",
          src: "https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white",
        },
        {
          name: "Bootstrap",
          src: "https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white",
        },
      ],
    },
    {
      name: "BackEnd",
      skills: [
        {
          name: "SpringBoot",
          src: "https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=SpringBoot&logoColor=white",
        },
        {
          name: "Node.js",
          src: "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white",
        },
        {
          name: "NestJs",
          src: "https://img.shields.io/badge/NestJs-E0234E?style=flat-square&logo=NestJs&logoColor=white",
        },
        {
          name: "Express",
          src: "https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white",
        },
      ],
    },
    {
      name: "DataBase",
      skills: [
        {
          name: "MySQL",
          src: "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white",
        },
        {
          name: "PostgreSQL",
          src: "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white",
        },
        {
          name: "MongoDB",
          src: "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white",
        },
      ],
    },
    {
      name: "Dev/Ops",
      skills: [
        {
          name: "GitLab",
          src: "https://img.shields.io/badge/GitLab-FC6D26?style=flat-square&logo=GitLab&logoColor=white",
        },
        {
          name: "GitHub Actions",
          src: "https://img.shields.io/badge/GitHub Actions-2088FF?style=flat-square&logo=GitHub Actions&logoColor=white",
        },
        {
          name: "Amazon AWS",
          src: "https://img.shields.io/badge/Amazon AWS-225F3E?style=flat-square&logo=AmazonAWS&logoColor=white",
        },
        {
          name: "Docker",
          src: "https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white",
        },
      ],
    },
    {
      name: "Tools",
      skills: [
        {
          name: "Git",
          src: "https://img.shields.io/badge/Git-F05025?style=flat-square&logo=Git&logoColor=white",
        },
        {
          name: "GitHub",
          src: "https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white",
        },
        {
          name: "Jira",
          src: "https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=Jira&logoColor=white",
        },
        {
          name: "Confluence",
          src: "https://img.shields.io/badge/Confluence-172B4D?style=flat-square&logo=Confluence&logoColor=white",
        },
        {
          name: "Notion",
          src: "https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <p className="text-xl text-gray-600">
            새로운 것을 배우고, 깊게 이해하는 것을 좋아합니다.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-2"></th>
                <th className="text-left py-2">Stack</th>
              </tr>
            </thead>
            <tbody>
              {skillCategories.map((category, index) => (
                <tr key={index} className="border-t">
                  <th className="text-left py-4 pr-4 align-top">
                    {category.name}
                  </th>
                  <td className="py-4">
                    {category.skills.map((skill, skillIndex) => (
                      <img
                        key={skillIndex}
                        src={skill.src}
                        alt={skill.name}
                        className="inline-block mr-2 mb-2"
                        style={{ width: "auto", height: "25px" }}
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Skills;
