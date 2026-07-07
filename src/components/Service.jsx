import Layout from "./Layout";
import landscape_cover from "../assets/images/landscaping/LANDSCAPE FLOORING SERVICE cover .jpg";
import landscape_1 from "../assets/images/landscaping/LANDSCAPE FLOORING SERVICE p1.jpg";
import landscape_2 from "../assets/images/landscaping/LANDSCAPE FLOORING SERVICE p2.jpg";
import landscape_3 from "../assets/images/landscaping/LANDSCAPE FLOORING SERVICE p3.jpg";

export default function ServicesPage() {
  const categories = [
    {
      title: "Name",
      image: landscape_1,
    },
    {
      title: "Name",
      image: landscape_2,
    },
    {
      title: "Name",
      image: landscape_3,
    },
  ];

  return (
    <Layout>
      <section className="w-full">
        {/* HERO */}
        <div className="relative h-[65vh] w-full overflow-hidden">
          <img
            src={landscape_cover}
            alt="Landscape Flooring"
            className="w-full h-full object-cover bg-bottom"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#8B1743]/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Landscape Design & Developement
            </h1>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-[#f5f2ef] py-16 px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Product Categories
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group cursor-pointer p-4"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
