import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div className="w-5/5 mx-3 my-5 ">
      <div
        className="appointment-section pt-5 pb-28  mt-2   rounded-lg flex flex-col"
        style={{ backgroundColor: "#3adbb9" }}
      >
        <h2 className="mb-5 ml-5  text-3xl text-white font-semibold">
          Today's Appointment
        </h2>
      </div>
      <div
        className="appointment-card bg-white px-3 py-8 rounded-lg flex justify-between items-center shadow-md w-80 mx-auto "
        style={{ marginTop: "-120px" }}
      >
        <div>
          <div
            className="date  font-bold p-2 text-white rounded-md mt-2"
            style={{ backgroundColor: "#3adbb9" }}
          >
            <span>06</span>
            <div>Saturday</div>
          </div>
          <div className="text-m mt-1">
            {" "}
            <strong>10:00 AM</strong>
          </div>
        </div>

        <p className="ml-4">
          <strong>Caregiver will start work</strong>
        </p>
        <div className=" ml-5">
          <FontAwesomeIcon className="ml-5" icon={faUser} />
          <p className="ml-1 text-base">
            <strong>Omkar</strong>
          </p>
        </div>
      </div>
      <div
        className="appointment-section pt-5 pb-28  mt-10 rounded-lg flex flex-col "
        style={{ backgroundColor: "#3adbb9" }}
      >
        <h2 className="mb-5 ml-5 text-3xl text-white font-semibold">
          Pending Bills
        </h2>
      </div>
      <div
        className="bill-card-page bg-white p-8 rounded-lg shadow-md w-80 mx-auto "
        style={{ marginTop: "-120px" }}
      >
        <p className="-mt-4 mb-4">
          <strong>Back Pain 2 Hour Therapy Service</strong>
          <p className="mt-1">8th July 2024</p>
        </p>
        <div className="flex justify-between -mt-4">
          <p>ODI80858400003</p>
          <p className="amount text-xl font-bold">₹500</p>
        </div>
        <div className="bill-amount mt-2 flex flex-col items-end">
          <button
            className="pay-now py-2 px-4  text-white rounded-full -mb-1 text-sm"
            style={{ backgroundColor: "#3adbb9" }}
          >
            Pay Now
          </button>
        </div>
      </div>

      <div className="services-section flex flex-wrap justify-around mt-7 mb-20">
        <div className="service-card bg-white p-2 rounded-lg shadow-md w-40 h-56 my-2 mx-2 text-center text-sm">
          <span className="font-bold text-m">MEDICAL RECORDS</span>
          <br />
          <span className="text-gray-400">FROM HOSPITAL</span>
          <br />
          <span className="relative inline-block p-2 bg-teal-400 rounded-full half-bg mt-2">
            UP TO 40% OFF
          </span>
          <img
            src="https://img.freepik.com/free-vector/medical-background-design_1212-116.jpg"
            alt=""
            className="rounded-full p-2 mt-3 h-28 w-28 ml-10 "
          />
        </div>
        <div className="service-card bg-white p-2 rounded-lg shadow-md  w-40 h-56 my-2 mx-2 text-center text-sm">
          <span className="font-bold text-m">EQUIPMENT</span>
          <br />
          <span className="text-gray-400">FOR RENT & SALE</span>
          <br />
          <span className="relative inline-block p-2 rounded-full half-bg mt-2">
  UP TO 20% OFF
</span>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2021/3/SP/ZN/OX/35600675/c-arm-machine-250x250.jpg"
            alt=""
            className="p-2  h-32 w-32 ml-5 "
          />
        </div>
        <div className="flex">
          <div className=" bg-white  rounded-lg w-40 my-2 mx-2 text-center text-sm">
            <span className="font-bold text-m">EQUIPMENT ORDER</span>
            <br />
            <span className="text-gray-400">FOR RENT & SALE</span>
            <br />
            <span className="relative inline-block p-2 bg-teal-400 rounded-full half-bg mt-2">
              UP TO 10% OFF
            </span>
            <img
              src="https://www.dispatchtrack.com/hubfs/what-is-dispatch-software.webp"
              alt=""
              className="h-28 w-28"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="service-card bg-white p-4 rounded-lg shadow-md w-40 h-24 my-2 mx-2 text-sm flex justify-between items-center">
              <div className="text-left">
                <span className="font-bold text-m">DOCTOR</span>
                <br /> <span className="text-gray-400">
                  Best Doctors on
                </span>{" "}
                <span className="text-emerald-700 text-m font-bold">
                  MINDTROT
                </span>
              </div>
              <img
                src="https://thumbs.dreamstime.com/b/young-doctor-vector-illustration-65642392.jpg"
                alt=""
                className="w-1/2 h-full object-cover"
              />
            </div>
            <div className=" bg-white p-4 rounded-lg shadow-md w-40 h-24 my-2 mx-2 text-sm flex justify-between items-center">
              <div className="text-left">
                <span className="font-bold text-m">HOSPITAL</span>
                <br /> <span className="text-gray-400">
                  Top Hospitals on
                </span>{" "}
                <span className="text-emerald-700 text-m font-bold">
                  MINDTROT
                </span>
              </div>
              <img
                src="https://t3.ftcdn.net/jpg/06/11/77/98/360_F_611779836_Q9tuHGqSc5z6zJEylc1URs2pC27eG1ix.jpg"
                alt=""
                className="w-1/2 h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-40 h-24 my-2 mx-2 text-sm flex justify-between items-center">
          <div className="text-left">
            <span className="font-bold text-m">CREDIT CARD</span>
            <br /> <span className="text-gray-400">FLAT 10% OFF on</span>{" "}
            <span className="text-emerald-700 text-m font-bold">MINDTROT</span>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/credit-card_648765-5003.jpg"
            alt=""
            className="w-1/2 h-full object-cover"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-40 h-24 my-2 mx-2 text-sm flex justify-between items-center">
          <div className="text-left">
            <span className="font-bold text-m">ANALYTICS</span>
            <br />{" "}
            <span className="text-gray-400">Analytics of Your Health</span>
          </div>
          <img
            src="https://media.istockphoto.com/id/925690772/vector/icon-icon-with-the-concept-of-searching-analyzing-for-business-finance-and-marketing.jpg?s=612x612&w=0&k=20&c=eYqm89QSN6MWpXRICxTCCQdX6o-mg-Lu9rZLWK6WNgM="
            alt=""
            className="w-1/2 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
