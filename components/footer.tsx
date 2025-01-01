'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  products: [
    { name: 'Residential', href: '/residential' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Industrial', href: '/industrial' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ],
  resources: [
    { name: 'Support', href: '/support' },
    { name: 'Media Kit', href: '/media-kit' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Newsletter', href: '/newsletter' },
  ],
}

export function Footer() {
  return (
    <footer className="w-full py-24 bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-6 gap-y-12">
          <div>
            <h3 className="text-xs font-extralight text-white/30 uppercase tracking-wide mb-3">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-[14px] font-extralight text-white/70 transition-opacity duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extralight text-white/30 uppercase tracking-wide mb-3">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-[14px] font-extralight text-white/70 transition-opacity duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-extralight text-white/30 uppercase tracking-wide mb-3">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <motion.div
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-[14px] font-extralight text-white/70 transition-opacity duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-full md:col-span-1">
            <h3 className="text-xs font-extralight text-white/30 uppercase tracking-wide mb-3">
              Newsletter
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white/5 px-3 py-2 text-[14px] font-extralight text-white/70 placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 rounded"
              />
              <motion.button
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 text-[14px] font-extralight bg-white text-black rounded"
              >
                Subscribe
              </motion.button>
            </form>
            <p className="mt-3 text-xs font-extralight text-white/30">
              Get updates on new projects and announcements.
            </p>
          </div>

          <div className="col-span-full border-t border-white/[0.08] pt-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs font-extralight text-white/30">
                © 2024 Alexis Concrete and Asphalt. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <motion.div
                    key={social}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href="#"
                      className="text-[14px] font-extralight text-white/70 transition-opacity duration-200"
                    >
                      {social}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

