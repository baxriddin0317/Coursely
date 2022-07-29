// import components
import Amenities from "./component/Amenities";
import FirstSection from "./component/FirstSection";
import Head from "./component/Head";
import Navbar from "./component/Navbar";
import Section from "./component/Section";
import Included from "./component/Included";
import Acardion from "./component/Acardion";
import Course from "./component/Course";
import Esse from "./component/Esse";
import Tariffs from "./component/Tariffs";
import Students from "./component/Students";
import Footer from "./component/Footer";

// import data
import { TopAcardionBase } from "./assets/base/topAcardionbase";
import { BottomAcardionBase } from "./assets/base/bottomAcardionBase";
import { SectionBase } from "./assets/base/SectionBase";
import { CourseBase } from "./assets/base/course";

function App() {
  return (
    <>
      <Head />
      <Navbar />
      <main>
        <FirstSection />
        <Amenities />
        {SectionBase.map(d => (
          <Section data={d} key={d.id} />
        ))}
        <Included />
        <Acardion title={"The Course Curriculum"} data={TopAcardionBase} />
        <Course data={CourseBase} />
        <Esse />
        <Acardion title={"Any Questions?"} data={BottomAcardionBase} />
        <Tariffs />
        <Students />
      </main>
      <Footer />
    </>
  );
}

export default App;
