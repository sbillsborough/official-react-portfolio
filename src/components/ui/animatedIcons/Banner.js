// const Banner = ({ images, speed = 5000 }) => {
//   return (
//     <div className="inner">
//       <div className="wrapper">
//         <section style={{ "--speed": `${speed}ms` }}>
//           {images.map(({ id, image }) => (
//             <div className="image" key={id}>
//               <img src={image} alt={id} />
//             </div>
//           ))}
//         </section>
//         <section style={{ "--speed": `${speed}ms` }}>
//           {images.map(({ id, image }) => (
//             <div className="image" key={id}>
//               <img src={image} alt={id} />
//             </div>
//           ))}
//         </section>
//         <section style={{ "--speed": `${speed}ms` }}>
//           {images.map(({ id, image }) => (
//             <div className="image" key={id}>
//               <img src={image} alt={id} />
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export { Banner };

const Banner = ({ images, speed = 5000 }) => {
  return (
    <div className="inner">
      <div className="icons-wrapper">
        <div className="icons">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-bootstrap"></i>
          <i className="fa-brands fa-node"></i>
          <i className="fa-brands fa-npm"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <i className={image} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <i className={image} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <i className={image} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
