import landscapeCover from "../assets/images/landscaping/LANDSCAPE FLOORING SERVICE cover .jpg";
import gypsumPartition from "../assets/images/partition/Gypsum Partitions.jpg";
import industrialFlooring from "../assets/images/floooring/Industrial_Epoxy Flooring  .jpg";
import kitchenWardrobeCover from "../assets/images/kitchen & wardrob/kitchen & wardrobe cover.jpg";
import wpcOutdoorPanels from "../assets/images/wall panels/WPC Outdoor  Panels.jpg";

/** Matches navigation slug logic in the header. */
export function serviceItemToSlug(item) {
  return item
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const serviceMegaMenuItems = [
  {
    heading: "General Contracting",
    items: [
      "Turnkey Construction",
      "Renovation & Fit-out",
      "Civil & MEP Works",
      "Acoustic Solutions",
      "Landscape Design & Development",
    ],
  },
  {
    heading: "Interior & Exterior Solutions",
    items: ["Interior & Exterior Solutions"],
  },
];

/**
 * Full-page content keyed by the same slug used in `/services/:slug` links.
 */
export const serviceDetails = [
  {
    slug: serviceItemToSlug("Turnkey Construction"),
    name: "Turnkey Construction",
    tagline:
      "Design-to-delivery project delivery with one accountable team and a clear programme.",
    image: industrialFlooring,
    paragraphs: [
      "Turnkey construction brings architecture, procurement, site execution, and handover under a single contract so you avoid fragmented responsibilities and costly rework. We coordinate consultants, subcontractors, and inspections while keeping quality, safety, and budget aligned with your brief.",
      "From shell-and-core through final finishes, we manage logistics, method statements, and progress reporting so stakeholders always know where the project stands. Whether it is a new build or a major expansion, we focus on predictable milestones and a clean, documented closeout.",
    ],
  },
  {
    slug: serviceItemToSlug("Renovation & Fit-out"),
    name: "Renovation & Fit-out",
    tagline:
      "Refresh existing spaces or fit out new shells with minimal disruption to operations.",
    image: kitchenWardrobeCover,
    paragraphs: [
      "Renovation and fit-out work demands careful phasing, dust control, and coordination with live buildings. We plan shutdowns, temporary routes, and noise-sensitive sequences so day-to-day activity can continue wherever possible.",
      "Our team aligns MEP adjustments, ceiling and partition modifications, flooring, joinery, and final styling with your brand standards. We protect adjacent finishes, document as-built conditions, and deliver a space that is ready for occupation—not a punch list of surprises.",
    ],
  },
  {
    slug: serviceItemToSlug("Civil & MEP Works"),
    name: "Civil & MEP Works",
    tagline:
      "Structural, utility, and building-services scope executed to code and commissioning-ready standards.",
    image: industrialFlooring,
    paragraphs: [
      "Civil works cover foundations, slabs, blockwork, screeds, and infrastructure tie-ins required before interior trades can start. We sequence weather-sensitive tasks, curing times, and inspections so downstream fit-out teams are not blocked.",
      "MEP scope includes power distribution, lighting, HVAC, drainage, fire services, and low-current systems where applicable. We coordinate shop drawings, ceiling voids, and equipment set-out early to prevent clashes and keep commissioning and testing on track for handover.",
    ],
  },
  {
    slug: serviceItemToSlug("Acoustic Solutions"),
    name: "Acoustic Solutions",
    tagline:
      "Control noise transfer and reverberation for offices, hospitality, education, and residential settings.",
    image: gypsumPartition,
    paragraphs: [
      "Acoustic performance depends on wall and ceiling assemblies, seals, door sets, and the right absorption in each room. We translate acoustic targets into buildable specifications and verify critical details on site—especially slab penetrations, partitions, and glazing interfaces.",
      "Whether you need privacy between meeting rooms, a quieter open office, or controlled reverberation in public areas, we combine insulation, mass, isolation, and surface treatments to meet ratings without compromising aesthetics or usable floor area.",
    ],
  },
  {
    slug: serviceItemToSlug("Landscape Design & Development"),
    name: "Landscape Design & Development",
    tagline:
      "Outdoor spaces that complement the architecture and stay maintainable across seasons.",
    image: landscapeCover,
    paragraphs: [
      "Landscape design starts with circulation, shade, drainage, and how people will use the space year-round. We develop planting palettes and hardscape materials suited to the climate and irrigation strategy, balancing visual impact with water efficiency and long-term upkeep.",
      "Our development phase covers grading, sub-base, paving, planters, lighting, and irrigation installation with attention to interfaces with the building and civil works. The result is a cohesive exterior that reads as part of the same project story as the interior.",
    ],
  },
  {
    slug: serviceItemToSlug("Interior & Exterior Solutions"),
    name: "Interior & Exterior Solutions",
    tagline:
      "Facades, envelopes, and interior layers specified and installed as one coherent design language.",
    image: wpcOutdoorPanels,
    paragraphs: [
      "Interior and exterior solutions span cladding, rain-screen logic, windows and doors, sun shading, and interior wall and ceiling systems. Coordinating these packages early avoids mismatched profiles, thermal bridges, and warranty gaps between trades.",
      "We align finishes, expansion joints, and weathertightness details with the architect’s intent while keeping buildability and maintenance access in mind. From lobby to podium and podium to skyline, the goal is a consistent material story and robust performance in service.",
    ],
  },
];

export function getServiceBySlug(slug) {
  return serviceDetails.find((s) => s.slug === slug);
}
