import "./ITConsulting.css";
import Service from "../../components/service/Service";
import { LuArrowBigRightDash } from "react-icons/lu";
import iTImage from "../../assets/images/it1.jpg";

import ParagraphContainer from "../../components/service/ParagraphContainer";
import ServiceImageContainer from "../../components/service/ServiceImageContainer";
import ParagraphContainer2 from "../../components/service/ParagraphContainer2";
import {
  cio,
  consulting,
  managed,
  resources,
  strategic,
  virtual,
} from "../../utils/images";

const ITConsulting = () => {
  return (
    <div className="itConsultingContainer">
      {/* first contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            IT Consulting
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology consulting services aim to help you develop and put into practice the IT Strategy. We expertly guide your IT and digital transformation initiatives from strategy planning to implementation. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              "IT consulting services are advisory services that help clients assess different technology strategies and, in doing so, align their technology strategies with their business or process strategies. These services support customers’ IT initiatives by providing strategic, architectural, operational and implementation planning. Strategic planning includes advisory services that help clients assess their IT needs and formulate system implementation plans. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              "Architecture planning includes advisory services that combine strategic plans and knowledge of emerging technologies to create the logical design of the system and the supporting infrastructure to meet customer requirements. Operational assessment/benchmarking include services that assess the operating efficiency and capacity of a client’s IT environment. Implementation planning includes services aimed at advising customers on the rollout and testing of new solution deployments. "
            }
          />
        </div>
        <ServiceImageContainer animation={"fade-right"} image={consulting} />
      </div>

      {/* second conent  */}
      <div className="itConsulting itConsulting2">
        <ServiceImageContainer animation={"fade-right"} image={virtual} />
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Virtual CTO Services
          </h1>

          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Highly experienced technology expert specifically chosen for your business needs works to ease and support IT initiatives, outline tech strategies and approaches according to business goals, manage IT technology infrastructure, tools, and teams. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Either virtual or on-site, a Chief Technology Officer (CTO) is a C-level executive, who oversees the company’s digital infrastructure and makes sure that short- and long-term goals of the business are achieved by utilizing innovative tech. A CTO stays on top of the emerging trends, evaluates them in the context of business needs, maps out the tech strategy, and decides on the procedures necessary for delivering high-quality products or services. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Over the recent turbulent years, the business world has become accustomed to working remotely. The transition to all-digital space has blurred the lines between local and offshore experts. Companies now have access to tech talent anywhere in the world at a low operational cost. "
            }
          />
        </div>
      </div>

      {/* third content  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Virtual CIO Services
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Virtual CIO service helps to acquire the skills, knowledge, and experience to accelerate your digital transformation by performing the tasks remotely, from developing strategies and managing your technologies with fast response times. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Our experienced Technology experts collaborates with and advises clients' IT departments and performs the same functions as a conventional CIO. Those duties include formulating strategic IT goals, planning the IT budget, analyzing and reworking business processes and facilitating technology changes. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Small to medium-sized businesses (SMBs) that don't have the in-house staff or resources for large-scale IT projects, such as a digital transformation, can make use of vCIOs. Virtual CIOs offer the efficiency, flexibility and expertise businesses need to improve long-term IT strategy at a more manageable price point, compared to hiring a traditional CIO. Like in-house CIOs, vCIOs must have a broad understanding of technology and the soft skills to sufficiently navigate everchanging corporate environments. "
            }
          />
        </div>
        <ServiceImageContainer animation={"fade-right"} image={cio} />
      </div>

      {/* fourth content  */}
      <div className="itConsulting itConsulting2">
        <ServiceImageContainer animation={"fade-right"} image={strategic} />
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Strategic IT Solutions
          </h1>

          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Our experienced Technology experts provide a blueprint of how information technology supports and shapes the organization’s overall business strategy. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Strategic IT solutions helps in design and implement business process improvements that help organizations achieve the most efficient business operation. We enable organizations to use technology to gain competitive advantage. From selection of right technology solutions to implementation of emerging technologies such as machine learning and robotic process automation, we help in all aspects. From Value Creation to Efficiency Gains; from Governance to Visibility; we enable organizations to reinvent their project portfolio management process. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Strategic IT solutions empowers the Chief Information Officers to not only manage the health of their IT organization; but also, to evolve into a growth enabler for their business. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " We help identify the value drivers for the organization, and design, build and implement a set of KPIs that brings in the industry best practices. "
            }
          />
        </div>
      </div>

      {/* fith content  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            IT Managed Services
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Delegating the IT operations of an organization to a third-party called Managed Service Providers (MSPs). responsible for handling the entire IT operations of an organization, providing a range of services such as security, data backups, 24x7 monitoring services, and on-demand support. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Our experts helps in delivers services, such as network, application, infrastructure and security, via ongoing and regular support and active administration on customers’ premises, in their MSP’s data center (hosting), or in a third-party data center. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " MSPs may deliver their own native services in conjunction with other providers’ services (for example, a security MSP providing sys admin on top of a third-party cloud IaaS). Usually their own core offerings. Many MSPs include services from other types of providers. The term MSP traditionally was applied to infrastructure or device-centric types of services but has expanded to include any continuous, regular management, maintenance and support. "
            }
          />
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Small or medium-sized companies will often use MSPs because they have limited in-house IT capabilities. The IT expertise that MSPs provide can also be useful to larger companies who are looking for support and backup of their existing IT staff. "
            }
          />
        </div>
        <ServiceImageContainer animation={"fade-right"} image={managed} />
      </div>

      {/* sixtht contetn  */}
      <div className="itConsulting itConsulting2">
        <ServiceImageContainer animation={"fade-right"} image={resources} />
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            IT Management Resources
          </h1>

          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " How to optimize your resource utilization across all of IT – which ultimately will give you the planning flexibility you need to keep the right people on the right projects.Our experts help in operating the hardware and software of an organization to support the flow or processing of information in support of business activities, regardless of the technology involved, whether computers, telecommunications, or other. In the Code of Virginia, information technology includes telecommunications, automated data processing, databases, the Internet, management information systems, and related information, equipment, goods, and services. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Technological resources can help improve the performance of an organization. These resources don’t only just involve computer equipment such as hardware and modems. Those can be considered physical resources. Technological resources involve things like software music or text. These types of resources are owned and have to be managed in the same way as physical resources. Although technological resources come in four main categories which are intellectual property, accumulated experience and skill, software licensing and patents and copyright. An example of a technological resource is in the case of operating machinery, it can cut down a lot of workloads. Advancements in technology are helping improve the performance as new software programs are being introduced- outlook. Staff have access to these which makes it much easier for them to complete tasks. "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ITConsulting;
