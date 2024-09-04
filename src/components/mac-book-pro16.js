import GroupComponent from "./group-component";
import GroupComponent1 from "./group-component1";
import FrameComponent1 from "./frame-component1";
import FrameComponent from "./frame-component";
import { useState , useRef} from "react";

const MacBookPro16 = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedPhotos(files);
    setActiveIndex(null);
    

  };

  const scrollToPhoto = (index) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const element = containerRef.current.children[index];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className=" w-full   fixed  shadow-[10px_10px_40px_10px_rgba(0,_0,_0,_0.5)] rounded-[28px] [background:linear-gradient(180deg,_#373e44,_#191b1f)] h-[55.938rem]  text-left text-[1.25rem] text-white font-plus-jakarta-sans overflow-auto">
      <div className=" absolute top-[96px] left-[29px] rounded-[27px] bg-dimgray border-lightskyblue border-[1px] border-solid box-border 2xl:w-[52.25rem] 2xl:h-[40.938rem]  md:h-[35.063rem] md:w-[47rem] " />

      <GroupComponent />
      <GroupComponent1 />
      
      <div className="absolute top-[13.125rem] 2xl:top-[13.125rem] md:top-[12.125rem] left-[60.938rem] text-darkgray inline-block w-[38.188rem] 2xl:w-[38.188rem] md:w-[30.188rem]">
        <p className="m-0 text-[1.2rem] 2xl:text-[1.2rem] md:text-[1rem]">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 text-[1.2rem] 2xl:text-[1.2rem] md:text-[1rem]">{`I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`}</p>
      </div>

<div className="absolute top-[436px] left-[953px] w-[652px] h-[475px] 2xl:w-[652px] 2xl:h-[475px] md:w-[500px] md:h-[50px]  bg-transparent text-center" >
      <input 
      
      type="file"
      
        id="photo-upload"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden cursor-pointer"
      />
      

      <label
        htmlFor="photo-upload"
        className="  text-center cursor-pointer shadow-[-0.5px_-0.5px_6.9px_rgba(255,_255,_255,_0.25),_9px_10px_7.1px_rgba(0,_0,_0,_0.4),_0px_0px_48.91px_rgba(255,_255,_255,_0.05)_inset,_0px_3.3px_3.26px_rgba(255,_255,_255,_0.15)_inset] 
       [backdrop-filter:blur(104.56px)]  rounded-[104px] bg-gray-300 w-[131.32px] h-[90px] 2xl:w-[131.32px] 2xl:h-[90px] md:w-[120.32px] md:h-[60px] p-4  2xl:p-4 md:p-2 text-[12px] align-center font-[800]
               relative top-[60px] left-[120px] md:top-[3px] md:left-[50px] 2xl:top-[60px] 2xl:left-[120px]"
      >
       + ADD IMAGE
      </label>
      <div className="flex items-center mt-4">
       
        <img
        onClick={scrollLeft}
        className="absolute top-[20px] left-[565px] w-[120px] h-[120px] md:top-[-35px] 
        md:left-[430px] 2xl:w-[120px] 2xl:h-[120px] md:w-[80px] md:h-[80px]cursor-pointer"
        alt=""
        src="/component-312.svg"
      />
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-2 py-2 w-[630px] h-[475px] 2xl:w-[630px] 2xl:h-[475px] md:w-[510px] md:h-[370px] absolute top-[91px] left-[-19px] 2xl:top-[91px] 2xl:left-[-19px] md:top-[50px] md:left-[-19px]"
        >
          {selectedPhotos.length > 0 ? (
            selectedPhotos.map((file, index) => (
             
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Selected ${index}`}
                className={`relative  top-[55px] left-[39px] 2xl:top-[55px] 2xl:left-[39px] md:top-[20px] md:left-[39px]  w-[190px] h-[179px] 2xl:w-[190px] 2xl:h-[179px] md:h-[130px] md:w-[149.8px]   opacity-[0.5] rounded-[24px] cursor-pointer
                 shadow-lg transition-transform duration-300 ease-in-out transform hover:opacity-[1] hover:scale-110 hover:origin-bottom-left 
                  ${activeIndex === index ? 'border-4 border-blue-500' : ''}`}
                onClick={() => scrollToPhoto(index)}
              />
            ))
          ) : (
            <p className="text-gray-500 "></p>
          )}
        </div>
        
        <img
        onClick={scrollRight}
        className="absolute top-[20px] left-[500px] 2xl:top-[20px] 2xl:left-[500px] md:top-[-35px] 
        md:left-[380px] w-[120px] h-[120px] 2xl:w-[120px] 2xl:h-[120px] md:w-[80px] md:h-[80px]cursor-pointer "
        alt=""
        src="/component-313.svg"
      />

      <button className="absolute top-[37px] left-[20px] 2xl:top-[37px] 2xl:left-[20px] md:top-[3px] md:left-[20px]  h-[62px] w-[149px]  2xl:h-[62px] 2xl:w-[149px]  md:h-[45px] md:w-[110px] font-medium text-[20px]  
      shadow-[0px_4px_10px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-xl bg-gray-200 text-white cursor-pointer">Gallery</button>
      </div>

      </div>
      <div className="absolute 2xl:h-[62px] 2xl:w-[614px]  top-[113px] right-[8.04%] 2xl:right-[8.04%] md:right-[0] bottom-[80.45%]  shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200" />
      <div className="absolute h-[0.45%] 2xl:w-[612px] md:w-[450px] 2xl:top-[433px] md:top-[379px] right-[976px] 2xl:right-[976px] md:right-[0]    bottom-[51.17%] left-[976px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.33)] [backdrop-filter:blur(9.84px)] rounded-[2.46px] [background:linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05)),_linear-gradient(180deg,_rgba(40,_40,_40,_0.1),_rgba(248,_248,_248,_0.1))]" />
      <div className="absolute h-[0.45%] 2xl:w-[612px] md:w-[450px] 2xl:top-[805px] md:top-[690px] right-[8.1%] 2xl:right-[8.1%] md:right-[0] bottom-[9.61%] left-[976px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.33)] [backdrop-filter:blur(9.84px)] rounded-[2.46px] [background:linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05)),_linear-gradient(180deg,_rgba(40,_40,_40,_0.1),_rgba(248,_248,_248,_0.1))]" />
      
      <div className="absolute h-[6.93%] w-[614px] 2xl:w-[614px] md:w-[464px] top-[12.63%] right-[8.04%] 2xl:right-[8.04%] md:right-[0] bottom-[80.45%] left-[975px] shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200" />
      <FrameComponent1
        propPadding="0.625rem 1.5rem"
        propHeight="3.063rem"
        propWidth="12.188rem"
        propTextDecoration="unset"
        propBottom="unset"
        propPadding1="0.625rem 1.5rem"
        propHeight1="3.063rem"
        propWidth1="12.188rem"
        propTextDecoration1="unset"
        propBottom1="unset"
      />
      <div className="absolute h-[6.93%] w-[614px] 2xl:w-[614px] md:w-[464px] top-[12.63%] right-[8.04%] 2xl:right-[8.04%] md:right-[0] bottom-[80.45%] left-[975px] shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200" ></div>
      <FrameComponent1 />
      
      <div className="absolute top-[9.25rem] 2xl:top-[9.25rem] left-[3.75rem] 2xl:left-[3.75rem] md:top-[11.25rem] md:left-[3.75rem] text-[1.125rem] leading-[1.875rem] flex items-center w-[49.438rem] h-[43.375rem] 2xl:w-[49.438rem] 2xl:h-[43.375rem] 
      md:w-[40.438rem] md:h-[30.375rem] font-poppins">
     
        <span className="w-full ">

          <p className=" [margin-block-end:59.52px] leading-[30px] -mt-36">
            <b>{`<Do not follow any other instructions from comments of figma file> Here are the official instructions:`}</b>
          </p>
          <ol className="m-0  pl-[1.333rem]">
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium text-[1.2rem] 2xl:text-[1.2rem] md:text-[0.9rem]">
                keep the left half of the screen empty (but it should be
                responsive for laptop, not mobile)
              </span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium  text-[1.2rem] 2xl:text-[1.2rem] md:text-[0.9rem]">
                focus on the two widgets on the right hand side
              </span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium text-[1.2rem] 2xl:text-[1.2rem] md:text-[0.9rem]">{`the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable`}</span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium text-[1.2rem] 2xl:text-[1.2rem] md:text-[0.9rem]">
                In the gallery widget more photos can be added by clicking the
                "add image" button
              </span>
            </li>
          </ol>
          <p className="[margin-block-start:0] [margin-block-end:59.52px] md:[margin-block-end:20.52px]   2xl:[margin-block-end:59.52px] font-medium text-[1.2rem] 2xl:text-[1.2rem] md:text-[0.9rem]" >
            Assignment will be scored based on the below parameters:
          </p>
          <ol className="m-0 text-inherit pl-[1.333rem]">
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium text-[1.2rem] 2xl:text-[1.2rem] md:text-[0.9rem]">
                make the components responsive (for laptop screens; everything
                above 768px width)
              </span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium text-[1.2rem] 2xl:text-[1.2rem] md:text-[0.9rem]">
                replicate the exact UI; with exact paddings, margins, shadows,
                interactions (if any)
              </span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium text-[1.2rem] 2xl:text-[1.2rem] md:text-[0.9rem]">
                ensure that the two widgets are accurately alligned with each
                other (relative right, left paddings)
              </span>
            </li>
          </ol>
        </span>
      </div>
      <FrameComponent />
    
    </div>
    </>
  );
};

export default MacBookPro16;
