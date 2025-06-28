import { z } from "zod";
export const loginSchema = z.object({
  identity: z.string().nonempty("Email atau Nomor Telepon harus diisi."),
  password: z.string().nonempty("Kata Sandi harus diisi."),
});

export const registerBuyerSchema = z.object({
  namaDepan: z.string().nonempty("Nama Depan harus diisi."),
  namaBlkg: z.string().nonempty("Nama Belakang harus diisi."),
  identity: z.string().nonempty("Email atau Nomor Telepon harus diisi."),
  pass: z.string().nonempty("Kata Sandi harus diisi."),
  pass2: z.string().nonempty("Konfirmasi Kata Sandi harus diisi."),
});
