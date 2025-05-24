export type Testimonial = {
  id: number;
  name: string;
  img: string;
  review: string;
  instrument:
    | 'Canto'
    | 'Violin'
    | 'Batería'
    | 'Bajo'
    | 'Saxofón'
    | 'Piano'
    | 'Guitarra';
};
