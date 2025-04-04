const EditProfile = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto">
      <h2 className="secondaryColorText font-bold text-lg mb-4">
        Edit Your Profile
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 mb-1">First Name</label>
          <input
            type="text"
            value="Md"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Last Name</label>
          <input
            type="text"
            value="Rimel"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value="rimel111@gmail.com"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Address</label>
          <input
            type="text"
            value="Kingston, 5236, United State"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>
      </div>
      <h3 className="text-gray-700 font-semibold mt-6 mb-2">
        Password Changes
      </h3>
      <div className="space-y-3">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full p-2 border border-gray-300 rounded bg-gray-100"
        />
      </div>
      <div className="flex justify-end items-center mt-6 gap-4">
        <button className="button-theme px-4 py-2 ">Cancel</button>
        <button className="button-theme  text-white bg-color-bg-2 px-4 py-2  ">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
