import "../css/News.css";
import { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/news?page=${page}&size=5&sort=eventDate,DESC`,
      )
      .then((res) => {
        setNewsList(res.data.content);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className="news-page">
      {/* Page Header */}
      <section className="news-header">
        <h1>News & Events</h1>
        <p>
          Stay updated with the latest happenings, announcements, and upcoming
          events from BRATI Trust.
        </p>
      </section>

      {/* News Section */}
      <section className="news-list">
        {newsList.map((item) => (
          <div key={item.id} className="news-card">
            <h3>{item.headline}</h3>
            <p className="date">
              {new Date(item.eventDate).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>{item.content}</p>
          </div>
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          PREV
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page + 1 >= totalPages}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default News;
