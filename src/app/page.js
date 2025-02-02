'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingSpinner from '@/components/Shared/LoadingSpinner/LoadingSpinner';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const POSTS_PER_PAGE = 12;
  const TOTAL_POSTS = 100;
  const TOTAL_PAGES = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`
      );

      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        console.error('Failed to fetch posts');
      }
      setLoading(false);
    };

    fetchPosts();
  }, [page]);


  const getPaginationRange = () => {
    const range = [];
    const maxButtons = 5;
    const halfRange = Math.floor(maxButtons / 2);

    let start = Math.max(1, page - halfRange);
    let end = Math.min(TOTAL_PAGES, start + maxButtons - 1);

    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  };

  const paginationRange = getPaginationRange();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Students Blog Post</h1>

      {loading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="font-semibold text-xl">{post.title}</h2>
              <p className="mt-2 text-sm">{post.body.slice(0, 100)}...</p>
              <Link href={`/blog/${post.id}`} className="mt-4 text-blue-600 hover:underline inline-block">
                View More
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center items-center mt-8 space-x-2">
        {/* Previous Button */}
        <button
          className="px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-l disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex flex-wrap justify-center items-center space-x-1">
          {paginationRange.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`px-3 py-2 text-sm ${pageNumber === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
                } rounded`}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

          {/* Ellipsis */}
          {paginationRange[paginationRange.length - 1] < TOTAL_PAGES && (
            <span className="px-3 py-2 text-sm">...</span>
          )}
        </div>

        {/* Next Button */}
        <button
          className="mt-6 sm:mt-0 px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-r disabled:opacity-50"
          onClick={() => setPage((prev) => Math.min(prev + 1, TOTAL_PAGES))}
          disabled={page === TOTAL_PAGES}
        >
          Next
        </button>
      </div>


      {/* Total Pages Info */}
      <div className="text-center mt-4 text-gray-600">
        Page {page} of {TOTAL_PAGES}
      </div>
    </div>
  );
}
