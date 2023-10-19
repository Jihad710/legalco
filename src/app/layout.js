import './globals.css';
import { AuthProvider } from '@/Providers/AuthProvider';
import { poppins } from '@/Utils/Font';
import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';
import Messenger from '@/Home/Messenger';
import { Toaster } from 'react-hot-toast';

export const metadata = {
	title: 'LegalCO',
	description: 'Have no fear legalco is here'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<AuthProvider>
				<body className={`${poppins.className} bg-[#fbf8f2]`}>
					<Navbar></Navbar>
					<main className="min-h-[100vh]">{children}</main>
					<Messenger />
					<Footer></Footer>
					<Toaster position="top-center" />
				</body>
			</AuthProvider>
		</html>
	);
}
