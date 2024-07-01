import React from 'react';
import { Link as Scroll } from 'react-scroll';

const Hero = () => {
  const sectionStyle = {
    backgroundImage: `url(/imgs/messaging-illustration.jpg)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <section className="grid h-screen w-full grid-cols-2 items-center justify-center bg-white text-violet-600">
      <div className="p-12">
        <h1 className="mb-8 text-4xl font-bold">Welcome to Metered Messages</h1>
        <p className="mb-12 text-lg text-gray-600">
          Metered Messages offers you a flexible and scalable solution for
          managing message quotas and usage. Whether you're a small business or
          a large enterprise, our platform ensures that you have full control
          over your messaging needs. Choose a plan that fits your requirements
          and start messaging with confidence today!
        </p>
        <Scroll
          to="subscriptions"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer scroll-smooth rounded bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700"
        >
          Checkout Plans
        </Scroll>
      </div>
      <div
        style={sectionStyle}
        className="flex h-full w-full items-center justify-center p-10"
      ></div>
    </section>
  );
};

export default Hero;
