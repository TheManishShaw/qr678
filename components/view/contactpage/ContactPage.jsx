import React from 'react'
import ContactForm from './components/ContactForm'
import { WorldMap } from './components/word-map'
import ProductSection from '../homepage/components/ProductSection'
import { Stats } from './components/stats'

const ContactPage = () => {
  return (
    <main className="flex-1">
    <section className="container px-4 py-12 md:py-16">
      <h1 className="text-center text-4xl font-bold text-[#2A2B7B] md:text-5xl">
        We&apos;d love to Hear From You
      </h1>
      <p className="mt-4 text-center text-xl text-[#C1994D]">
        QR678 is present around the world.
      </p>
      <div className="mt-12">
        <WorldMap />
      </div>
      <Stats />
      <ProductSection />
      <ContactForm />
    </section>
  </main>

  )
}

export default ContactPage