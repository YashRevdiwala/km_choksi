import {
  FacebookIcon,
  InstagramIcon,
  MessageCircle,
  Phone,
  Send,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

const Footer = () => {
  return (
    <div className="bg-[url('/assets/footer-bg.jpg')] text-center text-white h-[370px]">
      <div className="flex flex-row justify-center items-center py-14 gap-7">
        <div className="flex flex-col px-5">
          <p className="py-4">OVERVIEW</p>
          <p className="py-2">Our Story</p>
          <p className="py-2">Our History</p>
          <p className="py-2">Contact Us</p>
          <p className="py-2">Privacy Policy</p>
        </div>
        <div className="h-max w-[1px] bg-[#fff] px-3 mx-3"></div>
        <div className="flex flex-col px-5">
          <img src="/assets/logo.png" alt="logo" className="py-4" />
          <p className="py-5">Follow us</p>
          <div className="flex flex-row gap-4">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
        </div>
        <div className="flex flex-col items-center px-5">
          <p className="py-4">CONTACT US</p>
          <a href="https://wa.me/+919510970230">
            <p className="flex py-2">
              <MessageCircle />
              +91 9510970230
            </p>
          </a>
          <a href="tel:+912612295000">
            <p className="flex py-2">
              <Phone />
              +91 261 229 5000
            </p>
          </a>
          <a href="mailto:info@kalamandirjewellers.com">
            <p className="flex py-2">
              <Send />
              info@kalamandirjewellers.com
            </p>
          </a>
        </div>
      </div>
      <p>
        © 2023 K M Choksi jewellers. | Website Designed By:
        <Link href="https://www.setblue.com/">Setblue</Link>
      </p>
    </div>
  )
}

export default Footer
