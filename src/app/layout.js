export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>DESMOND Labs</title>
        <meta name="description" content="Data Ecosystem Solutions for Modernizing Organizational Network Discovery" />
      </head>
      <body>{children}</body>
    </html>
  );
}