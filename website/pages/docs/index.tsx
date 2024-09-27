import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import styles from '../../styles/ApiDocs.module.css'

const ApiDocs: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>LiSA API Documentation</title>
        <meta name="description" content="API documentation for the LiSA project" />
      </Head>
      <div className={styles.apiDocs}>
        <div className={styles.tableOfContents}>
          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#endpoints">Endpoints</a></li>
          </ul>
        </div>
        <div className={styles.content}>
          <h1>LiSA API Documentation</h1>

          <h2 id="endpoints">Endpoints</h2>

          <h3>1. Home</h3>
          <pre><code>GET /</code></pre>
          <p><strong>Description:</strong> Checks if all servers started successfully.</p>
          <p><strong>Response:</strong> Plain text response indicating server status.</p>

          <h3>2. Search</h3>
          <pre><code>GET /search</code></pre>
          <p><strong>Description:</strong> Searches for anime or manga.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>type</code> (optional): Type of search. Default is &quot;anime&quot;. Can be &quot;anime&quot; or &quot;manga&quot;.</li>
            <li><code>query</code>: Search term.</li>
            <li><code>total_res</code> (optional): Maximum number of results to return. Default is 9 for anime, 20 for manga.</li>
            <li><code>page</code> (optional, for manga): Page number for results. Default is 1.</li>
          </ul>
          <p><strong>Response:</strong> JSON object containing search results.</p>

          <h3>3. Get Episode Details</h3>
          <pre><code>GET /ep_details</code></pre>
          <p><strong>Description:</strong> Retrieves episode details for a specific anime.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>anime_session</code> or <code>anime_id</code>: Anime session or ID.</li>
            <li><code>page</code> (optional): Page number. Default is &quot;1&quot;.</li>
          </ul>
          <p><strong>Response:</strong> JSON object containing episode details.</p>

          <h3>4. Get Manga Detail</h3>
          <pre><code>GET /manga_detail</code></pre>
          <p><strong>Description:</strong> Retrieves details for a specific manga.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>session</code>: Manga session ID.</li>
          </ul>
          <p><strong>Response:</strong> JSON object containing manga details.</p>

          <h3>5. Get Stream Details</h3>
          <pre><code>GET /stream_detail</code></pre>
          <p><strong>Description:</strong> Retrieves streaming details for a specific episode.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>anime_session</code>: Anime session ID.</li>
            <li><code>ep_session</code>: Episode session ID.</li>
          </ul>
          <p><strong>Response:</strong> JSON object containing streaming details.</p>

          <h3>6. Stream</h3>
          <pre><code>POST /stream</code></pre>
          <p><strong>Description:</strong> Initiates streaming for a specific episode.</p>
          <p><strong>Request Body:</strong> JSON object with:</p>
          <ul>
            <li><code>player</code>: Video player name.</li>
            <li><code>manifest_url</code> or <code>id</code>: Manifest URL or video ID.</li>
          </ul>
          <p><strong>Response:</strong> JSON object with status or error message.</p>

          <h3>7. Read Manga</h3>
          <pre><code>GET /read</code></pre>
          <p><strong>Description:</strong> Retrieves manga chapter data for reading.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>chp_session</code> or <code>id</code>: Chapter session or manga ID.</li>
          </ul>
          <p><strong>Response:</strong> JSON array of image URLs.</p>

          <h3>8. Download</h3>
          <pre><code>POST /download</code></pre>
          <p><strong>Description:</strong> Initiates a download for anime or manga.</p>
          <p><strong>Request Body:</strong> JSON object with download details (anime_session, manga_session, manifest_url, etc.)</p>
          <p><strong>Response:</strong> JSON object with download status.</p>

          <h3>9. Download Management</h3>
          <pre><code>POST /download/pause
POST /download/resume
POST /download/cancel</code></pre>
          <p><strong>Description:</strong> Manages ongoing downloads.</p>
          <p><strong>Request Body:</strong> JSON object with:</p>
          <ul>
            <li><code>id</code>: Array of download IDs.</li>
          </ul>
          <p><strong>Response:</strong> JSON object with status message.</p>

          <h3>10. Library</h3>
          <pre><code>GET /library
DELETE /library</code></pre>
          <p><strong>Description:</strong> Retrieves or deletes library items.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>status</code> (optional, for GET): Filter by status. Default is &quot;downloaded&quot;.</li>
            <li><code>id</code> (for DELETE): ID of the item to delete.</li>
          </ul>
          <p><strong>Response:</strong></p>
          <ul>
            <li>GET: JSON object with library data.</li>
            <li>DELETE: No content (204) on success.</li>
          </ul>

          <h3>11. Top Anime/Manga</h3>
          <pre><code>GET /top</code></pre>
          <p><strong>Description:</strong> Retrieves top anime or manga.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>type</code>: &quot;anime&quot; or &quot;manga&quot;.</li>
            <li><code>c</code>: Category (e.g., &quot;airing&quot;, &quot;upcoming&quot;, &quot;tv&quot;, &quot;movie&quot;, etc. for anime; &quot;manga&quot;, &quot;novels&quot;, &quot;oneshots&quot;, etc. for manga).</li>
            <li><code>limit</code> (optional): Number of results to return.</li>
          </ul>
          <p><strong>Response:</strong> JSON object with top anime/manga data.</p>

          <h3>12. Get Master Manifest</h3>
          <pre><code>GET /master_manifest</code></pre>
          <p><strong>Description:</strong> Retrieves the master manifest for streaming.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>kwik_url</code>: Comma-separated list of Kwik URLs.</li>
          </ul>
          <p><strong>Response:</strong> M3U8 file content.</p>

          <h3>13. Get Manifest</h3>
          <pre><code>GET /manifest</code></pre>
          <p><strong>Description:</strong> Retrieves the manifest for a specific stream.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>kwik_url</code>: Kwik URL for the stream.</li>
          </ul>
          <p><strong>Response:</strong> M3U8 file content.</p>

          <h3>14. Proxy</h3>
          <pre><code>GET /proxy</code></pre>
          <p><strong>Description:</strong> Proxies requests for manifest files, encryption keys, and video frames.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>url</code>: The actual URL to proxy.</li>
          </ul>
          <p><strong>Response:</strong> Proxied content with appropriate headers.</p>

          <h3>15. Get Recommendation</h3>
          <pre><code>GET /recommendation</code></pre>
          <p><strong>Description:</strong> Retrieves recommendations for anime or manga.</p>
          <p><strong>Query Parameters:</strong></p>
          <ul>
            <li><code>type</code>: &quot;anime&quot; or &quot;manga&quot;.</li>
            <li><code>anime_session</code> or <code>manga_session</code>: Session ID of the anime or manga.</li>
          </ul>
          <p><strong>Response:</strong> JSON object with recommendations.</p>

          <h3>16. Watchlist/Readlist</h3>
          <pre><code>GET /watchlist
POST /watchlist
DELETE /watchlist

GET /readlist
POST /readlist
DELETE /readlist</code></pre>
          <p><strong>Description:</strong> Manages watchlist for anime and readlist for manga.</p>
          <p><strong>Query Parameters (for DELETE):</strong></p>
          <ul>
            <li><code>anime_id</code> or <code>manga_id</code>: ID of the item to remove.</li>
          </ul>
          <p><strong>Request Body (for POST):</strong> JSON object with anime/manga details.</p>
          <p><strong>Response:</strong></p>
          <ul>
            <li>GET: JSON object with watchlist/readlist data.</li>
            <li>POST: JSON object confirming addition.</li>
            <li>DELETE: No content (204) on success.</li>
          </ul>

          </div>
      </div>
    </Layout>
  )
}

export default ApiDocs