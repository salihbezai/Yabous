import { Checkbox } from "@mui/material";

const Checkout = () => {
  return (
    <div className="store-container">
      <div className="flex items-center gap-3">
        <div className="text-gray-600">Account</div>
        <div>/</div>
        <div className="text-gray-600">My Account</div>
        <div className="text-gray-600">Product</div>
        <div>/</div>
        <div className="text-gray-600">View Cart</div>
        <div>/</div>
        <div>CheckOut</div>
      </div>
      <div className="flex items-center">
        <div>
          <div>
            <h1 className="text-xl mt-8 mb-8">Billing Details</h1>
          </div>
          <div>
            <div>
              <label for="first-name" className="greyColorText">
                First Name*
              </label>
              <input
                id="first-name"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-full mt-1 mb-3"
              />
            </div>
            <div>
              <label for="company-name" className="greyColorText">
                Company Name
              </label>
              <input
                id="company-name"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-full mt-1 mb-3"
              />
            </div>
            <div>
              <label for="street-address" className="greyColorText">
                Street Address*
              </label>
              <input
                id="street-address"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-full mt-1 mb-3"
              />
            </div>
            <div>
              <label for="appartment" className="greyColorText">
                Apartment, floor, etc. (optional)
              </label>
              <input
                id="appartment"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-full mt-1 mb-3"
              />
            </div>
            <div>
              <label for="town" className="greyColorText">
                Town/City*
              </label>
              <input
                id="town"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-full mt-1 mb-3"
              />
            </div>
            <div>
              <label for="phone-number" className="greyColorText">
                Phone Number*
              </label>
              <input
                id="phone-number"
                type="text"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-full mt-1 mb-3"
              />
            </div>
            <div>
              <label for="email" className="greyColorText">
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                className="outline-none bg-[#F5F5F5] rounded py-1 px-1 w-full mt-1 mb-3"
              />
            </div>
            <div className="flex items-center">
              <Checkbox></Checkbox>
              <p>Save this information for faster check-out next time</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Checkout;
