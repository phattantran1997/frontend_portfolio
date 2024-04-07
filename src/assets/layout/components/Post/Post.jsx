import React, { useState, useEffect } from 'react';

const Post = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const notionBlocksUrl = 'http://localhost:5146/api/Post';

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch(notionBlocksUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPages(data);
        setLoading(false); // Set loading to false after receiving the response
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchPages();
  }, []);

  return (
    <div className='container pt-20'>
      <h2 className="title_header text-3xl font-bold mb-4">My Notion Blogs</h2>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ol>
          {pages.map((page, index) => (
            <li key={page.requestId} style={{ marginBottom: '10px' }}>
              <div style={{ alignItems: 'center' }}>
                <div >
                  <a href={page.publicUrl}><b>{index + 1}. {page.properties?.title?.title?.[0]?.plainText || 'Untitled'}</b></a>
                  {/* Add any other information/description here */}
                </div>
                {page.cover?.external?.url && (
                  <div style={{paddingTop: '30px'}}>
                    <a href={page.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', width: '100px', height: '100px', overflow: 'hidden' }}>
                      <img src={page.cover.external.url} alt="Cover" style={{ width: '75%', height: '75%' }} />
                    </a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
  
};

export default Post;
