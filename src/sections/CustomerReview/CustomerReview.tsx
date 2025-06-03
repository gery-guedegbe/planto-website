"use client";

import FadeInSection from "@/components/FadeInSection";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ReviewCard from "@/components/ReviewCard";
import avatar_2 from "@assets/images/avatar-2.png";
import avatar_3 from "@assets/images/avatar-3.png";
import avatar_4 from "@assets/images/avatar-4.png";

const customers = [
  { id: 1, name: "Maxn Raval", image: avatar_2 },
  { id: 2, name: "Maxn Raval", image: avatar_3 },
  { id: 3, name: "Maxn Raval", image: avatar_4 },
];

const CustomerReview = () => {
  return (
    <section className="w-full py-10 lg:py-16">
      {/* Section title */}
      <FadeInWhenVisible direction="up">
        <div className="mb-16 text-center">
          <h2 className="relative inline-block text-2xl font-semibold text-white after:mx-auto after:mt-2 after:block after:h-[4px] after:w-[50%] after:rounded-full after:bg-green-500 after:content-[''] sm:text-3xl lg:text-4xl">
            Customer Review
          </h2>
        </div>
      </FadeInWhenVisible>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {customers.map((card, index) => (
          <FadeInSection key={card.id} delay={index * 0.2}>
            <ReviewCard name={card.name} image={card.image} />
          </FadeInSection>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
