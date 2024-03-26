import './Footer.css'
import { FaLinkedin ,FaInstagram} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">SSGM logistics is a complete logistics and supply chain service provider. ssgm is one of the largest and fastest growing service providers in the integrated cold chain logistics solution space.</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="#">Office No. 06,Ground floor,
              Kamalraj Shivdarshan,
              Near Mutthut Finance,Sambhaji Raje Chowk,
              Dighi Pune 411015. </a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Email Address</h4>
  	 			<ul>
  	 				<li><a href="#">bandu.tathe@ssgmlogistics.com</a></li>
  	 				<li><a href="#">contact@ssgmlogistics.com</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
				   
  	 				<a href="#"><FaLinkedin style={{fontSize: "40px"}}/></a>
  	 				<a href="#"><FaInstagram style={{fontSize: "40px"}}/></a>
                      
  	 				<a href="#"><FaLinkedin style={{fontSize: "40px"}}/></a>
  	 				<a href="#"><FaInstagram style={{fontSize: "40px"}}/></a>
  	 				
  	 				
                  

  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default Footer
