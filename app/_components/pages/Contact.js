import Link from "next/link";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen space-y-24 px-4 xl:px-16 py-24 text-text-secondary"
    >
      <div className="text-center space-y-8 w-fit mx-auto">
        <h2
          className="text-4xl md:text-6xl font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Start Your Fitness Journey With Us
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg">
          Have a question? Want to book a class? Use the form below - or reach
          out via social, phone, or in person.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto text-text-secondary">
        <form className="space-y-6 bg-bg-secondary p-6 rounded-xl shadow-md">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="px-4 py-3 bg-bg-primary border border-border focus:outline-accent rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="px-4 py-3 bg-bg-primary border border-border focus:outline-accent rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="px-4 py-3 bg-bg-primary border border-border focus:outline-accent rounded-xl"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-text-primary font-semibold px-6 py-4 transition cursor-pointer rounded-xl"
          >
            Send Message
          </button>
        </form>

        <div className="bg-bg-secondary p-6 rounded-xl shadow-md space-y-6 text-center flex flex-col justify-center">
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Prefer to Talk?
          </h3>
          <p className="text-base">
            📍 123 Yoga Street, San Diego, CA
            <br />
            📞{" "}
            <a href="tel:+11234567890" className="underline">
              +1 (123) 456-7890
            </a>
          </p>
          <div className="flex justify-center gap-6 text-xl">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              Facebook
            </a>
          </div>
          <Link
            href="/contact"
            className="px-6 py-4 text-lg bg-accent rounded-md text-text-primary font-semibold hover:bg-accent-hover transition"
          >
            Schedule A Class
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
