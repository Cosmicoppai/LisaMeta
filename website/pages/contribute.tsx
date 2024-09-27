import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Contributing.module.css'

const Contributing: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Contributing to LiSA</title>
        <meta name="description" content="Guide on how to contribute to the LiSA project" />
      </Head>
      <div className={styles.contributing}>
        <div className={styles.tableOfContents}>
          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#development-setup">Development Setup</a></li>
            <li><a href="#clone-repo">Clone Repo</a></li>
            <li><a href="#backend">Backend</a></li>
            <li><a href="#frontend">Frontend</a></li>
            <li><a href="#build-package">Build Package</a></li>
          </ul>
        </div>
        <div className={styles.content}>
          <h1>LiSA Contributing Guide</h1>

          <section id="contributing">
            <h2>🤝 Contributing</h2>
            <p>Thank you for contributing to LiSA! We appreciate your contributions, whether they are bug reports, feature suggestions, or code improvements.</p>
            <p>Feel free to submit an <a href="https://github.com/Cosmicoppai/LiSA/issues/new">issue</a> or, even better a pull request, and we'll review :)</p>
          </section>

          <section id="development-setup">
            <h2>📖 Development Setup</h2>
            <h3>Prerequisites / Dependencies</h3>
            <ul>
              <li>
                Make sure <a href="https://www.python.org/downloads/release/python-31014">Python 3.10.x</a> ||
                <a href="https://www.python.org/downloads/release/python-3119"> Python 3.11.x</a> &&
                <a href="https://nodejs.org/en/download/package-manager"> Node.js &gt;= 18</a> are installed.
              </li>
              <li>Run all commands in the project root.</li>
              <li>Powershell is recommended for windows.</li>
            </ul>
          </section>

          <section id="clone-repo">
            <h2>Clone Repo</h2>
            <ul>
              <li>If you are a collaborator, clone the repository.
                <pre><code>git clone https://github.com/Cosmicoppai/LiSA.git</code></pre>
              </li>
              <li>If you are an external contributor, <a href="https://github.com/Cosmicoppai/LiSA/fork">fork</a> this repository to your account and then clone it to your local device.</li>
            </ul>
          </section>

          <section id="backend">
            <h2>Backend</h2>
            <ol>
              <li>Create python virtual environment
                <pre><code>{`python -m venv ./venv
# OR
python3.10 -m venv ./venv`}</code></pre>
              </li>
              <li>Activate the virtual environment
                <pre><code>{`# For Windows
./venv/Scripts/activate
# For Linux & macOS
source ./venv/bin/activate`}</code></pre>
              </li>
              <li>Install the dependencies using the <code>requirements.txt</code> file.
                <pre><code>pip install -r ./requirements.txt</code></pre>
              </li>
              <li>Run backend as a separate process (if you are making changes in the backend directory).
                <pre><code>python backend/LiSA.py</code></pre>
              </li>
            </ol>
          </section>

          <section id="frontend">
            <h2>Frontend</h2>
            <ol>
              <li>Create <code>.env</code> & paste the following content
                <pre><code>{`VITE_SERVER_URL=http://localhost:6969
VITE_SOCKET_URL=ws://localhost:9000`}</code></pre>
              </li>
              <li>Install yarn
                <pre><code>npm i -g yarn</code></pre>
              </li>
              <li>Install node modules
                <pre><code>yarn</code></pre>
              </li>
              <li>Start dev app
                <pre><code>yarn start</code></pre>
              </li>
            </ol>
          </section>

          <section id="build-package">
            <h2>Build package</h2>
            <ul>
              <li>Build backend
                <pre><code>yarn build:python</code></pre>
              </li>
              <li>Make distributable packages
                <pre><code>{`yarn make
# For additional debug logs

DEBUG=* yarn make
DEBUG=electron-* yarn make`}</code></pre>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Contributing