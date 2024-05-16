import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import DeveloperInfo from './DeveloperInfo'; // 개발자 정보를 불러옵니다.

// 개발자 정보 배열
const developers = [
  {
    id: 1,
    name: "Team leader",
    intro: "첫 번째 개발자입니다. 빠른 학습과 문제 해결 능력을 가지고 있습니다.",
    skills: "React, JavaScript, HTML/CSS",
    projects: "프로젝트1, 프로젝트2",
    image: "developer1.jpg" // 이미지 파일명
  },
  {
    
    id: 2,
    name: "개발team member1",
    intro: "두 번째 개발자입니다. 새로운 기술에 관심이 많고, 적극적으로 도전합니다.",
    skills: "Python, Django, PostgreSQL",
    projects: "프로젝트3, 프로젝트4",
    image: "developer2.jpg" // 이미지 파일명
  },
  {
    id: 3,
    name: "개발team member3",
    intro: "두 번째 개발자입니다. 새로운 기술에 관심이 많고, 적극적으로 도전합니다.",
    skills: "Python, Django, PostgreSQL",
    projects: "프로젝트3, 프로젝트4",
    image: "developer2.jpg" // 이미지 파일명
  },
  {
    id: 4,
    name: "개발team member4",
    intro: "두 번째 개발자입니다. 새로운 기술에 관심이 많고, 적극적으로 도전합니다.",
    skills: "Python, Django, PostgreSQL",
    projects: "프로젝트3, 프로젝트4",
    image: "developer2.jpg" // 이미지 파일명
  },
  {
    id: 5,
    name: "개발team member5",
    intro: "두 번째 개발자입니다. 새로운 기술에 관심이 많고, 적극적으로 도전합니다.",
    skills: "Python, Django, PostgreSQL",
    projects: "프로젝트3, 프로젝트4",
    image: "developer2.jpg" // 이미지 파일명
  },
  {
    id: 6,
    name: "개발team member6",
    intro: "두 번째 개발자입니다. 새로운 기술에 관심이 많고, 적극적으로 도전합니다.",
    skills: "Python, Django, PostgreSQL",
    projects: "프로젝트3, 프로젝트4",
    image: "developer2.jpg" // 이미지 파일명
  },
  // 나머지 개발자 정보를 추가하세요
];

function DeveloperPage() {
  return (
    <Router>
      <div>
        {/* 헤더 섹션 */}
        <header>
          <h1>개발자 포트폴리오</h1>
          <nav>
            {/* 개발자 정보를 바탕으로 NavLink 생성 */}
            {developers.map(developer => (
              <NavLink key={developer.id} to={`/developer/${developer.id}`}>
                {developer.name}
              </NavLink>
            ))}
          </nav>
        </header>
        {/* 메인 섹션 */}
        <main>
          {/* 각 개발자의 정보에 따른 Route 설정 */}
          {developers.map(developer => (
            <Route
              key={developer.id}
              path={`/developer/${developer.id}`}
              render={() => (
                <DeveloperInfo
                  name={developer.name}
                  intro={developer.intro}
                  skills={developer.skills}
                  projects={developer.projects}
                  image={developer.image} // 이미지 파일명 전달
                />
              )}
            />
          ))}
        </main>
        {/* 푸터 섹션 */}
        <footer>
          <p>&copy; 2024 개발자들의 팀</p>
        </footer>
      </div>
    </Router>
  );
}

export default DeveloperPage;
