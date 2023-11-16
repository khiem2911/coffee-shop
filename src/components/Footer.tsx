import {
  FaYoutube,
  FaSpotify,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-8 bg-bg_footer">
      <div className="text-center text-white">
        <h1 className=" font-bold text-6xl">Our Location</h1>
        <div className="pt-8 pb-6 border-b-2 border-b-border">
          <p className="text-lg">
            JI.Bangkringan No 19, RT.11/RW.2, Kota Surabaya, 60124
          </p>
          <span className="flex items-center gap-1 justify-center">
            <p className="text-lg font-bold">Custom Service</p>
            <p className="text-lg">+6282-2876-6862</p>
          </span>
          <span className="flex items-center gap-1 justify-center">
            <p className="text-lg font-bold">We Are Open from</p>
            <p className="text-lg">Sun-Mon 10 AM - 22 PM</p>
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center pt-6 text-white">
        <div className="flex gap-5">
          <FaSpotify size={20} />
          <FaInstagram size={20} />
          <FaTiktok size={20} />
          <FaYoutube size={20} />
          <FaTwitter size={20} />
          <FaTelegram size={20} />
        </div>
        <span>
          <p className='text-xl'>Delivery Order</p>
        </span>
      </div>
      <div className=" pt-20 flex justify-between items-center text-white">
            <p className="text-xl text-footer_text">© 2023 IMAJI COFFEE, ALL rights reserverd</p>
            <p className="text-xl text-footer_text">Terms and Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};
export default Footer;
