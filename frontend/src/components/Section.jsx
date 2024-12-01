const Section = ({ children, title, id }) => {
  return (
    <section className="w-full" id={id}>
      <h2 className="m-12 text-6xl text-black max-md:text-4xl text-center">
        {title}
      </h2>
      <div className="mx-3.5">{children}</div>
    </section>
  );
};

export default Section;
