import React from "react";
import ParagraphContainer from "../../components/service/ParagraphContainer";
import ServiceImageContainer from "../../components/service/ServiceImageContainer";
import iTImage from "../../assets/images/it1.jpg";
import unTitle from "../../assets/images/untitled.png";

import ParagraphContainer2 from "../../components/service/ParagraphContainer2";
import SubParagraphContainer2 from "../../components/service/SubParagraphContainer2";
import SubParagraphContainer from "../../components/service/SubParagraphContainer";
import { cloud, data, infra, infra2, web } from "../../utils/images";

const ITInfrastructure = () => {
  return (
    <div className="itConsultingContainer">
      {/* first contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            IT Infrastructure Solutions
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology delivers complete IT infrastructure solutions for a range of data and workload requirements, enabling you to accelerate innovation, adapt to evolving requirements and stay in control of IT operations. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Information technology infrastructure, or IT Infrastructure, refers to the combined components needed for the operation and management of enterprise IT services and IT Environments. "
            }
          />
          <ParagraphContainer
            animation={"fade-right"}
            text={" With an IT infrastructure, a company can: "}
          />
          <div className="infraDiv">
            <SubParagraphContainer
              animation={"fade-right"}
              text={
                "Provide a positive customer experience by providing uninterrupted access to its website and online store."
              }
            />
            <SubParagraphContainer
              animation={"fade-left"}
              text={"Develop and launch solutions to market with speed."}
            />
            <SubParagraphContainer
              animation={"fade-right"}
              text={"Collect data in real time to make quick decisions."}
            />
            <SubParagraphContainer
              animation={"fade-right"}
              text={"Improve employee productivity."}
            />
          </div>
        </div>
        <ServiceImageContainer animation={"fade-right"} image={infra} />
      </div>
      <div className="infraTwoCards">
        <h2>
          The two primary types of IT infrastructure are traditional and cloud
          infrastructure.
        </h2>

        <div className="infraCardContainer">
          <div className="infraCard">
            <h2>Traditional infrastructure</h2>
            <p>
              A traditional IT infrastructure is made up of the usual hardware
              and software components: facilities, data centers, servers,
              networking hardware desktop computers and enterprise application
              software solutions. Typically, this infrastructure setup requires
              more power, physical space and money than other infrastructure
              types. A traditional infrastructure is typically installed
              on-premises for company-only, or private, use.{" "}
            </p>
          </div>
          <div className="infraCard">
            <h2>Traditional infrastructure</h2>
            <p>
              A cloud computing IT infrastructure is similar to traditional
              infrastructure. However, end users can access the infrastructure
              via the internet, with the ability to use computing resources
              without installing on-premises through virtualization.
              Virtualization connects physical servers maintained by a service
              provider at any or many geographical locations. Then, it divides
              and abstracts resources, like storage, to make them accessible to
              users almost anywhere an internet connection can be made. Because
              cloud infrastructure is often public, it’s usually referred to as
              a public cloud.
            </p>
          </div>
        </div>
      </div>
      {/* second conent  */}
      <div className="itConsulting itConsulting2">
        <ServiceImageContainer animation={"fade-right"} image={data} />
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Data Administration
          </h1>

          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " GS Technology provides the solution for Managing and securing multiple relational database platforms from a single user interface. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " GS Technology helps in the process by which data is monitored, maintained and managed by a data administrator and/or an organization. Data administration allows an organization to control its data assets, as well as their processing and interactions with different applications and business processes. Data administration ensures that the entire life cycle of data use and processing is on par with the enterprise’s objective. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Data administration typically involves the logical management of data in which the flow of data is analyzed, data models are created and the relationships among them are defined. Data administration also defines the security and access control elements of data where executive level data might be limited to some people and processes. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Data management differs from database administration in that the former defines the processes used to manage and maintain data as an organizational asset, whereas the latter deals with the technicalities involved with managing and distributing data. "
            }
          />
        </div>
      </div>

      {/* third contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Managed Infrastructure
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Comprehensive management and monitoring of on-premises, cloud, and IT infrastructure to enhance operational agility, reduce risk and optimize cloud and technology infrastructure. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology does IT infrastructure management service and helps in administering and managing technology, information and data in a proactive way. Its scope ranges from the desktop to networking, storage, data, security and cloud-based services - not forgetting the people employed to keep everything working. "
            }
          />
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Having an IMS provides clear boundaries for how your business infrastructure is managed. The primary goal of IMS? To minimize downtime and to keep your business as productive as possible. In addition, an enterprise IT team delivering infrastructure management services is responsible for issues including asset lifecycle management, network and connectivity issues as well as monitoring mobile devices and device maintenance. "
            }
          />
        </div>
        <ServiceImageContainer animation={"fade-right"} image={infra2} />
      </div>

      {/* fourth conent  */}
      <div className="itConsulting itConsulting2">
        <ServiceImageContainer animation={"fade-right"} image={web} />
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Web Services
          </h1>

          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " GS Technology provides the solution for Managing and securing multiple relational database platforms from a single user interface. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " A web service is a collection of open protocols and standards used for exchanging data between applications or systems. Software applications written in various programming languages and running on various platforms can use web services to exchange data over computer networks like the Internet in a manner similar to inter-process communication on a single computer. This interoperability (e.g., between Java and Python, or Windows and Linux applications) is due to the use of open standards. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " A web service enables communication among various applications by using open standards such as HTML, XML, WSDL, and SOAP. A web service takes the help of − "
            }
          />

          <div className="infraDiv">
            <SubParagraphContainer2
              animation={"fade-right"}
              text={"XML to tag the data"}
            />
            <SubParagraphContainer2
              animation={"fade-left"}
              text={"SOAP to transfer a message"}
            />
            <SubParagraphContainer2
              animation={"fade-right"}
              text={"WSDL to describe the availability of service."}
            />
          </div>
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " You can build a Java-based web service on Solaris that is accessible from your Visual Basic program that runs on Windows. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " You can also use C# to build new web services on Windows that can be invoked from your web application that is based on Java Server Pages (JSP) and runs on Linux. "
            }
          />
        </div>
      </div>
      {/* fifth contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Cloud Computing
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " The customer has the freedom and control to manage applications, data, middleware, and other operating systems. With a cloud IaaS solution, important infrastructure services include network monitoring, security, billing, disaster recovery, and load balancing. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology helps in Cloud computing a method of delivering computing services, including servers, storage, databases, networking, software, analytics, and intelligence over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping you lower your operating costs, run your infrastructure more efficiently, and scale as your business needs change. "
            }
          />
        </div>
        <ServiceImageContainer animation={"fade-right"} image={cloud} />
      </div>
    </div>
  );
};

export default ITInfrastructure;
