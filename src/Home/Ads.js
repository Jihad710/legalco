import Container from "@/Common/Container";
import Image from "next/image";
import React from "react";
import mobile from "../assets/Image/1095.png";
import qrcode from "../assets/Image/qr-code (1).png";
import playstore from "../assets/Image/pngegg.png";
import ios from "../assets/Image/ios.png";

const Ads = () => {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen">
        <div className="p-8 md:flex md:items-center">
          <div className="md:w-1/2 md:order-2 md:mt-8">
            <Image src={mobile} alt="Mobile Image" className="max-w-full w-4/5" />
          </div>
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-3xl font-bold mb-2">
              Get <span className="text-blue-800">LEGALCO</span> App
            </h2>
            <p className="text-gray-600 mb-4">
              Officia quas assumenda incidunt necessitatibus, deserunt
              consequuntur cumque asperiores exercitationem iusto in dolores quasi
              consequatur nihil obcaecati pariatur ea nemo iste sed iusto in
              dolores quasi consequatur nihil obcaecati pariatur ea nemo iste sed.
            </p>
            <div className="flex items-center mt-4">
              <Image
                src={qrcode}
                alt="Q&A Code Scan"
                className="max-w-full w-1/3"
              />
              <h3 className="text-2xl font-medium ml-10">
                Scan to{" "}
                <React.Fragment>
                  <br />
                  Download
                </React.Fragment>
              </h3>
            </div>
            <h2 className="mt-3 text-lg">Download App From</h2>
            <div className="flex mt-5">
              {/* Buttons for iOS and Android */}
              <button className="hover:bg-slate-300 hover:text-white flex items-center justify-center px-4 py-2 mr-2 font-thin text-black-500 border border-[#225559] rounded">
                <Image
                  src={playstore}
                  alt="Google Play Icon"
                  className="w-10 h-10 mb-1 mr-2"
                />
                Get it on
                <br />
                Google Play
              </button>
              <button className="hover:bg-slate-300 hover:text-white flex items-center justify-center px-4 py-2 font-thin text-black-500 border border-[#225559] rounded">
                <Image src={ios} alt="Apple Icon" className="w-10 h-10 mb-1 mr-2" />{" "}
                Get it on
                <br />
                Apple Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ads;
