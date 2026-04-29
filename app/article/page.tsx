import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "RECIPES",
    title: "Quick Snack Ideas for Kids",
    date: "Feb 02, 2026",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&q=80",
  },
  {
    id: 2,
    category: "FOOD NEWS",
    title: "Guide to Buying Fresh Produce",
    date: "Jan 07, 2026",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  },
  {
    id: 3,
    category: "COOKING TIPS",
    title: "How to Store Food Properly",
    date: "Jan 06, 2026",
    image:
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&q=80",
  },
  {
    id: 4,
    category: "COOKING TIPS",
    title: "The Benefits of Organic Foods",
    date: "Dec 17, 2025",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
  },
];

export function LatestArticles() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-6 ">
  
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">
          Latest Articles
        </h2>
        <button className="flex items-center gap-1 text-sm font-semibold text-red-600 hover:underline">
          View all <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 ">
        {articles.map((article) => (
          <Card
            key={article.id}
            className=" group overflow-hidden pt-0 gap-0 cursor-pointer border-0 shadow-sm  hover:shadow-md transition-all duration-200"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-video object-cover"
            />
            <CardHeader className="px-3.5 pt-3 pb-4 gap-1.5">
              <span className="text-[10px] font-bold tracking-widest uppercase text-red-600">
                {article.category}
              </span>
              <CardTitle
                className="text-sm font-semibold leading-snug text-gray-900 
                           line-clamp-2 group-hover:text-red-600 transition-colors duration-200"
              >
                {article.title}
              </CardTitle>
              <p className="text-xs text-gray-400 font-medium">
                {article.date}
              </p>
              <div className="w-8 h-0.5  rounded-full mt-1" />
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
