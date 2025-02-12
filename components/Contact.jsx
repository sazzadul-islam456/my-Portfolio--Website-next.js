import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image"; 
import AnimatedText from "./AnimateedText";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("xanqdbvr");

  // State for form input
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to handle icon visibility
  const [showIcon, setShowIcon] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Clear the form after submission and handle message visibility
  useEffect(() => {
    if (state.succeeded) {
      setShowIcon(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide icon after 3 seconds
      const timer = setTimeout(() => {
        setShowIcon(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    handleSubmit(e); 
  };

  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-16">
          <div className="flex flex-col items-center xl:items-start">
            <AnimatedText
              text="Let's Work Together"
              textStyles="h2 mb-6 xl:mb-12 text-center xl:text-left"
            />
            {/* Form */}
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-6 w-full max-w-lg mx-auto xl:mx-0"
            >
              {/* Firstname & Lastname fields */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full border border-gray-400 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full border border-gray-400 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-400 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="youremail@email.com"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Phone number <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-400 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+880-0000000"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-400 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Leave me a message..."
                  rows="6"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="btn btn-accent flex items-center justify-center gap-2 relative py-3 px-6 rounded-lg text-white font-medium"
              >
                <FaCheckCircle
                  className={`absolute text-white text-lg transition-opacity duration-500 ease-in-out ${
                    showIcon ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100"}`}>
                  {state.submitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image
              src="/assets/contact/img.png" 
              className="object-cover"
              fill
              quality={100}
              alt="Contact Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
