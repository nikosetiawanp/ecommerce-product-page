import fs from "fs";
import path from "path";
import matter from "gray-matter";
import QuantityAddToCart from "@/components/QuantityAddToCart";
import ProductImage from "@/components/ProductImage";

type Cat = {
  name: string;
  description: string;
};

const filePath = path.join(process.cwd(), "contents/home.md");
const fileContent = fs.readFileSync(filePath, "utf8");
const { data: frontmatter, content } = matter(fileContent);

export default function Home() {
  return (
    <main>
      {/* <h1 className="text-grey-500">{frontmatter.title}</h1>
      <ul>
        {frontmatter.cats.map((cat: Cat, index: number) => (
          <li key={index}>
            <b>{cat.name}</b> - {cat.description}
          </li>
        ))}
      </ul> */}

      <section className="flex flex-col lg:flex-row items-center lg:items-center lg:gap-32 w-full md:max-w-[605px] lg:max-w-[1020px] md:py-12 lg:py-0">
        {/* Product Image */}
        <ProductImage />
        {/* Product details  */}
        <div className="flex flex-col gap-8 p-6 md:px-0 lg:h-full lg:justify-center">
          {/* Product info  */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h6 className="text-grey-500">SNEAKER COMPANY</h6>
            <h2 className="text-grey-950 md:text-[44px] md:leading-[48px]">
              Fall Limited Edition Sneakers
            </h2>
            <p className="text-grey-500 md:text-[16px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>

          {/* Product price  */}
          <div className="flex justify-between items-center md:flex-col md:items-start">
            <div className="flex gap-4">
              <data className="text-preset-2 text-grey-950" value="125">
                $125.00
              </data>
              <span className="h-fit flex items-center text-preset-3 font-bold text-white bg-grey-950 px-2 rounded-md">
                50%
              </span>
            </div>

            <data
              className="text-preset-3 font-bold text-grey-500 line-through"
              value="250"
            >
              $250.00
            </data>
          </div>

          <QuantityAddToCart />
        </div>
      </section>
    </main>
  );
}
