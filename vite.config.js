<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> bcbdd9b5706d99818c7ef9d01862caa36be536b2
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
<<<<<<< HEAD
=======
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ very important for proper routing on Vercel
});
>>>>>>> 07a04b4 (fixed erorr with packagejson)
>>>>>>> bcbdd9b5706d99818c7ef9d01862caa36be536b2
