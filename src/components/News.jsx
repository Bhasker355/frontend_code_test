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
              <div className="card-container-div">
                <h4 className="card-container-h4">
                  {data.primarySectionRouteName}
                </h4>
                <h1 className="card-container-h1">{data.headline}</h1>
                <h3 className="card-container-h3">{data.standfirst}</h3>
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
