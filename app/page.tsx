import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
      <div>Next.js on GitHub Pages</div>
      <p>{frontmatter.title}</p>
      <ul>
        {frontmatter.cats.map((cat: Cat, index: number) => (
          <li key={index}>
            <b>{cat.name}</b> - {cat.description}
          </li>
        ))}
      </ul>
    </main>
  );
}
