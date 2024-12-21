import React from "react";
import QuoteImg from "../assets/images/quote-icon.webp";
import ProfileImage1 from "../assets/images/hero-bg.jpg";
import ProfileImage2 from "../assets/images/hero-bg.jpg";
import ProfileImage3 from "../assets/images/hero-bg.jpg";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    background: "bg-[#BC60FB]",
    quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          molestiae commodi ipsa quisquam tenetur eaque ducimus corporis ad
          expedita odit error, libero vel voluptate aperiam quibusdam porro
          dolorem animi sint dolore voluptatibus. Quas eum repellat dolor neque.
          Suscipit ex, commodi consectetur quis officia ad reiciendis
          exercitationem minus nesciunt qui magni.`,
    author: "- Mark Greenspan",
    position: "Founder at influenceTHIS Canada",
    profileImage: ProfileImage1,
  },
  {
    id: 2,
    background: "bg-[#0067DC]",
    quote: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea non quia consequatur cumque velit impedit.`,
    author: "- John Doe",
    position: "CEO at Tech Solutions",
    profileImage: ProfileImage2,
  },
  {
    id: 3,
    background: "bg-[#923FE6]",
    quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, incidunt, sunt cupiditate accusantium ex facere.`,
    author: "- Jane Smith",
    position: "Director at Innovate Inc.",
    profileImage: ProfileImage3,
  },
];

const TestimonialCard = ({
  background,
  quote,
  author,
  position,
  profileImage,
}) => {
  return (
    <div className={`flex-1 ${background} p-8 flex flex-col rounded-md`}>
      <div className="flex justify-between items-center mb-4">
        <img className="h-8 w-10" src={QuoteImg} alt="Quote Icon" />
        <img
          className="h-20 w-20 rounded-full border-white border-2"
          src={profileImage || ProfileImage1}
          alt={author || "Profile"}
        />
      </div>
      <p className="text-white font-poppins mb-4">
        {quote || "No quote available."}
      </p>
      <h2 className="text-white font-poppins">
        <span className="font-semibold">{author || "Anonymous"}</span>
        <br />
        {position || "Position not provided"}
      </h2>
    </div>
  );
};

const TestimonialsAndContact = () => {
  const textItems = [
    {
      type: "text",
      content: "Available for select freelance opportunities",
      className: "text-white text-[38px] font-poppins font-bold leading-tight",
      delay: 0,
    },
    {
      type: "text",
      content:
        "Have an exciting project you need help with? <br /> Send me an email or contact me via instant message!",
      className: "text-white py-6 text-lg font-bold",
      delay: 0.2,
    },
  ];

  const linkItems = [
    {
      content: "syedabdulaziz531@gmail.com",
      href: "mailto:syedabdulaziz531@gmail.com",
      className:
        "fancy-underline text-white xl:text-2xl font-semibold font-poppins",
      delay: 0.4,
    },
    {
      content: "LinkedIn",
      href: "https://www.linkedin.com/in/syed-abdulaziz-a5257b2a6/",
      className:
        "text-white pt-6 text-xl font-bold transition duration-300 hover:text-[#66D9ED]",
      delay: 0.6,
    },
    {
      content: "Github",
      href: "https://github.com/SyedAbdulaziz5",
      className:
        "text-white pt-2 text-xl font-bold transition duration-300 hover:text-[#66D9ED]",
      delay: 0.8,
    },
    {
      content: "Instagram",
      href: "/",
      className:
        "text-white py-2 text-xl font-bold transition duration-300 hover:text-[#66D9ED]",
      delay: 1,
    },
  ];

  return (
    <div
      id="contact"
      className="flex flex-wrap lg:flex-nowrap h-auto lg:h-[90vh]"
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 py-10 h-full bg-[#0E0E0E] p-4">
        <div className="w-7/12 h-full flex flex-col m-auto">
          {/* Map through text items */}
          {textItems.map((item, index) => (
            <motion.div
              key={index}
              className={item.className}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: item.delay }}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ))}

          {/* Map through link items */}
          <div className="flex flex-col justify-end h-full">
            {linkItems.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={link.className}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: link.delay,
                }}
              >
                {link.content}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-3/5 h-full bg-[#0E0E0E] px-8 md:pr-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-2">
          {/* Left Column (Full Height) */}
          <TestimonialCard {...testimonials[0]} />

          {/* Right Section (Two Rows 50/50) */}
          <div className="flex flex-col gap-2">
            {testimonials.slice(1).map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndContact;
