import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import api from "./api";
import { Button } from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function DummyApiCall() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPosts = (page: number) => {
    setLoading(true);
    api
      .get<Post[]>(`/posts?_start=${page * 10}&_limit=10`)
      .then((response) => {
        if (response.data.length === 0) {
          setHasMore(false);
        } else {
          setPosts((prev) => [...prev, ...response.data]);
        }
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchPosts(0);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Dummy API Data</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>

      {hasMore && !loading && (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleLoadMore}
          sx={{ mt: 2 }}
        >
          Load More
        </Button>
      )}

      {loading && <p>Loading...</p>}
      {/* {!hasMore && <p>No more records.</p>} */}
    </div>
  );
}

export default DummyApiCall;
