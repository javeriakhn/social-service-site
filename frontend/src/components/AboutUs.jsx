import Section from "./Section";

function AboutUs() {
  return (
    <Section title="About Us">
      <p className="mt-14 text-base md:text-4xl text-center text-black max-md:mt-10 max-md:max-w-full !leading-[30px] md:!leading-[93px]">
        We are a passionate group of interns dedicated to creating a <br />
        platform that amplifies social awareness and drives positive change.{" "}
        <br />
        Our mission is to educate, engage, and empower individuals to <br />
        understand and address pressing social issues. <br />
        <br />
        With diverse backgrounds in technology, social sciences, and <br />
        community activism, we bring a unique blend of skills and <br />
        perspectives to our project. Through our web application, <br />
        we aim to foster meaningful conversations, provide valuable <br />
        resources, and inspire action within our communities. <br />
        <br />
        Join us on this journey as we strive to raise awareness and <br />
        make a lasting impact together!
      </p>
    </Section>
  );
}

export default AboutUs;
