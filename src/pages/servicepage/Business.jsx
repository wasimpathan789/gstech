import "./ITConsulting.css";
import Service from "../../components/service/Service";
import { LuArrowBigRightDash } from "react-icons/lu";
import iTImage from "../../assets/images/it1.jpg";
import { RxDotFilled } from "react-icons/rx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Business = () => {
  return (
    <div className="itConsultingContainer">
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Business Application Solutions
          </h1>
          <h5 data-aos="fade-right" data-aos-duration="1000">
            GS Technology expertly guide you to build enterprise-grade
            applications that place your customers at the center of your
            business. Make your business smarter and more agile with
            game-changing enterprise software.
          </h5>

          <div className="itContainerContent">
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                Enterprise resource planning (ERP) is used by organizations
                looking to manage their business functions within a centralized
                and integrated system. ERP is commonly used by companies working
                within the supply chain to help keep track of all the moving
                parts of manufacturing and distribution. However, ERP can be
                utilized by a number of different industries including those in
                healthcare, nonprofit groups, construction and hospitality.
                Organization needing to manage their staff, customers and
                inventory can all rely on ERP benefits.
              </p>
            </div>
            <div className="itParagraphContent">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>

              <p data-aos="fade-right" data-aos-duration="1000">
                ERP stores all entered data into a single database, allowing all
                departments to work with the same information. Additionally, all
                this data can be organized, analyzed and made into reports. ERP
                brings together customer management, human resources, business
                intelligence, financial management, inventory and supply chain
                capabilities into one system.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="itCotainerRight"
        >
          <img
            src={iTImage}
            alt=""
            data-aos="fade-left"
            data-aos-duration="1000"
          />
          <div className="bgImage"></div>
        </div>
      </div>

      {/* second conent  */}
      <div className="itConsulting itConsulting2">
        <div className="itCotainerRight itCotainerRight2">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={iTImage}
            alt=""
          />
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bgImage bgImage2 "
          ></div>
        </div>
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Accounting & Finance
          </h1>
          <h5 data-aos="fade-left" data-aos-duration="1000">
            Finance & Accounting services guide CFOs and financial services
            firms to optimize digital finance, agile platforms, and performance
          </h5>

          <div className="itContainerContent itContainerContent2 ">
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                For any business, it is crucial that the accounting and
                financial management is properly handled. Complex financial data
                like budget estimates, cash flow management, and so on, need to
                be kept current, enabling organizations to make informed,
                critical business decisions. It is vital to track and examine
                the flow of funds coming in and going out; this information can
                help drive profits and business growth.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                The accounting departments of the organization end up spending a
                great deal of time preparing financial reports for the various
                stakeholders like banks, tax authorities, shareholders, and so
                on.
              </p>
            </div>

            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                As activities like payments, revenue, and billing have high
                tracking capabilities, they can be easily managed if you have an
                ERP solution deployed in your organization; you can even use the
                software to keep track of profits your business makes, budgets,
                cost analysis, invoices, and so on.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                With an ERP system, however, all this manual work can be
                avoided, as it comes with robust reporting features.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                Its inbuilt filters can be customized and apply as per the
                specific requirements of various agencies, to churn out accurate
                and detailed financial reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third content  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            HR & Payroll
          </h1>
          <h5 data-aos="fade-right" data-aos-duration="1000">
            Provide a solution that simplifies and takes care of your company's
            payroll processing and procedures and any other Human Resources
            related matters such as talent management and benefits.
          </h5>

          <div className="itContainerContent">
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                With HR and Payroll system one can manage all employee data in
                one place allows inter departmental interaction and
                collaborative working.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                Maintain Employee records with personal details, salary,
                passport & iqama, qualification & experience. Set Basic salary,
                assign expiry date for each document, unlimited allowances &
                deductions & much more.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                The payroll management features, allow you one-click payroll
                processing. Easy way to view, access, and print pay slips.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                The system generates Payroll & WPS in single click by taking
                Basic Salary + Allowances – Deductions. Users can also email pay
                slips straight from System. Thus, it saves you a lot of time to
                do complicated payroll calculations of allowance, deductions,
                absents, cash advance installment deductions & over time etc.
              </p>
            </div>
          </div>
        </div>
        <div className="itCotainerRight">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            src={iTImage}
            alt=""
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bgImage"
          ></div>
        </div>
      </div>

      {/* fourth content  */}
      <div className="itConsulting itConsulting2">
        <div className="itCotainerRight itCotainerRight2">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={iTImage}
            alt=""
          />
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bgImage bgImage2 "
          ></div>
        </div>
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Manufacturing
          </h1>
          <h5 data-aos="fade-left" data-aos-duration="1000">
            We provide a solution for your manufacturing operations to gain
            efficiency, become more streamlined, improve quality, and increase
            profitability.
          </h5>

          <div className="itContainerContent itContainerContent2 ">
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                In an industry such as manufacturing, where efficiency is
                constantly sought yet difficult to find, enterprise resource
                planning (ERP) can be a game-changer. ERP in Manufacturing is a
                centralized method of managing every aspect of facility
                operations and processes, from production to payroll. ERP allows
                for unprecedented visibility, coordination and management across
                the disparate processes that make up a business ultimately
                resulting in greater operational efficiency.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                ERP software integrates manufacturing, inventory, sales and
                workforce management, as well as accounting to help businesses
                ensure raw materials are in place and available for product
                production, but functionality does not end here. The Odoo ERP
                software, for example, manages the entire manufacturing process,
                from the creation of your bill of materials to the automated
                re-ordering of materials when stock is low.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                With traceability, your products can be traced all the way back
                to their component parts lot number. because of its connection
                to sales and accounting, ERP software ensures that your
                financials are accurately automatically recorded to track cost
                and profitability. Through these and various other features, ERP
                software is able to successfully manage and automate important
                manufacturing activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* fith content  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Inventory & WMS
          </h1>
          <h5 data-aos="fade-right" data-aos-duration="1000">
            Our Company provides a software solution that offers visibility into
            a business's entire inventory and manages supply chain fulfillment
            operations from the distribution center to the store shelf.
          </h5>

          <div className="itContainerContent">
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                Inventory is the goods or materials a business intends to sell
                to customers for profit. Inventory management, a critical
                element of the supply chain, is the tracking of inventory from
                manufacturers to warehouses and from these facilities to a point
                of sale. The goal of inventory management is to have the right
                products in the right place at the right time.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                This requires inventory visibility — knowing when to order, how
                much to order and where to store stock. The basic steps of
                inventory management include: <br />
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    {" "}
                    Purchasing inventory: Ready-to-sell goods are purchased and
                    delivered to the warehouse or directly to the point of sale.{" "}
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Storing inventory: Inventory is stored until needed. Goods
                    or materials are transferred across your fulfillment network
                    until ready for shipment.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Profiting from inventory: The amount of product for sale is
                    controlled. Finished goods are pulled to fulfill orders.
                    Products are shipped to customers. Inventory can be a
                    company’s most important asset.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Inventory management is where all the elements of the supply
                    chain converge. Too little inventory when and where it's
                    needed can create unhappy customers. But a large inventory
                    has its own liabilities — the cost to store and insure it,
                    and the risk of spoilage, theft and damage. Companies with
                    complex supply chains and manufacturing processes must find
                    the right balance between having too much inventory on hand
                    or not enough.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="itCotainerRight">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            src={iTImage}
            alt=""
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bgImage"
          ></div>
        </div>
      </div>

      {/* sixtht contetn  */}
      <div className="itConsulting itConsulting2">
        <div className="itCotainerRight itCotainerRight2">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={iTImage}
            alt=""
          />
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bgImage bgImage2 "
          ></div>
        </div>
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Supply Chain Management
          </h1>
          <h5 data-aos="fade-left" data-aos-duration="1000">
            Our supply chain management solution enables businesses to see and
            control the flow of goods and services across the company,
            geographies and the entire business.
          </h5>

          <div className="itContainerContent itContainerContent2 ">
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                Supply chain management is the management of the flow of goods
                and services and includes all processes that transform raw
                materials into final products. It involves the active
                streamlining of a business's supply-side activities to maximize
                customer value and gain a competitive advantage in the
                marketplace.
                <br />
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Supply chain management (SCM) is the centralized management
                    of the flow of goods and services and includes all processes
                    that transform raw materials into final products.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    By managing the supply chain, companies can cut excess costs
                    and deliver products to the consumer faster and more
                    efficiently.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Good supply chain management keeps companies out of the
                    headlines and away from expensive recalls and lawsuits.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    The five most critical elements of SCM are developing a
                    strategy, sourcing raw materials, production, distribution,
                    and returns.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    A supply chain manager is tasked with controlling and
                    reducing costs and avoiding supply shortages.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* seventh content  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            BPM, Balance Scorecard, KPI, and Dashboard
          </h1>
          <h5 data-aos="fade-right" data-aos-duration="1000">
            Automate data collection and KPI analysis, drive progress and
            innovation, and use your data insights to deliver measurable
            business outcomes continuously.
          </h5>

          <div className="itContainerContent">
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                Inventory is the goods or materials a business intends to sell
                to customers for profit. Inventory management, a critical
                element of the supply chain, is the tracking of inventory from
                manufacturers to warehouses and from these facilities to a point
                of sale. The goal of inventory management is to have the right
                products in the right place at the right time.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                A key performance indicator is a measurable value that shows how
                effectively you’re meeting your goals. Think of KPIs as your
                company’s scorecard, a way of measuring whether or not you’re
                delivering on your objectives. KPI dashboards provide users
                with: <br />
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    A fast, easy solution to tracking KPIs and other business
                    metrics.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    A unified view of data that improves visibility into company
                    health.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Customizable data visualization with performance and status
                    indicators. By building your KPI dashboard with the same
                    tool or platform that you use to define your KPIs, you’ll
                    have everything you need in the same place. As you modify
                    your KPI definitions, data sources, or targets, these
                    updates will populate automatically into your
                    dashboards—saving you valuable time and effort.
                  </span>
                </span>
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                Identifying and tracking KPIs lets you know if your business is
                on the right path—or if you should change course to avoid losing
                valuable time and money. When used properly, KPIs are powerful
                tools that help you:
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>Monitor company financial health.</span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>Measure progress against strategic goals.</span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>Spot problems early on.</span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>Make timely adjustments to tactics.</span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>Motivate team members.</span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>Make better decisions, faster.</span>
                </span>
              </p>
            </div>

            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                Effective KPI dashboards bring together all the KPIs you need to
                track your strategic goals, establishing a visual representation
                of all your relevant metrics side by side, in one place.
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>Setting a cadence for reporting frequency.</span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Deciding whether your report will be static or interactive,
                    for more dynamic drilldowns into data.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Presenting only the relevant KPIs so you don’t overload the
                    report with KPIs that don’t map back to the reporting goals.
                  </span>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <MdKeyboardDoubleArrowRight
                    style={{
                      fontSize: "25px",
                      // marginTop: "15px",
                      color: "red",
                      marginTop: "2px",
                    }}
                  />
                  <span>
                    Making sure your reporting is clear, easy to understand, and
                    actionable for the intended audience.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="itCotainerRight">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            src={iTImage}
            alt=""
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bgImage"
          ></div>
        </div>
      </div>

      {/* eight content  */}
      <div className="itConsulting">
        <div className="itCotainerLeft">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            CRM & Sales
          </h1>
          <h5 data-aos="fade-right" data-aos-duration="1000">
            Our Company provides solutions for organizations to streamline
            processes, build customer relationships, increase sales, improve
            customer service, and increase profitability.
          </h5>

          <div className="itContainerContent">
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                CRM records customer contact information such as email,
                telephone, website social media profile, and more. It can also
                automatically pull in other information, such as recent news
                about the company's activity, and it can store details such as a
                client's personal preferences on communications.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                The CRM system organizes this information to give you a complete
                record of individuals and companies, so you can better
                understand your relationship over time. CRM software improves
                customer relationship management by creating a 360° view of the
                customer, capturing their interactions with the business, and by
                surfacing the information needed to have better conversations
                with customers.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                CRM enables a business to deepen its relationships with
                customers, service users, colleagues, partners and suppliers.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                Forging good relationships and keeping track of prospects and
                customers is crucial for customer acquisition and retention,
                which is at the heart of a CRM’s function. You can see
                everything in one place a simple, customizable dashboard that
                can tell you a customer’s previous history with you, the status
                of their orders, any outstanding customer service issues, and
                more.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "#081158",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                If your business is going to last, you know that you need a
                strategy for the future. For forward-thinking businesses, CRM is
                the framework for that strategy. more.
              </p>
            </div>
          </div>
        </div>
        <div className="itCotainerRight">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            src={iTImage}
            alt=""
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bgImage"
          ></div>
        </div>
      </div>

      {/* nine conent  */}
      <div className="itConsulting itConsulting2">
        <div className="itCotainerRight itCotainerRight2">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src={iTImage}
            alt=""
          />
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bgImage bgImage2 "
          ></div>
        </div>
        <div className="itCotainerLeft itCotainerLeft2">
          <h1 data-aos="fade-left" data-aos-duration="1000">
            Artificial Intelligence / RPA
          </h1>
          <h5 data-aos="fade-left" data-aos-duration="1000">
            Our team of experts brings the cross-functional skills to deliver
            business outcomes and facilitate cultural change empowering your
            workforce to use data and AI responsibly.
          </h5>

          <div className="itContainerContent itContainerContent2 ">
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                Artificial intelligence (AI) broadly refers to any human-like
                behavior displayed by a machine or system. In AI’s most basic
                form, computers are programmed to “mimic” human behavior using
                extensive data from past examples of similar behavior. This can
                range from recognizing differences between a cat and a bird to
                performing complex activities in a manufacturing facility.
              </p>
            </div>
            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                Artificial intelligence can be a very powerful tool for both
                large corporations generating significant data and small
                organizations that need to process their calls with customers
                more effectively. AI can streamline business processes, complete
                tasks faster, eliminate human error, and much more.
              </p>
            </div>

            <div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{ width: "18px" }}
              >
                <LuArrowBigRightDash
                  style={{
                    fontSize: "20px",
                    color: "white",
                    marginTop: "10px",
                  }}
                />
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                The relationship between artificial intelligence, machine
                learning, and deep learning Artificial intelligence is a branch
                of computer science that seeks to simulate human intelligence in
                a machine. AI systems are powered by algorithms, using
                techniques such as machine learning and deep learning to
                demonstrate “intelligent” behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
