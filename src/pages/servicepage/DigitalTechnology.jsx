import React, { useState } from "react";
import Service from "../../components/service/Service";
import ServiceCard1 from "../../components/service/ServiceCard1";
import ParagraphContainer from "../../components/service/ParagraphContainer";

const DigitalTechnology = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className="itConsultingContainer">
      <ParagraphContainer
        text={
          " IT consulting services are advisory services that help clients assess different technology strategies and, in doing so, align their technology strategies with their business or process strategies."
        }
      />
    </div>
  );
};

export default DigitalTechnology;
