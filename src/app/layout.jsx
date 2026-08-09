import './globals.css';

export const metadata = {
  title: 'Salman Ibney Rahman | Full-Stack Web Developer & ML Engineer',
  description: 'Portfolio of Salman Ibney Rahman — Full-Stack Web Developer & Machine Learning Engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#07080a] text-zinc-100 antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}