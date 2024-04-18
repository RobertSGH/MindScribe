import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { navigationData } from '@/components/Footer/Content';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <Navbar />
      {children}
      <Footer companyName='MindScribe' navigation={navigationData} />
    </main>
  );
}
