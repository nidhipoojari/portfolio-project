import React from "react";
import Emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactMe = () => {

    const [successMessage,setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors }} = useForm();
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_QOxf32bs7NetDjY8yVwD8";

    const onSubmit = (data, r) => {
        sendEmail(serviceID,templateID,
            {
                name : data.name,
                phone : data.phone,
                email : data.email,
                subject : data.subject,
                description : data.description

            },
            userID
            )
            r.target.reset();
    }

    const sendEmail= (serviceID,templateID,variables,userID) => {

        Emailjs.send(serviceID,templateID,variables,userID)
        .then(() => {
            setSuccessMessage("Form Sent Successfully! I'll contact you as soon as possible.");
        }).catch(err=> console.error(`Something went wrong ${err}`));

    }
    return (
        <div className="contacts">
            <div className="text-center">
               <h1>Contact Me</h1>
               <p>Please fill out the form </p>
            </div> 
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="row">
                      <div className="col-md-6 col-xs-12"> 
                         <input className="form-control" id="name" placeholder="Name" type="text" name ="name" {...register("name",
                         {required:"Please Enter Name",
                         maxLength:{
                            value: 20,
                            message: "Please Enter a Name Fewer Than 20 Characters"
                         }
                         })}></input>
                         <span className="error-message">
                             {errors.name && errors.name.message}
                         </span>
                         <input className="form-control" id="phone" placeholder="Phone" type="number" name="phone" {...register("phone",
                         {required:"Please Add Phone Number"
                             })
                         }></input>
                         <span className="error-message">
                             {errors.phone && errors.phone.message}
                         </span>
                         <input className="form-control" id="email" placeholder="Email" type="email" name="email" {...register("email",
                         {required:"Please Provide Your Email Id",
                                 pattern : {
                                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                     message: "Invalid Email Id"
                                 }                               
                             })
                         }></input>
                         <span className="error-message">
                             {errors.email && errors.email.message}
                         </span>
                         <input className="form-control" id="subject" placeholder="Subject" type="text" name="subject" {...register("subject",
                         {required:"OOPS, You Forgot To Add The Subject!"
                             })
                         }></input>
                          <span className="error-message">
                             {errors.subject && errors.subject.message}
                         </span>
                      </div>
                      <div className="col-md-6 col-xs-12">
                         <textarea className="form-control" id="description" placeholder="Description" type="text" name="description" {...register("description",
                         {required:"Please Describe Shortly Your Project Needs"
                             })
                         }></textarea>
                          <span className="error-message">
                             {errors.description && errors.description.message}
                         </span>
                         <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                      </div>
                  </div>
                </form>
            </div>          
        </div>
    )
}

export default ContactMe
