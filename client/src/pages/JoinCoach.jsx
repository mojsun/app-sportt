// // import { useNavigate } from "react-router-dom"; // Correct import for react-router-dom v6+
// import { useState } from "react"; // Import useState to manage state
// import { useNavigate } from "react-router-dom";
// import Main from "../layouts/Main";
// import "./Contact.css";
// import "./joinCoach.css";
// export default function Contact() {
//   // const navigate = useNavigate();
//   const navigate = useNavigate();
//   const [ setIsSubmitted] = useState(false); // State to track form submission

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform form validation and submission logic here
//     // For demonstration, let's assume form submission is successful
//     setIsSubmitted(true); // Update state to indicate form submission

//     // Redirect to success page after a delay (for demonstration purposes)
//     setTimeout(() => {
//       navigate("/success"); // Redirect to the success page
//     }, 2000); // Delay of 2 seconds before redirecting
//   };
//   return (
//     <Main>
//       <section id="JoinCoach">
//         <div className="form-container">
//           <h1>Join AppSport as a Coach</h1>
//           <form action="#" method="post">
//             <div className="form-group">
//               <label htmlFor="first-name">First Name *</label>
//               <input type="text" id="first-name" name="first-name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="last-name">Last Name *</label>
//               <input type="text" id="last-name" name="last-name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email Address *</label>
//               <input type="email" id="email" name="email" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input type="tel" id="phone" name="phone" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password *</label>
//               <input type="password" id="password" name="password" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password-confirm">Password Confirmation *</label>
//               <input
//                 type="password"
//                 id="password-confirm"
//                 name="password-confirm"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="sport-field">Sport Field/Specialty *</label>
//               <select id="sport-field" name="sport-field" required>
//                 <option value="" disabled selected>
//                   Select your specialty
//                 </option>
//                 <option value="swimming">Swimming</option>
//                 <option value="vollyball">Vollyball</option>
//                 <option value="tennis">Tennis</option>
//                 <option value="fitness">Fitness</option>
//                 <option value="yoga">Yoga</option>
//                 <option value="karate">Karate</option>
//                 <option value="basketball">Basketball</option>
//                 <option value="chess">chess</option>
//                 <option value="zumba">zumba</option>
//                 <option value="kickboxing">kickboxing</option>
//                 <option value="pilates">pilates</option>
//                 <option value="bodybuilding">bodybuilding</option>
//                 <option value="gymnastic">gymnastic</option>
//                 <option value="iceskating">iceskating</option>
//                 <option value="selfdefence">selfdefence</option>
//                 <option value="jodo">jodo</option>
//                 <option value="skiing">skiing</option>
//                 <option value="MaterialArt">MaterialArt</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="experience">Years of Experience (Optional)</label>
//               <input type="number" id="experience" name="experience" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="certifications">
//                 Indicate List of Certifications (Optional)
//               </label>
//               <textarea
//                 id="certifications"
//                 name="certifications"
//                 rows="4"
//               ></textarea>
//             </div>
//             <button type="submit">Join Now</button>
//           </form>
//         </div>
//       </section>
//     </Main>
//   );
// }

// import { useState } from "react"; // Import useState to manage state
// import { useState } from "react";

// import { useNavigate } from "react-router-dom";
// import Main from "../layouts/Main";
// import "./Contact.css";
// import "./joinCoach.css";
// import "./Contact.css";
// export default function JoinCoach() {
//   const navigate = useNavigate();

//   // State to track form submission

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setTimeout(() => {
//       navigate("/Success"); // Redirect to the success page
//     }, 2000);

//   };

//   return (
//     <Main>
//       <section id="JoinCoach">
//         <div className="form-container">
//           <h1>Join AppSport as a Coach</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="first-name">First Name *</label>
//               <input type="text" id="first-name" name="first-name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="last-name">Last Name *</label>
//               <input type="text" id="last-name" name="last-name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email Address *</label>
//               <input type="email" id="email" name="email" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input type="tel" id="phone" name="phone" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password *</label>
//               <input type="password" id="password" name="password" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password-confirm">Password Confirmation *</label>
//               <input
//                 type="password"
//                 id="password-confirm"
//                 name="password-confirm"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="sport-field">Sport Field/Specialty *</label>
//               <select id="sport-field" name="sport-field" required>
//                 <option value="" disabled selected>
//                   Select your specialty
//                 </option>
//                 <option value="swimming">Swimming</option>
//                 <option value="volleyball">Volleyball</option>
//                 <option value="tennis">Tennis</option>
//                 <option value="fitness">Fitness</option>
//                 <option value="yoga">Yoga</option>
//                 <option value="karate">Karate</option>
//                 <option value="basketball">Basketball</option>
//                 <option value="chess">chess</option>
//                 <option value="zumba">zumba</option>
//                 <option value="kickboxing">kickboxing</option>
//                 <option value="pilates">pilates</option>
//                 <option value="bodybuilding">bodybuilding</option>
//                 <option value="gymnastic">gymnastic</option>
//                 <option value="iceskating">iceskating</option>
//                 <option value="selfdefence">selfdefence</option>
//                 <option value="jodo">jodo</option>
//                 <option value="skiing">skiing</option>
//                 <option value="MaterialArt">MaterialArt</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="experience">Years of Experience (Optional)</label>
//               <input type="number" id="experience" name="experience" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="certifications">
//                 Indicate List of Certifications (Optional)
//               </label>
//               <textarea
//                 id="certifications"
//                 name="certifications"
//                 rows="4"
//               ></textarea>
//             </div>
//             <button type="submit">Join Now</button>
//           </form>
//         </div>
//       </section>
//     </Main>
//   );
// }

// JoinCoach.jsx
// import React from "react";

import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Main from "../layouts/Main";
import "./Contact.css";
import "./joinCoach.css";
import "./Contact.css";
import { ADD_USER } from "../utils/mutations"; // Import your mutation query

export default function JoinCoach() {
  const navigate = useNavigate();
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const email = formData.get("email");
    const password = formData.get("password");
    const phone = formData.get("phone");
    const category = formData.get("sport-field");
    const experience = formData.get("experience");
    const optional = formData.get("certifications");

    try {
      const { data } = await addUser({
        variables: {
          firstName,
          lastName,
          email,
          password,
          category,
          experience,
          optional,
          phone,
        },
      });

      // Handle successful mutation - navigate to success page or handle logic here
      console.log("User added:", data.addUser);
      navigate("/Success"); // Redirect to the success page
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle error - show error message or retry logic
    }
  };

  return (
    <Main>
      <section id="JoinCoach">
        <div className="form-container">
          <h1>Join AppSport as a Coach</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name *</label>
              <input type="text" id="first-name" name="first-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name *</label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="password-confirm">Password Confirmation *</label>
              <input
                type="password"
                id="password-confirm"
                name="password-confirm"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sport-field">Sport Field/Specialty *</label>
              <select id="sport-field" name="sport-field" required>
                <option value="" disabled selected>
                  Select your specialty
                </option>
                <option value="swimming">Swimming</option>
                <option value="volleyball">Volleyball</option>
                <option value="tennis">Tennis</option>
                <option value="fitness">Fitness</option>
                <option value="yoga">Yoga</option>
                <option value="karate">Karate</option>
                <option value="basketball">Basketball</option>
                <option value="chess">chess</option>
                <option value="zumba">zumba</option>
                <option value="kickboxing">kickboxing</option>
                <option value="pilates">pilates</option>
                <option value="bodybuilding">bodybuilding</option>
                <option value="gymnastic">gymnastic</option>
                <option value="iceskating">iceskating</option>
                <option value="selfdefence">selfdefence</option>
                <option value="jodo">jodo</option>
                <option value="skiing">skiing</option>
                <option value="MaterialArt">MaterialArt</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="experience">Years of Experience (Optional)</label>
              <input type="number" id="experience" name="experience" />
            </div>
            <div className="form-group">
              <label htmlFor="certifications">
                Indicate List of Certifications (Optional)
              </label>
              <textarea
                id="certifications"
                name="certifications"
                rows="4"
              ></textarea>
            </div>
            <button type="submit">Join Now</button>
          </form>
        </div>
      </section>
    </Main>
  );
}
