import React from "react";
import { LuArrowBigRightDash } from "react-icons/lu";
import iTImage from "../../assets/images/it1.jpg";
import ServiceImageContainer from "../../components/service/ServiceImageContainer";
import ParagraphContainer from "../../components/service/ParagraphContainer";
import ParagraphContainer2 from "../../components/service/ParagraphContainer2";
import SubParagraphContainer from "../../components/service/SubParagraphContainer";
import SubParagraphContainer2 from "../../components/service/SubParagraphContainer2";

const MsiSolution = () => {
  return (
    <div className="itConsultingContainer">
      {/* first contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            MIS Solutions
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              "Management Information Systems (MIS) is the study of people,technology, organizations, and the relationships among them. MIS professionals help firms realize maximum benefit from investment in personnel, equipment, and business processes."
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " These information systems are designed to gather and analyze data and produce business reports that help management with critical decision-making. An MIS is used to significantly improve the efficiency of report generation and data analysis by taking the information gathered by various members of staff and storing it in a uniform and accessible manner. Can help identify an enterprise's strengths and weaknesses, which can lead to strategically reproducing strengths and successes, as well as exercising weaknesses and failures. "
            }
          />
        </div>
        <ServiceImageContainer animation={"fade-right"} image={iTImage} />
      </div>

      {/* second conent  */}
      <div className="itConsulting itConsulting2">
        <ServiceImageContainer animation={"fade-right"} image={iTImage} />
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Building MIS
          </h1>

          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " A management information system (MIS) supports management by pooling information from various sources, compiling it, manipulating it and presenting it legibly. It can give managers necessary information to help them make informed decisions. The ultimate aim of a MIS is to increase a business’s efficiency, productivity, profitability and so value. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Organizational insight business information gathered by an MIS can be used to monitor the performance of a company and project through any corporate performance management tools. "
            }
          />
          <h2 style={{ color: "white", marginTop: "20px" }}>
            Typical uses for a MIS include:
          </h2>
          <div style={{ padding: "20px 10px" }}>
            <SubParagraphContainer2
              animation={"fade-right"}
              text={"Making decision-making more effective and productive."}
            />
            <SubParagraphContainer2
              animation={"fade-left"}
              text={"Collecting business information."}
            />
            <SubParagraphContainer2
              animation={"fade-right"}
              text={"Compiling reports."}
            />
            <SubParagraphContainer2
              animation={"fade-left"}
              text={"Identification of areas that need improvement."}
            />
            <SubParagraphContainer2
              animation={"fade-right"}
              text={
                "Allowing management of work schedules and allocation of resources."
              }
            />
            <SubParagraphContainer2
              animation={"fade-left"}
              text={"Fostering communication and collaboration."}
            />
            <SubParagraphContainer2
              animation={"fade-right"}
              text={
                "Allowing employees to spend more time on productive tasks."
              }
            />
            <SubParagraphContainer2
              animation={"fade-left"}
              text={"Giving managers feedback about their own performance."}
            />
            <SubParagraphContainer2
              animation={"fade-right"}
              text={
                "Management information systems may be used by all levels of management. "
              }
            />
          </div>
        </div>
      </div>

      {/* third contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            MIS Streamlining
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Streamlining is the process used to simplify or eliminate unnecessary work-related tasks to improve the efficiency of processes in businesses or organizations. Streamlining processes require the usage of modernizing techniques, technology and other possible approaches to complete. "
            }
          />
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Streamlined management systems improved communication between departments and allow for better tracking of completed tasks. Employees will spend less time moving around to communicate with each other and they can get to assigned tasks in a more timely manner. With less tedious tasks for you and your employees to complete, you will likely be able to manage your time better and complete the most important tasks first and have buffer-time in between tasks. "
            }
          />
        </div>
        <ServiceImageContainer animation={"fade-right"} image={iTImage} />
      </div>

      {/* fourth conent  */}
      <div className="itConsulting itConsulting2">
        <ServiceImageContainer animation={"fade-right"} image={iTImage} />
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Data Science & Business Analytics
          </h1>
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              "Data science is the study of data using statistics, algorithms and technology. It is the process of using data to find solutions and predict outcomes for a problem statement. Data scientists apply machine-learning algorithms to numbers, text, images, videos and audio, and draw various understanding from them. Finally, they build machine learning pipelines and personalized data products to better understand their business and customers and to make better decisions. In others, in tech, data science is about infrastructure, testing, machine learning, decision-making, and data products. Business analytics bridges the gap between information technology and business by using analytics to provide data-driven recommendations. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              "The business part requires deep business understanding, while the analytics part requires an understanding of data, statistics and computer science. A business analyst acts as a communicator, facilitator and mediator, and seeks the best ways to improve processes and increase effectiveness through technology, strategy, analytic solutions, and more. "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MsiSolution;
