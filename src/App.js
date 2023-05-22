import Profile from "./Components/Profile";
import "./index.css";
export default function App() {
  return (
    <>
      <div className="App">
        <Profile
          avatar="https://th.bing.com/th/id/OIP.pVy65CxjPJ_X0yyaxz1OWAAAAA?pid=ImgDet&rs=1"
          nome="Gui"
          bio="dev Full Stack"
          email="vipgui3@gmail.com"
          phone="13988764454"
          githubUrl="https://github.com/Gu1lherme0107"
          linkedinUrl="linkedin.com"
          twitterUrl="brasil.com"
        />
      </div>
    </>
  );
}
