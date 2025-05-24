import { testimonialsData } from '../../data';

export const TestimonialsGrid = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-transparent grid md:grid-cols-2 space-y-5 md:space-y-0 md:space-x-4">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-dark-rich-100 p-8 border border-primary-400 space-y-5 rounded-xl w-full"
          >
            <div className="w-30 mx-auto">
              <img
                src={`/images/${testimonial.img}.jpg`}
                className="rounded-full object-cover object-center pointer-events-none"
                alt={`${testimonial.name} imagen`}
              />
            </div>
            <div className="text-center">
              <img
                src="/images/review-stars.png"
                className="w-1/3 mx-auto"
                alt="calificación imagen"
              />
              <p className="text-gray-300">{testimonial.review}</p>
            </div>
            <div className="text-center">
              <p className="text-primary font-bold">{testimonial.name}</p>
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
