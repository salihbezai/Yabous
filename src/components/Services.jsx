const Services = () => {
  return (
    <div className="store-container flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center gap-20 pb-20 mt-10">
      <div className="flex-col items-center justify-center mt-5 mb-5">
        <div className="w-full flex justify-center items-center mt-5 mb-5">
          <div className="w-[60px] h-[60px] bg-[#C1C1C1] rounded-full flex items-center justify-center ">
            <div className="w-[40px] h-[40px] bg-color-bg-1 rounded-full flex items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  src="/images/icon-delivery.svg"
                  alt="icon/services"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <h1 className="text-xl  font-bold text-center">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-sm text-center">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex-col items-center justify-center mt-5 mb-5">
        <div className="w-full flex justify-center items-center mt-5 mb-5">
          <div className="w-[60px] h-[60px] bg-[#C1C1C1] rounded-full flex items-center justify-center ">
            <div className="w-[40px] h-[40px] bg-color-bg-1 rounded-full flex items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  src="/images/Icon-Customer service.svg"
                  alt="icon/services"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <h1 className="text-xl  font-bold text-center">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-sm text-center">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex-col items-center justify-center mt-5 mb-5">
        <div className="w-full flex justify-center items-center mt-5 mb-5">
          <div className="w-[60px] h-[60px] bg-[#C1C1C1] rounded-full flex items-center justify-center ">
            <div className="w-[40px] h-[40px] bg-color-bg-1 rounded-full flex items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  src="/images/Icon-secure.svg"
                  alt="icon/services"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <h1 className="text-xl  font-bold text-center">
            MONEY BACK GUARANTEE
          </h1>
          <p className="text-sm text-center">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
