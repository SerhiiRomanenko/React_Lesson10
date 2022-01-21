import React, { useState } from "react";
import "./NewsPage.scss";
import { makeNews } from "../../utils/myData";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Footer } from "../../components/Footer/Footer";

export function NewsPage() {
  const [data, setData] = useState(makeNews(15));
  const [searchText, setSearchText] = useState("");
  const [searchAuthor, setSearchAuthor] = useState(null);
  const [searchTags, setSearchTags] = useState([]);

  const newsToRender = data.filter((item) => {
    const foundHashTags = item.hashTags.some((i) => searchTags.indexOf(i) >= 0);

    if (searchText === "" && searchAuthor === null && searchTags.length === 0)
      return true;
    else if (
      searchText === "" &&
      item.author !== searchAuthor &&
      foundHashTags === false
    )
      return false;
    else if (
      item.title.toUpperCase().indexOf(searchText.toUpperCase()) < 0 &&
      item.text.toUpperCase().indexOf(searchText.toUpperCase()) < 0 &&
      item.description.toUpperCase().indexOf(searchText.toUpperCase()) < 0 &&
      item.author !== searchAuthor &&
      foundHashTags === false
    )
      return false;
    else if (
      searchText === "" &&
      searchAuthor === null &&
      searchTags.length === 0
    )
      return true;

    return true;
  });

  //-----------------------------------------------------METHODS---------------------------------------------//

  const delNews = (id) => {
    const newData = data.filter((item) => {
      return item.id !== id;
    });
    return setData(newData);
  };

  // TODO:  Memoization and useEffect

  //------------------------------------------------------RETURN-------------------------------------------//

  return (
    <>
      <Header
        setSearchText={setSearchText}
        setSearchAuthor={setSearchAuthor}
        setSearchTags={setSearchTags}
      />
      {newsToRender.length === 0 ? (
        <p>Empty</p>
      ) : (
        <Main newsToRender={newsToRender} delNews={delNews} />
      )}
      <Footer />
    </>
  );
}
