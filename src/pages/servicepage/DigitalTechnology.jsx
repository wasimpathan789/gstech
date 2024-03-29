import "./ITConsulting.css";
import React, { useState } from "react";
import Service from "../../components/service/Service";
import ServiceCard1 from "../../components/service/ServiceCard1";
import ParagraphContainer from "../../components/service/ParagraphContainer";
import ServiceImageContainer from "../../components/service/ServiceImageContainer";
import ParagraphContainer2 from "../../components/service/ParagraphContainer2";
import iTImage from "../../assets/images/it1.jpg";
import unTitle from "../../assets/images/untitled.png";
import DigitalCard from "../../components/service/DigitalCard/DigitalCard";

const DigitalTechnology = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className="itConsultingContainer">
      {/* first contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Digital Technology Solution
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Digital is changing how we all do business, disrupting every element including business processes, models, and customer interactions. Our digital solutions offer you both a roadmap for transformation as well as the technology to truly go digital. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology a Digital & Technology Solutions Professional provides technology enabled solutions to internal and/or external customers, in a range of areas including software, business and systems analysis, cyber security, data analysis and network infrastructure. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology implement technology solutions that enable businesses to develop new products and services and to increase an organizations productivity using digital technologies. They are confident, competent and capable independent Technology Solutions Professionals able to operate in a range of related roles. The occupation is based upon a core set of outcomes that will be supplemented by one, and only one, of six specialism areas detailed below that cover the roles identified by employers. "
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
            Web Designing & Web Development
          </h1>

          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " GS Technology, the top leading web design company in KSA who design different types of websites like static web design, dynamic web design, e-commerce web design, fixed web design, responsive web design, fluid web design, single page design, etc. When you are searching for the best web design company in KSA you should consider some terms whether they have the good portfolio, quality of the website, duration of the company in this web design field. There are almost thousands of web Design Company in KSA from which you choose the best one who does all types of web design according to the theme of the business. "
            }
          />
        </div>
      </div>
      <div className="digitalWebType">
        <h2 data-aos="fade-right" data-aos-duration="1000">
          Types of Web Development Services:
        </h2>

        <div className="digitalCardsContainer">
          <DigitalCard
            image={iTImage}
            text={"PHP Web Development"}
            animation1={"fade-up"}
            animation2={"fade-up"}
          />
          <DigitalCard
            image={iTImage}
            text={"PHP Web Development"}
            animation1={"fade-up"}
            animation2={"fade-up"}
          />
          <DigitalCard
            image={iTImage}
            text={"PHP Web Development"}
            animation1={"fade-up"}
            animation2={"fade-up"}
          />
          <DigitalCard
            image={iTImage}
            text={"PHP Web Development"}
            animation1={"fade-up"}
            animation2={"fade-up"}
          />
          <DigitalCard
            image={iTImage}
            text={"PHP Web Development"}
            animation1={"fade-up"}
            animation2={"fade-up"}
          />
          <DigitalCard
            image={iTImage}
            text={"PHP Web Development"}
            animation1={"fade-up"}
            animation2={"fade-up"}
          />
        </div>
      </div>
      {/* third contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Mobile App Designing & Development
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology develops a customized mobile app for IOS, Android platforms, Native and cross-platform solutions, Second platform app development. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " Every firm is looking for mobile app development companies in KSA for the growth of their business. Every person in the industrial area are searching for mobile app development companies in KSA to show their business in the online sector. KSA is one of the top metropolitan cities and here GS technology is the great mobile app development companies in KSA and we do mobile app development with the best quality at cheapest rate in app development market. If you come with bulk orders in mobile app development companies in KSA then we will give you best offers when compared to other companies in KSA. Every growing industry need a separate mobile app for their companies. "
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
            Graphic Design
          </h1>

          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Our company create visual communication materials for our clients such as logos, marketing materials and advertising. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " Branding is the art of becoming knowable, likable and trustable. Every company and product have a set of unique values that distinguish it from its peers. We communicate this nuance or this USP and provide the tools to make this voice stand out and package it brilliantly too. We, GS Technology specialized in Branding Essentials. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " We’re all aware of the fact that a picture speaks a thousand words. Graphic images speak volumes and sometimes convey more than a piece of text. From illustrative art and HTML to graphics and responsive design, we are a creative Graphic Designing Agency and create beautiful logos, branding materials, illustrations, infographics, motion graphics, and more to fulfill your branding vision. "
            }
          />
          <ParagraphContainer2
            animation={"fade-right"}
            text={
              " With years of experience in this arena, GS Technology has the full suite of tools to build a responsive, structured website (Customize Web Development, Dynamic Web Development, Creative Web Development, E-commerce Website Development, 360 virtual web development) that is creatively fulfilling and can be integrated with a payment gateway along with a host of other features. Our expert Full-Stack Web Developers are highly skilled in Java and SQL programming languages with experience in leading 12-factor applications and Cloud Platform Implementation. "
            }
          />
        </div>
      </div>

      {/* fifthe contetn  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Digital Consultation
          </h1>
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology’s digital consulting services can take you from strategy to execution, leveraging modern interfaces and technologies to improve your digital customer experience. Today’s competitive business environment requires the continuous availability of your IT systems, applications and data. Your employees, customers and business partners expect that the information, products and services they need will be available when they’re needed. "
            }
          />

          <ParagraphContainer
            animation={"fade-right"}
            text={
              " GS Technology offers a holistic approach to evaluating your hybrid cloud risk awareness and determining your organization’s resilience level. The methodology helps your business and IT leaders examine resiliency operations at both the physical and virtual layers to identify risks and vulnerabilities. "
            }
          />
          <ParagraphContainer
            animation={"fade-right"}
            text={
              " This approach helps identify both cloud and traditional IT risks to your business operations. It recommends solutions to help manage those risks and measures to enhance or establish your resiliency program. "
            }
          />
        </div>
        <ServiceImageContainer animation={"fade-right"} image={iTImage} />
      </div>
    </div>
  );
};

export default DigitalTechnology;
