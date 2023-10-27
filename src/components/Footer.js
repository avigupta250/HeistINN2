import Logo from "../assets/Glay.png";
import logo from "../assets/HeistINN.png";
import AppleLogo from "../assets/Apple.jpg";

const Footer = () => {
  return (
    <div className=" bg-gray-100 flex flex-col  bottom-0 left-0 w-full  ">
      <div className="flex justify-between p-4 mr-10 ml-10">
        <div className="text-[30px] w-[40vw] font-extrabold">
          For better experience ,download the Heist INN app now
        </div>
        <div className="flex h-20 gap-[70px] w-[40vw] justify-end">
          <img className="bg-white w-[200px] rounded-lg" alt="img" src={Logo}></img>
          <img className="bg-white w-[200px] rounded-lg" alt="img" src={AppleLogo}></img>
        </div>
      </div>

      <div className="bg-gray-100  p-20 h-cover grid grid-cols-4 gap-10">
        <div>
          <img className="w-[90px]" alt="img" src={logo}></img>
          <h1 className="text-black text-md font-bold ">@2023 Chandi</h1>
          <h1 className="text-black text-md font-bold ">Avi Technogies Pvt.Ltd</h1>
        </div>
        <div className="text-black text-md font-bold  flex flex-col gap-[10px]">
          <h1 className="text-[25px] font-bold">Company</h1>
          <h1>Careers</h1>
          <h1>Team</h1>
          <h1>Heist INN One</h1>
          <h1>Heist INN Instamart</h1>
          <h1>Heist INN Gate</h1>
        </div>
        <div className="flex flex-col text-black text-md font-bold  gap-[8px]">
          <div className=" flex flex-col gap-[4px]">
            <h1 className="text-[25px] font-bold">Contact Us</h1>
            <h1>Help & Support</h1>
            <h1>Partner with us</h1>
            <h1>Ride with Us</h1>
          </div>
          <div className=" flex flex-col gap-[4px]">
            <h1 className="text-[25px] font-bold">legal</h1>
            <h1>Terms And Conditions</h1>
            <h1>Cookie Policy</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
        <div className="flex flex-col text-black text-md font-bold  gap-[8px]">
            <h1 className=" flex flex-col text-black text-md  gap-[8px] text-[25px] font-bold">We Deliver to:</h1>
            <h1>Patna</h1>
            <h1>Banglore</h1>
            <h1>Mumbai</h1>
            <h1>Delhi</h1>
            <h1>Pune</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
