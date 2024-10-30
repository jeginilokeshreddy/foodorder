import React, { useState, useRef } from "react";
import "./Displayitem.scss"
import itemimages from "../../asserts/Itemimages"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Todolist from "../todolist/Todolist";

export default function Displayitems() {
    const [countervalue, setCounterValue] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showModal, setShowModal] = useState(false);  // Modal visibility state
    const intervalRef = useRef(null);
    const details = useRef([])
    console.log(details);
    //drop down data
    const subjectsdata = ['Html', 'CSS', 'JavaScript', 'ReactJS']; // Subjects array


    const startfunction = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setCounterValue((prev) => prev + 1);
            }, 1000);
        }
    };

    const pausefunction = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const resetfunction = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
        setCounterValue(0);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
        debugger
    };
    const setcolors = (event) => {
      details.current.map((item, index) => {
        item.classList.remove("primary");
        debugger
      });
      event.target.classList.add("primary");
      debugger
    };

    return (
      <div>
       
        <div className="Displayitem_section row_section flex">
          {itemimages.map((item, index) => (
            <img
              className="item_image"
              src={item.imagepath}
              alt="item not found"
              key={index}
            />
          ))}
        </div>

        <h1>{countervalue}</h1>
        <button className="signup button" onClick={startfunction}>
          Start
        </button>
        <button className="signup button" onClick={pausefunction}>
          Pause
        </button>
        <button className="signup button" onClick={resetfunction}>
          Reset
        </button>

        <div className="Todo_section">
          <h1>Todo</h1>
          <button className="btn btn-primary" onClick={toggleModal}>
            Open Modal
          </button>

          {/* Modal */}

          {showModal ? (
            <div class="modal  show " style={{ display: "block" }}>
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      onClick={toggleModal}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="container mt-5">
                      <div className="row justify-content-center">
                        <div className="">
                          <div className="card p-4 shadow-sm">
                            {/* onSubmit={handleSubmit} */}
                            <form>
                              <div className="form-group mb-3">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstName"
                                  name="firstName"
                                  placeholder="Your name.."
                                  // value={formData.firstName}
                                  // onChange={handleChange}
                                />
                              </div>

                              <div className="form-group mb-3">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastName"
                                  name="lastName"
                                  placeholder="Your last name.."
                                  // value={formData.lastName}
                                  // onChange={handleChange}
                                />
                              </div>

                              <div className="form-group mb-3">
                                <label htmlFor="country">Country</label>
                                <select
                                  className="form-control"
                                  id="country"
                                  name="country"
                                  // value={formData.country}
                                  // onChange={handleChange}
                                >
                                  {subjectsdata.map((item, index, array) => {
                                    <option value="Canada">{item}</option>;
                                  })}
                                </select>
                              </div>

                              <div className="form-group mb-3">
                                <label htmlFor="subject">Subject</label>
                                <textarea
                                  className="form-control"
                                  id="subject"
                                  name="subject"
                                  placeholder="Write something.."
                                  // value={formData.subject}
                                  // onChange={handleChange}
                                  rows="4"
                                ></textarea>
                              </div>

                              <button
                                type="submit"
                                className="btn btn-success w-100"
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={toggleModal}
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <h1
            ref={(ele) => {
              details.current[0] = ele;
            }}
            onClick={(e) => {
              console.log(details);
              console.log(details.current);
              setcolors(e)
            }}
          >
            headin1
          </h1>
          <h1
            ref={(ele) => {
              details.current[1] = ele;
            }}
            onClick={(e) => {
              console.log(details);
              console.log(details.current);
               setcolors(e);
            }}
          >
            headin2
          </h1>
          <h1
            ref={(ele) => {
              details.current[2] = ele;
            }}
            onClick={(e) => {
              console.log(details);
              console.log(details.current);
               setcolors(e);
            }}
          >
            headin3
          </h1>
          <h1
            ref={(ele) => {
              details.current[3] = ele;
            }}
            onClick={(e) => {
              console.log(details);
              console.log(details.current);
               setcolors(e);
            }}
          >
            headin4
          </h1>
          <h1
            ref={(ele) => {
              details.current[4] = ele;
            }}
            onClick={(e) => {
              console.log(details);
              console.log(details.current);
               setcolors(e);
            }}
          >
            headin5
          </h1>
        </div>
      </div>
    );


    // call means child nested
    // call means request data 
    //https://youtu.be/DfILS_4FHKI?si=ccYn_4EskEomkibJ  how comprasion operator works in () and if() condition
}


