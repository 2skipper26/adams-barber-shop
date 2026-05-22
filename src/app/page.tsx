import type { FC } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    name: "Haircut",
    price: "$25",
    description:
      "Precision cut tailored to your style — fade, taper, classic, or modern.",
    icon: "✂️",
  },
  {
    name: "Beard Trim",
    price: "$20",
    description:
      "Sharp lines, clean edges. Keep your beard looking its best.",
    icon: "🪒",
  },
  {
    name: "Straight Razor Shave",
    price: "$35",
    description:
      "The full classic experience — hot towel, straight razor, close finish.",
    icon: "💈",
  },
  {
    name: "Kids Cut",
    price: "$18",
    description:
      "Patient, friendly cuts for kids of all ages. A fun first barber experience.",
    icon: "⭐",
  },
];

const REVIEWS = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Adam's is the real deal. Been coming here for years and the quality never drops. Best fade in University Heights, no question.",
    date: "March 2024",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Brought my son in for his first real haircut. The barber was incredibly patient and made him feel comfortable the whole time. Will definitely be back.",
    date: "January 2024",
  },
  {
    name: "James K.",
    rating: 4,
    text: "Solid neighborhood barber shop. The straight razor shave is worth every penny — hot towel treatment and all. Good conversation too.",
    date: "February 2024",
  },
];

const HOURS = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "8:00 AM – 4:30 PM" },
  { day: "Wednesday", hours: "8:00 AM – 4:30 PM" },
  { day: "Thursday", hours: "8:00 AM – 4:30 PM" },
  { day: "Friday", hours: "8:00 AM – 4:30 PM" },
  { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const StarRating: FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "text-yellow-400" : "text-gray-600"}>
        ★
      </span>
    ))}
  </div>
);

const BarberDivider: FC = () => (
  <div className="w-full h-2 barber-divider opacity-70" aria-hidden="true" />
);

// ─── Sections ────────────────────────────────────────────────────────────────

const Hero: FC = () => (
  <section
    id="hero"
    className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-[#0a0f1e] via-[#0d1530] to-[#0a0f1e] overflow-hidden"
  >
    {/* Background decorative stripes */}
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, #dc2626 0, #dc2626 2px, transparent 0, transparent 50%)",
        backgroundSize: "30px 30px",
      }}
      aria-hidden="true"
    />

    <div className="relative z-10 max-w-3xl">
      <div className="text-6xl mb-6" aria-hidden="true">
        💈
      </div>

      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
        <span className="text-white">Adam&apos;s</span>
        <br />
        <span className="text-red-500">Barber Shop</span>
      </h1>

      <p className="text-xl sm:text-2xl text-gray-300 font-light mb-2 tracking-widest uppercase">
        Classic Cuts. Clean Shaves.
      </p>

      <p className="text-gray-400 mb-10 text-lg">
        University Heights, Ohio · Est. in the community
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+12163218100"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-sm text-lg transition-colors duration-200 tracking-wide"
        >
          📞 Call Now — (216) 321-8100
        </a>
        <a
          href="#hours"
          className="border border-white/30 hover:border-white/70 text-white font-semibold px-8 py-4 rounded-sm text-lg transition-colors duration-200 tracking-wide"
        >
          View Hours
        </a>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 text-gray-400">
        <StarRating count={5} />
        <span className="text-sm">4.6 stars · 119 Google Reviews</span>
      </div>
    </div>

    {/* Scroll cue */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce text-2xl">
      ↓
    </div>
  </section>
);

const Services: FC = () => (
  <section id="services" className="py-20 px-6 bg-[#0d1530]">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">
        Our Services
      </h2>
      <p className="text-center text-gray-400 mb-14 text-lg">
        Professional cuts and grooming — done right, every time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="bg-[#111d42] border border-white/10 hover:border-red-600/50 rounded-sm p-6 flex flex-col gap-3 transition-colors duration-200 group"
          >
            <div className="text-4xl">{service.icon}</div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                {service.name}
              </h3>
              <span className="text-red-500 font-bold text-lg">
                {service.price}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        * Prices starting at. Walk-ins welcome — call ahead for availability.
      </p>
    </div>
  </section>
);

const About: FC = () => (
  <section id="about" className="py-20 px-6 bg-[#0a0f1e]">
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            About the Shop
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Adam&apos;s Barber Shop has been a trusted staple of the{" "}
              <span className="text-white font-semibold">
                University Heights community
              </span>
              . We&apos;re the kind of place where regulars are greeted by name
              and first-timers leave feeling like one of them.
            </p>
            <p>
              We specialize in precision haircuts, sharp beard trims, and the
              time-honored art of the{" "}
              <span className="text-white font-semibold">
                straight razor shave
              </span>{" "}
              — a real hot-towel experience that most places don&apos;t do
              anymore. We&apos;re also great with kids, making their first
              barber visits easy and fun.
            </p>
            <p>
              Our professional, friendly staff bring skill and care to every
              chair. No rush, no shortcuts — just consistently great work at a
              fair price.
            </p>
          </div>
        </div>

        {/* Stats / badges */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "4.6★", label: "Google Rating" },
            { value: "119", label: "Customer Reviews" },
            { value: "5 Days", label: "Open Per Week" },
            { value: "4 Services", label: "We Offer" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111d42] border border-white/10 rounded-sm p-6 text-center"
            >
              <div className="text-3xl font-bold text-red-500 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Reviews: FC = () => (
  <section id="reviews" className="py-20 px-6 bg-[#0d1530]">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-3 text-white">
        What Customers Say
      </h2>
      <div className="flex items-center justify-center gap-2 mb-14">
        <StarRating count={5} />
        <span className="text-gray-400">4.6 · 119 reviews on Google</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <div
            key={review.name}
            className="bg-[#111d42] border border-white/10 rounded-sm p-6 flex flex-col gap-4"
          >
            <StarRating count={review.rating} />
            <p className="text-gray-300 leading-relaxed italic text-sm flex-1">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="border-t border-white/10 pt-4 flex justify-between items-center">
              <span className="text-white font-semibold text-sm">
                {review.name}
              </span>
              <span className="text-gray-500 text-xs">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HoursAndLocation: FC = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="hours" className="py-20 px-6 bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-white">
          Hours &amp; Location
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Hours table */}
          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-5 uppercase tracking-widest text-sm">
              Business Hours
            </h3>
            <table className="w-full">
              <tbody>
                {HOURS.map(({ day, hours }) => {
                  const isToday = day === today;
                  return (
                    <tr
                      key={day}
                      className={`border-b border-white/10 ${
                        isToday ? "text-white" : "text-gray-400"
                      }`}
                    >
                      <td className="py-3 font-medium flex items-center gap-2">
                        {isToday && (
                          <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
                        )}
                        {day}
                      </td>
                      <td
                        className={`py-3 text-right ${
                          hours === "Closed"
                            ? "text-red-500"
                            : isToday
                            ? "text-green-400"
                            : ""
                        }`}
                      >
                        {hours}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="mt-6 p-4 bg-[#111d42] border border-white/10 rounded-sm">
              <p className="text-gray-300 text-sm">
                <span className="text-white font-semibold">📞 Phone: </span>
                <a
                  href="tel:+12163218100"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  (216) 321-8100
                </a>
              </p>
              <p className="text-gray-300 text-sm mt-2">
                <span className="text-white font-semibold">📍 Address: </span>
                2245 Warrensville Center Rd, University Heights, OH 44118
              </p>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-sm overflow-hidden border border-white/10 min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.5!2d-81.5348!3d41.4912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830f7e5b5c5b5c5%3A0x1234567890abcdef!2s2245%20Warrensville%20Center%20Rd%2C%20University%20Heights%2C%20OH%2044118!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ minHeight: "320px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adam's Barber Shop location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: FC = () => (
  <footer className="bg-[#060b18] border-t border-white/10 py-10 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <span className="text-2xl">💈</span>
            <span className="text-white font-bold text-xl">
              Adam&apos;s Barber Shop
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Classic Cuts. Clean Shaves.
          </p>
        </div>

        <div className="text-center md:text-right text-sm text-gray-400 space-y-1">
          <p>
            <a
              href="tel:+12163218100"
              className="hover:text-white transition-colors"
            >
              (216) 321-8100
            </a>
          </p>
          <p>2245 Warrensville Center Rd</p>
          <p>University Heights, OH 44118</p>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} Adam&apos;s Barber Shop. All rights
        reserved.
      </div>
    </div>
  </footer>
);

// ─── Nav ─────────────────────────────────────────────────────────────────────

const Nav: FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060b18]/90 backdrop-blur-sm border-b border-white/10">
    <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
      <a href="#hero" className="flex items-center gap-2 text-white font-bold">
        <span>💈</span>
        <span className="hidden sm:inline">Adam&apos;s Barber Shop</span>
      </a>
      <div className="flex items-center gap-5 text-sm text-gray-400">
        {[
          ["#services", "Services"],
          ["#about", "About"],
          ["#reviews", "Reviews"],
          ["#hours", "Hours"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="hover:text-white transition-colors hidden sm:inline"
          >
            {label}
          </a>
        ))}
        <a
          href="tel:+12163218100"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-sm text-sm font-semibold transition-colors"
        >
          Call Now
        </a>
      </div>
    </div>
  </nav>
);

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BarberDivider />
        <Services />
        <BarberDivider />
        <About />
        <BarberDivider />
        <Reviews />
        <BarberDivider />
        <HoursAndLocation />
      </main>
      <Footer />
    </>
  );
}
