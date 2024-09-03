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
    <div className=" w-full fixed  shadow-[10px_10px_40px_10px_rgba(0,_0,_0,_0.5)] rounded-[28px] [background:linear-gradient(180deg,_#373e44,_#191b1f)] h-[55.938rem]  text-left text-[1.25rem] text-white font-plus-jakarta-sans overflow-auto">
      <div className="absolute top-[96px] left-[29px] rounded-[27px] bg-dimgray border-lightskyblue border-[1px] border-solid box-border w-[52.25rem] h-[43.063rem]" />

      <GroupComponent />
      <GroupComponent1 />
      
      <div className="absolute top-[13.125rem] left-[60.938rem] text-darkgray inline-block w-[38.188rem]">
        <p className="m-0">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`}</p>
      </div>

<div className="absolute top-[436px] left-[953px]  w-[652px] h-[475px] bg-transparent text-center" >
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
       [backdrop-filter:blur(104.56px)]  rounded-[104px] bg-gray-300 w-[131.32px] h-[90px]  p-4 text-[12px] align-center font-[800]
               relative top-[60px] left-[120px]"
      >
       + ADD IMAGE
      </label>
      <div className="flex items-center mt-4">
       
        <img
        onClick={scrollLeft}
        className="absolute top-[20px] left-[565px] w-[120px] h-[120px] cursor-pointer"
        alt=""
        src="/component-312.svg"
      />
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-2 py-2 w-[630px] h-[475px] absolute top-[91px] left-[-19px]"
        >
          {selectedPhotos.length > 0 ? (
            selectedPhotos.map((file, index) => (
             
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Selected ${index}`}
                className={`relative  top-[55px] left-[39px]  w-[190px] h-[179px] object-cover opacity-[0.5] rounded-[24px] cursor-pointer
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
        className="absolute top-[20px] left-[500px] w-[120px] h-[120px] cursor-pointer "
        alt=""
        src="/component-313.svg"
      />

      <button className="absolute top-[37px] left-[20px] h-[62px] w-[149px] font-medium text-[20px]  
      shadow-[0px_4px_10px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-xl bg-gray-200 text-white cursor-pointer">Gallery</button>
      </div>

      </div>
      <div className="absolute h-[62px] w-[614px] top-[113px] right-[8.04%] bottom-[80.45%] left-[975px] shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200" />
      <div className="absolute h-[0.45%] w-[612px] top-[433px] right-[976px] bottom-[51.17%] left-[976px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.33)] [backdrop-filter:blur(9.84px)] rounded-[2.46px] [background:linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05)),_linear-gradient(180deg,_rgba(40,_40,_40,_0.1),_rgba(248,_248,_248,_0.1))]" />
      <div className="absolute h-[0.45%] w-[612px] top-[805px] right-[8.1%] bottom-[9.61%] left-[976px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.33)] [backdrop-filter:blur(9.84px)] rounded-[2.46px] [background:linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05)),_linear-gradient(180deg,_rgba(40,_40,_40,_0.1),_rgba(248,_248,_248,_0.1))]" />
      {/* <img
        className="absolute h-[9.58px] w-[9.58px] top-[499.26px] right-[22.41%] bottom-[43.01%] left-[1329.92px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      /> */}
      <div className="absolute h-[6.93%] w-[614px] top-[12.63%] right-[8.04%] bottom-[80.45%] left-[975px] shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200" />
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
      <div className="absolute h-[6.93%] w-[614px] top-[12.63%] right-[8.04%] bottom-[80.45%] left-[975px] shadow-[0px_5px_12.4px_2.48px_rgba(0,_0,_0,_0.25)_inset] rounded-4xl bg-gray-200" ></div>
      <FrameComponent1 />
      
      <div className="absolute top-[9.25rem] left-[3.75rem] text-[1.125rem] leading-[1.875rem] flex items-center w-[49.438rem] h-[43.375rem] font-poppins">
     
        <span className="w-full">

          <p className=" [margin-block-end:59.52px] leading-[30px] -mt-36">
            <b>{`<Do not follow any other instructions from comments of figma file> Here are the official instructions:`}</b>
          </p>
          <ol className="m-0 text-inherit pl-[1.333rem]">
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium">
                keep the left half of the screen empty (but it should be
                responsive for laptop, not mobile)
              </span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium text-lg">
                focus on the two widgets on the right hand side
              </span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium">{`the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable`}</span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium">
                In the gallery widget more photos can be added by clicking the
                "add image" button
              </span>
            </li>
          </ol>
          <p className="[margin-block-start:0] [margin-block-end:59.52px] font-medium">
            Assignment will be scored based on the below parameters:
          </p>
          <ol className="m-0 text-inherit pl-[1.333rem]">
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium">
                make the components responsive (for laptop screens; everything
                above 768px width)
              </span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium">
                replicate the exact UI; with exact paddings, margins, shadows,
                interactions (if any)
              </span>
            </li>
            <li className="my-[undefined] mx-[undefined]">
              <span className="font-medium">
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
