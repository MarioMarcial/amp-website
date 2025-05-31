import { testimonialsData } from '../../data';

export const TestimonialsGrid = () => {
  return (
    <>
      <div className="grid space-y-5 md:grid-cols-3 md:gap-x-4 md:justify-center md:space-y-0 xl:gap-x-6">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full p-8 space-y-5 rounded-xl bg-gray-dark border border-gray-800"
          >
            <div className="w-26 xl:w-30 mx-auto">
              <img
                src={`${import.meta.env.BASE_URL}images/${testimonial.img}`}
                className="rounded-full object-cover object-center pointer-events-none"
                alt={`${testimonial.name} imagen`}
              />
            </div>
            <div className="text-center">
              <img
                src={`${import.meta.env.BASE_URL}images/estrellas.png`}
                className="w-1/3 mx-auto"
                alt="calificación imagen"
              />
              <p className="text-gray-300">{testimonial.review}</p>
            </div>
            <div className="text-center">
              <p className="text-primary/90 font-semibold">
                {testimonial.name}
              </p>
              <p className="text-gray-400">
                Estudiante de {testimonial.instrument}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
