import { FaLocationDot, FaMobileScreen, FaPhoneVolume } from 'react-icons/fa6'
import './Contact.css'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className="container">
    <div className="address">
      <div className="rightContainer">
        <h1>Keep In Touch With Us.</h1>
        <h3></h3>

        <div className="addressCards">
          <div className="addressCard">
            <div className="cardRight">
              <div className="iconDiv">
                <FaLocationDot className="icon" />
              </div>
            </div>
            <div className="cardLeft">
              <p>
                Abu Bakr Siddique, Narjis Building, <br /> Post Box - 12301, Riyadh -
                11473, <br /> Saudi Arabia.
              </p>
            </div>
          </div>
          <div className="addressCard">
            <div className="cardRight">
              <div className="iconDiv">
                <MdEmail className="icon" />
              </div>
            </div>
            <div className="cardLeft">
              <p>hello@gstech.com.sa</p>
            </div>
          </div>
          <div className="addressCard">
            <div className="cardRight">
              <div className="iconDiv">
                <FaPhoneVolume className="icon" />
              </div>
            </div>
            <div className="cardLeft">
              <p>920012913</p>
            </div>
          </div>
          <div className="addressCard">
            <div className="cardRight">
              <div className="iconDiv">
                <FaMobileScreen className="icon" />
              </div>
            </div>
            <div className="cardLeft">
              <p>+966 595007999</p>
            </div>
          </div>
        </div>
      </div>
      <div className="leftContainer">
        <h1>Send a Message.</h1>
        <h3></h3>
        <form action="">
          <div className="formTop">
            <div className="nameContainer">
              <h5>Name</h5>
              <input placeholder="Your Name" type="text" name="" id="" />
            </div>
            <div className="nameContainer">
              <h5>Email address</h5>
              <input placeholder="Your Email Adress" type="email" name="" id="" />
            </div>
          </div>
          <div className="formTop">
            <div className="nameContainer">
              <h5>Mobile Number</h5>
              <input placeholder="Your Mobile Number" type="number" name="" id="" />
            </div>
            <div className="nameContainer">
              <h5>Phone Number</h5>
              <input placeholder="Your Phone Number" type="number" name="" id="" />
            </div>
          </div>
          <div className="formBottom">
          <div className="nameContainer">
              <h5>Message...</h5>
              <textarea placeholder="Type your message here ..." name="" id="" ></textarea>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact
