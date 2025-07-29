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
cd ~/Desktop/rallyloop-launch-pack/rallyloop-app
git add app/layout.jsx
git commit -m "Add root layout file to fix Next.js error"
git push


