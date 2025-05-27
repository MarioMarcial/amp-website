import { testimonialsData } from '../../data';

export const TestimonialsGrid = () => {
  return (
    <>
      <div className="space-y-5 grid md:grid-cols-3 md:justify-center md:space-y-0 md:gap-x-4 xl:gap-x-6">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-dark p-8 border border-gray-800 space-y-5 rounded-xl w-full"
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
