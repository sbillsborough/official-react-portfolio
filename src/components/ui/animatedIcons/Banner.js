const Banner = ({ images, speed = 5000 }) => {
  return (
    <div className="wrapper">
      <section style={{ "--speed": `${speed}ms` }}>
        {images.map(({ id, image }) => (
          <div className="image" key={id}>
            <i className={image} />
          </div>
        ))}
      </section>
    </div>
  );
};

export { Banner };
