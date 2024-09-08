import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#45505b] mb-4">About Me</h2>
          <p className="text-[#728394] text-lg">
            삼성에서 약 1년간의 연수원 생활과 수석 졸업을 했으며, 약 9년간의
            대기업에서의 근무 경험을 보유하고습니다. <br />
            현재는 루미르 인공위성 Web-GIS 플랫폼 백엔드 개발자로 근무하고
            있습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:col-span-1 flex justify-center lg:justify-end lg:me-12">
            <Image
              src="/img/profile-img.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#45505b] mb-4">
              최선을 다하는 백엔드 개발자 김종식입니다.
            </h3>
            <div className="mt-4">
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {[
                  "회사와 도메인의 성장을 우선하는 성향",
                  "언어를 깊게 이해하려고 하는 성향",
                  "TDD를 통한 서비스로직을 구현을 지향",
                  "기획과 아키텍처 설계 지향",
                  "Diagram를 통한 문서화 시각화 작업을 지향",
                  "사이드프로젝트 리더 역할 다수 경험",
                  "Frontend, DevOps 등 다양한 분야에 관심이 많음",
                  "Nest.js & Docker를 활용한 MSA 구축 경험 다수 보유",
                  "Jira를 활용한 프로젝트 관리 경험 다수 보유",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <i className="bx bxs-check-square text-[#0563bb] mr-2"></i>
                    <span className="text-[#45505b]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
