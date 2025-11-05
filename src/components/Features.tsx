import { Check } from "lucide-react";

const features = [
  "Em breve...",
];

const Features = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-accent text-center mb-12">
          O QUE TODOS OS INGRESSOS INCLUEM?
        </h2>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-3 md:gap-4 bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-xl">
              <span className="text-white text-2xl md:text-3xl font-bold">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
