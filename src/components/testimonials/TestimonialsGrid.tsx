import { testimonialsData } from '../../data';
import { ImQuotesRight } from 'react-icons/im';

export const TestimonialsGrid = () => {
  return (
    <>
      <div className="grid gap-5 md:justify-center lg:grid-cols-3">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full h-full p-8 space-y-6 rounded-xl bg-gray-dark border border-gray-800 lg:flex lg:flex-col lg:justify-between lg:space-y-3"
          >
            {/* Header */}
            <div className="flex justify-start items-center gap-4 lg:flex-col">
              <div className="lg:space-y-2">
                <img
                  src={`${import.meta.env.BASE_URL}images/${testimonial.img}`}
                  className="rounded-full object-cover object-center pointer-events-none w-15 lg:w-20 lg:mx-auto"
                  alt={`${testimonial.name} imagen`}
                  loading="lazy"
                />
                <img
                  className="hidden w-25 grayscale-100 brightness-150 lg:mx-auto lg:block"
                  src={`${import.meta.env.BASE_URL}images/estrellas.png`}
                  alt="calificación imagen"
                  loading="lazy"
                />
              </div>
              <div className="lg:hidden">
                <p className="font-semibold text-primary/90">
                  {testimonial.name}
                </p>
                <p className="text-gray-400">
                  Estudiante de {testimonial.instrument}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="relative space-y-2">
              <div className="w-25 grayscale-100 brightness-150 lg:mx-auto lg:hidden">
                <img
                  className="lg:hidden"
                  src={`${import.meta.env.BASE_URL}images/estrellas.png`}
                  alt="calificación imagen"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-300 lg:text-center">
                {testimonial.review}
              </p>
              <ImQuotesRight className="w-10 h-10 ml-auto absolute -bottom-7 -right-3 fill-primary/8 lg:hidden" />
            </div>

            {/* Footer */}
            <div className="hidden lg:block lg:text-center">
              <p className="font-semibold text-primary/90">
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
