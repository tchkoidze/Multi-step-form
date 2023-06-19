import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "yup";
import personalinfoSchema from "../personalInfoSchema";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updatePersonalInfo } from "../store/personalInfoSlice";
import RegistrationSteps from "../components/Registration-steps";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const PersonalInfo = () => {
  const dispatch = useAppDispatch();
  const personalInfo = useAppSelector((state) => state.personalInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(personalinfoSchema) });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    navigate("/plan");
  };

  console.log(personalInfo);

  return (
    <div className="h-[100%]  flex flex-col justify-between">
      <RegistrationSteps />

      <form onSubmit={handleSubmit(onSubmit)} className="-translate-y-[72px] ">
        <div className=" bg-white px-6 py-8 mx-4 rounded-[10px]">
          <h1 className="text-blue">Personal info</h1>
          <p className="text-grey mt-[9px] mb-[22px]">
            Please provide your name, email address, and phone number.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="name" className="block text-blue">
                name
              </label>
              {errors.name ? (
                <p className="text-red">{errors.name.message}</p>
              ) : null}
              <input
                type="text"
                id="name"
                placeholder="e.g. Stephen King"
                {...register("name", {
                  onChange: (e) => {
                    dispatch(
                      updatePersonalInfo({
                        value: e.target.value,
                        property: "name",
                      })
                    );
                  },
                })}
                className="border border-light-grey rounded text-blue px-4 py-3 outline-sky-blue"
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="email" className="block text-blue">
                Email Address
              </label>
              {errors.email ? (
                <p className="text-red">{errors.email?.message}</p>
              ) : null}
              <input
                //type="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                {...register("email", {
                  onChange: (e) => {
                    dispatch(
                      updatePersonalInfo({
                        property: "email",
                        value: e.target.value,
                      })
                    );
                    console.log(personalInfo);
                  },
                })}
                className="border border-light-grey rounded text-blue px-4 py-3 outline-sky-blue"
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <label htmlFor="phone" className="block text-blue">
                Phone Number
              </label>
              {errors.phone ? (
                <p className="text-red">{errors.phone?.message}</p>
              ) : null}
              <input
                //type="number"
                id="phone"
                placeholder="e.g. +1 234 567 890"
                {...register("phone", {
                  onChange: (e) => {
                    dispatch(
                      updatePersonalInfo({
                        property: "phone",
                        value: e.target.value,
                      })
                    );
                    console.log(personalInfo);
                  },
                })}
                className="border border-light-grey rounded text-blue px-4 py-3 outline-sky-blue"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex mt-auto">
        <button
          type="submit"
          className="bg-blue rounded px-4 py-3 ml-auto mr-8 "
          onClick={() => handleSubmit(onSubmit)()}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
