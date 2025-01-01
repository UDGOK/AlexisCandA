import './globals.css'
import { Navigation } from '@/components/navigation'
import { CustomCursor } from '@/components/custom-cursor'
import { PageTransition } from '@/components/page-transition'
import { Footer } from '@/components/footer'
import { AnnouncementBanner } from '@/components/announcement-banner'
import { aeonik } from './fonts'

export const metadata = {
  title: 'Alexis Concrete and Asphalt',
  description: 'Professional concrete and asphalt services for commercial and residential projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${aeonik.variable}`}>
      <body className="bg-gradient-to-b from-black via-purple-950/20 to-black min-h-screen text-white antialiased font-aeonik">
        <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none" />
        <AnnouncementBanner />
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  )
}

