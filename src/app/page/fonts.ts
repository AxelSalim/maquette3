import { DM_Sans, Inter, Lusitana, Nunito_Sans, Poppins } from "next/font/google";


export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const dm_sans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});