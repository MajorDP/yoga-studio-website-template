import Link from "next/link";

function Schedule() {
  const schedule = [
    {
      day: "Monday",
      sessions: [
        "8:00 AM - Hot Yoga",
        "12:00 PM - Power Yoga",
        "6:00 PM - Vinyasa Yoga",
      ],
    },
    {
      day: "Wednesday",
      sessions: [
        "7:00 AM - Power Yoga",
        "1:00 PM - Vinyasa Yoga",
        "7:30 PM - Hot Yoga",
      ],
    },
    {
      day: "Saturday",
      sessions: [
        "9:00 AM - Vinyasa Yoga",
        "11:00 AM - Hot Yoga",
        "4:00 PM - Power Yoga",
      ],
    },
  ];
  return (
    <section
      id="schedule"
      className="min-h-screen space-y-24 px-4 md:px-16 py-24 text-text-secondary"
    >
      <div className="text-center space-y-8 w-fit mx-auto">
        <h2
          className="text-4xl md:text-6xl text-text-secondary font-semibold max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Weekly Yoga Class Schedule
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg">
          Find a class that fits your routine. Browse our weekly sessions taught
          by certified instructors across all skill levels.
        </p>
        <Link
          href="/#contact"
          className="px-6 py-4 text-text-primary font-semibold text-lg bg-accent rounded-md hover:bg-accent-hover transition"
        >
          Reserve Your Spot
        </Link>
      </div>

      <article className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {schedule.map((slot) => (
          <div
            className="flex flex-col items-center gap-4 h-full bg-bg-secondary p-6 rounded-xl shadow hover:scale-105 transition"
            key={slot.day}
          >
            <div className="flex flex-col gap-4 text-center w-full">
              <h3
                className="text-2xl font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {slot.day}
              </h3>
              <ul className="space-y-2 text-sm md:text-base italic">
                {slot.sessions.map((session) => (
                  <li key={session} className="text-text-secondary">
                    {session}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className="mt-auto w-fit mx-auto px-4 py-2 text-text-primary font-semibold bg-accent rounded-md hover:bg-accent-hover transition"
            >
              Book a Class
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Schedule;
