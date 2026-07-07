import { useState } from "react";
import Layout from "../components/Layout";

const jobs = [
  // {
  //   title: "Senior Frontend Engineer",
  //   dept: "Engineering",
  //   location: "Remote",
  //   type: "Full-time",
  //   desc: "Own the frontend experience of our core product. You'll work closely with design and backend to ship features millions of developers rely on.",
  //   responsibilities: [
  //     "Lead architecture decisions for the frontend layer",
  //     "Ship features end-to-end with React and TypeScript",
  //     "Mentor junior engineers and run code reviews",
  //     "Collaborate with design to define interaction patterns",
  //   ],
  //   requirements: [
  //     "5+ years with React and TypeScript",
  //     "Strong opinions on DX and performance",
  //     "Experience with bundlers and build tooling",
  //     "Comfort working async across time zones",
  //   ],
  // },
];

const FILTERS = ["All", "Engineering", "Design", "Product", "Growth"];

const PERKS = [
  {
    name: "Remote-first culture",
    desc: "Work from anywhere. We build async-first workflows that respect your time zone.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#fff" }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: "Equity & ownership",
    desc: "Meaningful equity packages. You're building this company — you should own a piece of it.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#fff" }}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
  {
    name: "Health & wellbeing",
    desc: "Full medical, dental, and vision. Plus a wellness stipend to invest in yourself.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#fff" }}>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
      </svg>
    ),
  },
  {
    name: "Learning budget",
    desc: "$2,000/year for courses, books, conferences — whatever helps you grow.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#fff" }}>
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
      </svg>
    ),
  },
  {
    name: "Async by default",
    desc: "Deep work hours protected. Fewer meetings, more shipping.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#fff" }}>
        <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
      </svg>
    ),
  },
  {
    name: "Team retreats",
    desc: "Annual in-person gathering. Real relationships, not just Slack handles.",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#fff" }}>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
];

const s = {
  brand: "#5a0f2f",
  brandLight: "#a8204f",
  cream: "#f9f4ef",
  textDark: "#1a1a1a",
  textMid: "#4a4a4a",
  textMuted: "#888",
  border: "rgba(139,23,67,0.15)",
};

export default function CareerPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [hoveredJob, setHoveredJob] = useState(null);
  const [hoveredPerk, setHoveredPerk] = useState(null);

  const filtered =
    activeFilter === "All" ? jobs : jobs.filter((j) => j.dept === activeFilter);

  return (
    <Layout>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* HERO */}
        <div>
          <div
            style={{
              padding: "56px 48px 56px 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: s.cream,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: s.brand,
                marginBottom: 20,
              }}
            >
              Careers at ANAM
            </div>
            <div
              style={{
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.05,
                color: s.textDark,
                marginBottom: 24,
              }}
            >
              Build what <span style={{ color: s.brand }}>matters.</span>
            </div>
            <div
              style={{
                fontSize: 15,
                color: s.textMid,
                lineHeight: 1.7,
                maxWidth: 320,
              }}
            >
              We're a team of builders, designers, and thinkers who believe
              great tools change everything. Join us.
            </div>
          </div>
        </div>

        {/* SECTION LABEL */}
        <SectionLabel>Why ANAM</SectionLabel>

        {/* PERKS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: s.border,
            border: `1px solid ${s.border}`,
            marginBottom: 80,
          }}
        >
          {PERKS.map((perk, i) => (
            <div
              key={perk.name}
              onMouseEnter={() => setHoveredPerk(i)}
              onMouseLeave={() => setHoveredPerk(null)}
              style={{
                background: hoveredPerk === i ? "#fff" : s.cream,
                padding: "28px 24px",
                transition: "background 0.2s",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: s.brand,
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {perk.icon}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: s.textDark,
                  marginBottom: 8,
                }}
              >
                {perk.name}
              </div>
              <div
                style={{ fontSize: 13, color: s.textMuted, lineHeight: 1.6 }}
              >
                {perk.desc}
              </div>
            </div>
          ))}
        </div>

        {/* JOBS */}
        <SectionLabel>Open roles</SectionLabel>

        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 28,
            flexWrap: "wrap",
          }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.05em",
                padding: "7px 16px",
                background: activeFilter === f ? s.brand : "transparent",
                border: `1px solid ${activeFilter === f ? s.brand : s.border}`,
                color: activeFilter === f ? "#fff" : s.textMuted,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            background: s.border,
            border: `1px solid ${s.border}`,
          }}
        >
          {filtered.map((job, i) => (
            <div
              key={job.title}
              onMouseEnter={() => setHoveredJob(i)}
              onMouseLeave={() => setHoveredJob(null)}
              onClick={() => setSelectedJob(job)}
              style={{
                background: hoveredJob === i ? "#fff" : s.cream,
                padding: "24px 28px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: 16,
                cursor: "pointer",
                borderLeft: `3px solid ${hoveredJob === i ? s.brand : "transparent"}`,
                transition: "all 0.15s",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: s.textDark,
                    marginBottom: 8,
                  }}
                >
                  {job.title}
                </div>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  {[job.dept, job.location, job.type].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: s.textMuted,
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          background: s.brand,
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJob(job);
                }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: s.brand,
                  background: "transparent",
                  border: `1px solid ${s.brand}`,
                  padding: "10px 20px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = s.brand;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = s.brand;
                }}
              >
                View role
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div
              style={{
                padding: "40px 0",
                textAlign: "center",
                color: s.textMuted,
                fontSize: 14,
              }}
            >
              No open roles in this category. Check back later!
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      {selectedJob && (
        <div
          onClick={() => setSelectedJob(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,5,5,0.6)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: s.cream,
              maxWidth: 560,
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              borderLeft: `4px solid ${s.brand}`,
              padding: 40,
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedJob(null)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "none",
                border: "none",
                fontSize: 20,
                cursor: "pointer",
                color: s.textMuted,
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: s.brand,
                marginBottom: 12,
              }}
            >
              {selectedJob.dept}
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                fontWeight: 700,
                color: s.textDark,
                marginBottom: 20,
              }}
            >
              {selectedJob.title}
            </div>
            <div style={{ fontSize: 14, color: s.textMid, lineHeight: 1.7 }}>
              {selectedJob.desc}
            </div>

            <ModalSection label="What you'll do" />
            <ul style={{ listStyle: "none", padding: 0 }}>
              {selectedJob.responsibilities.map((r) => (
                <ModalListItem key={r}>{r}</ModalListItem>
              ))}
            </ul>

            <ModalSection label="What we're looking for" />
            <ul style={{ listStyle: "none", padding: 0 }}>
              {selectedJob.requirements.map((r) => (
                <ModalListItem key={r}>{r}</ModalListItem>
              ))}
            </ul>

            <button
              style={{
                display: "block",
                width: "100%",
                marginTop: 28,
                padding: 14,
                background: s.brand,
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
            >
              Apply for this role
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#5a0f2f",
        marginBottom: 32,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      {children}
      <span
        style={{ flex: 1, height: 1, background: "rgba(139,23,67,0.15)" }}
      />
    </div>
  );
}

function ModalSection({ label }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#5a0f2f",
        margin: "20px 0 10px",
        borderBottom: "1px solid rgba(139,23,67,0.15)",
        paddingBottom: 8,
      }}
    >
      {label}
    </div>
  );
}

function ModalListItem({ children }) {
  return (
    <li
      style={{
        fontSize: 13,
        color: "#4a4a4a",
        padding: "6px 0 6px 16px",
        position: "relative",
        lineHeight: 1.6,
      }}
    >
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 14,
          width: 5,
          height: 5,
          background: "#5a0f2f",
          display: "inline-block",
        }}
      />
      {children}
    </li>
  );
}
