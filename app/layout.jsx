export const metadata = {
  title: 'RallyLoop',
  description: 'Your unified pickleball & tennis dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
