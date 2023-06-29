import RegistrationSteps from "../components/Registration-steps";

const Thank = () => {
  return (
    <div className="flex flex-col h-[100%]">
      <RegistrationSteps />
      <div className="bg-white px-6 py-8 mx-4 rounded-[10px] -translate-y-[72px]">
        <div className="mb-[22px] text-center">
          <div className="flex justify-center items-center w-14 h-14 bg-[#F9818E] rounded-[50%] m-auto">
            <div className="flex justify-center items-center w-[30px] h-[30px] bg-white rounded-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="11"
                viewBox="0 0 12 9"
              >
                <path
                  fill="none"
                  stroke="#F9818E"
                  strokeWidth="3"
                  d="m1 4 3.433 3.433L10.866 1"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-blue mb-[9px]">Thank you!</h1>
          <p className="text-grey">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thank;
