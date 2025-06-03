type Instrument =
  | 'Canto'
  | 'Violin'
  | 'Batería'
  | 'Bajo'
  | 'Saxofón'
  | 'Piano'
  | 'Guitarra';

export interface Testimonial {
  id: number;
  name: string;
  img: string;
  review: string;
  instrument: Instrument;
}
