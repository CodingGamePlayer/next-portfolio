import React from "react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16 bg-white">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#45505b] mb-4">Resume</h2>
          <p className="text-[#728394] text-lg">
            새로운 것을 받아들이고 끊임없이 변화하고 적응하는 성향입니다.
            <br />
            배움은 항상 저를 즐겁게 해줍니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#45505b] mb-6">
              Education
            </h3>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#0563bb]">
                학점은행제 (졸업)
              </h4>
              <h5 className="text-lg font-semibold text-[#728394] my-2">
                2021.04~2024.08
              </h5>
              <p className="italic text-[#728394]">컴퓨터공학과</p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#0563bb]">
                거제공업고등학교 (졸업)
              </h4>
              <h5 className="text-lg font-semibold text-[#728394] my-2">
                2011.03~2014.02
              </h5>
              <p className="italic text-[#728394]">특성화/마이스터고</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#45505b] mb-6">
              Professional Experience
            </h3>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#0563bb]">루미르</h4>
              <h5 className="text-lg font-semibold text-[#728394] my-2">
                2023 ~ present
              </h5>
              <p className="italic text-[#728394] mb-4">선임 연구원</p>
              <ul className="list-disc list-inside space-y-2 text-[#728394]">
                <li>
                  SARDIP 플랫폼 개발 (Web Part Leader)
                  <ul className="list-circle list-inside ml-4 mt-2 space-y-1">
                    <li>위성 관측 플랫폼 설계 및 기획 수행</li>
                    <li>개발 일정관리 및 협의업무 수행</li>
                    <li>인공위성 영상을 제공하는 플랫폼 프로토타입 개발</li>
                    <li>
                      .tif 파일 업로드 기능 오픈소스로 개발 및 최적화 (기존 3분
                      -&gt; 15초)
                    </li>
                    <li>
                      여러 위성에서 제공하는 위성 영상을 하나의 플랫폼에서
                      제공할 수 있는 기능 개발
                    </li>
                    <li>위성 영상 렌더링 속도 최적화 (기존 3초 -&gt; 0.2초)</li>
                    <li>
                      영상처리 알고리즘 처리 프로세스 관리 기능 및 자동화 기능
                      개발
                    </li>
                  </ul>
                </li>
                {/* 나머지 항목들도 같은 방식으로 변환 */}
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#0563bb]">삼성중공업</h4>
              <h5 className="text-lg font-semibold text-[#728394] my-2">
                2014 ~ 2022
              </h5>
              <p className="italic text-[#728394] mb-4">
                기장철의설계3년, 시운전팀 6년
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#728394]">
                <li>
                  EVERGREEN <br />
                  2019-01-01 ~ 2022-09-01
                  <br />
                  Evergreen 선사 container 를 2년 넘게 설계 및 담당.
                  <br />
                  선주대응 업무 및 협의 업무 수행. <br />
                  호선에 필요한 발주 및 벤더 관리
                  <br />
                </li>
                <li>
                  FLNG
                  <br />
                  2016-05-01 ~ 2018-12-01
                  <br />
                  호주의shell사의 FLNG를 테스트하는 시운전팀에서 근무
                  <br />
                  선내에 배치된 M/E, G/E, Pump, Separator 등 테스트를 위한 사전
                  검사 및 운용
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
