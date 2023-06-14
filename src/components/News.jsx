import "./News.css";
import articles from "../json/Codetest.json";

const News = () => {
  const articlesData = articles.articles;

  return (
    <>
      <div>
        {articlesData.map((data, i) => (
          <div key={i}>
            <div className="card-container">
              <div style={{ width: "60%" }}>
                <h4 style={{ color: "#0059bf" }}>
                  {data.primarySectionRouteName}
                </h4>
                <h1 style={{ color: "#000000" }}>{data.headline}</h1>
                <h3 style={{ color: "#606669" }}>{data.standfirst}</h3>
              </div>
              <div>
                <img className="card-img" src={data.thumbnail.src} />
              </div>
            </div>
            <div className="border-bottom"> </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
