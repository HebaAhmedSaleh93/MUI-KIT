import ThemeClient from './theme-client';
 
 export default function RootLayout(props) {
   const { children } = props;

   return (
     <html lang="en">
      <body  >
          <ThemeClient>
          {children}
           </ThemeClient>
       </body>
     </html>
   );
 }