import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import personalinfoSchema from "../personalInfoSchema";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateRegistrationInfo } from "../store/registrationInfoSlice";
import RegistrationSteps from "../components/Registration-steps";
import { useEffect, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const PersonalInfo = () => {
  const dispatch = useAppDispatch();
  const registrationInfo = useAppSelector((state) => state.registrationInfo);

  const [active, setActive] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(personalinfoSchema),
    /*defaultValues: {
      email: registrationInfo.email,
      name: registrationInfo.name,
      phone: registrationInfo.phone,
    },*/
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    navigate("/plan");
  };

  console.log(registrationInfo);

  //const initialRender = useRef<boolean>(false);

  useEffect(() => {
    if (active) {
      localStorage.setItem("formData", JSON.stringify(registrationInfo));
    } else setActive(true);
    // Set form values with data from local storage
    reset({
      name: registrationInfo.name,
      email: registrationInfo.email,
      phone: registrationInfo.phone,
    });
  }, [registrationInfo]);

  return (
    <div className="h-[100%]  flex flex-col justify-between">
      <RegistrationSteps />

      <form onSubmit={handleSubmit(onSubmit)} className="-translate-y-[72px]">
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
                defaultValue={registrationInfo.name}
                placeholder="e.g. Stephen King"
                {...register("name", {
                  onChange: (e) => {
                    dispatch(
                      updateRegistrationInfo({
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
                defaultValue={registrationInfo.email}
                placeholder="e.g. stephenking@lorem.com"
                {...register("email", {
                  onChange: (e) => {
                    dispatch(
                      updateRegistrationInfo({
                        property: "email",
                        value: e.target.value,
                      })
                    );
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
                defaultValue={registrationInfo.phone}
                id="phone"
                placeholder="e.g. +1 234 567 890"
                {...register("phone", {
                  onChange: (e) => {
                    dispatch(
                      updateRegistrationInfo({
                        property: "phone",
                        value: e.target.value,
                      })
                    );
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
          onClick={() => {
            handleSubmit(onSubmit)();

            console.log(active);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
