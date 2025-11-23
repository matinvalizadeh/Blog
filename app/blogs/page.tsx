import React from "react";
import Container from "../components/Container";
import Article from "../components/Article";

export interface IGetArticles {
  id?: number;
  title: string;
  description: string;
}

async function Blogs() {
  const result = await fetch("http://localhost:3001/articles");
  const data = await result.json() as IGetArticles[];

  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-16">
        {
          data.map(item => (
            <Article {...item} key={item.id}/>
          ))
        }

      </div>
    </Container>
  );
}

export default Blogs;
