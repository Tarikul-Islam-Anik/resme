import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name?: string) {
  return name
    ? name
        ?.split(' ')
        .map((name: string) => name[0])
        .join('')
        .slice(0, 2)
    : '';
}

export function fallbackMessage(item: any, message?: string) {
  return item || message || 'Not data provided';
}

export function truncateString(str: string, n: number) {
  return str?.length > n ? str.slice(0, n - 1) + '...' : str;
}

const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export async function uploadImage(image: any) {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET!);
  const res = await fetch(CLOUDINARY_UPLOAD_URL, {
    method: 'POST',
    body: formData,
  });
  const file = await res.json();
  return file.secure_url as string;
}

export function getCountries(lang = 'en') {
  const countryName = new Intl.DisplayNames([lang], { type: 'region' });
  const countries: Record<string, string> = {};
  for (let i = 65; i <= 90; ++i) {
    for (let j = 65; j <= 90; ++j) {
      let code = String.fromCharCode(i) + String.fromCharCode(j);
      let name = countryName.of(code);
      if (code !== name) {
        countries[code] = name!;
      }
    }
  }
  delete countries['IL'];
  delete countries['ZZ'];
  return countries;
}
