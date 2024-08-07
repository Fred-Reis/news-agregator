<div align="center">
  <img alt="News Agregator"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA8eRoFDTR6FnHVjEk_0AjDdw7QgvohOnxQ&s"
  />

</div>

<h2 align="center">
    News Aggregator Web Application
</h2>

<br/>

<p align="center">

  <img alt="language version" src="https://img.shields.io/badge/Node-v_v20.14.0-339933?logo=node.js">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Fred-Reis/news-agregator">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Fred-Reis/news-agregator">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/Fred-Reis/news-agregator">

</p>

<h3 align="center">
  Links:
</h3>

<p align="center">

  <a href="#-about-the-project">
    About the Project
  </a>&nbsp;&nbsp;
  <a href="#-frontend">
    Frontend
  </a>&nbsp;&nbsp;
  <a href="#-features">
    Features
  </a>&nbsp;&nbsp;
  <a href="#-requirements">
    Requirements
  </a>&nbsp;&nbsp;
  <a href="#-demo">
    Demo
  </a>&nbsp;&nbsp;
  <a href="#-running-the-project">
    Running the Project
  </a>&nbsp;&nbsp;
  <a href="#-configuring-docker">
    Configuring Docker
  </a>&nbsp;&nbsp;
  <a href="#-testing">
    Testing
  </a>&nbsp;&nbsp;
  <a href="#-technologies-and-tools">
    Technologies and Tools
  </a>&nbsp;&nbsp;
  <a href="#-roadmap">
    Roadmap
  </a>&nbsp;&nbsp;
  <a href="#author-frederico-reis">
    Author
  </a>

</p>

# 📰 News Aggregator Web Application

Welcome to the News Aggregator Web Application. This project aims to showcase my skills in creating a user interface for a news aggregator website. The application pulls articles from various sources and displays them in a clean, easy-to-read format.

<br/>

## 💡 About the Project

The objective of this project is to develop a frontend application that aggregates news articles from multiple sources. The application will allow users to search for articles, filter results by date, category, and source, and customize their news feed.

**Demo:** [Test Online](https://news-agregator-eosin.vercel.app/)

This application was deployed on at Vercel on the following URL:
<https://news-agregator-eosin.vercel.app//>

<br/>

## 🖥 Frontend

The frontend application includes:

- **Article Search and Filtering:** Users can search for articles by keyword and filter results by date, category, and source.
- **Personalized News Feed:** Users can customize their news feed by selecting preferred sources, categories, and authors.
- **Mobile-Responsive Design:** The website is optimized for viewing on mobile devices.

<br/>

## 🔥 Features

- **Search Articles:** Search for articles based on keywords.
- **Filter Articles:** Filter results by date, category, and source.
- **Custom News Feed:** Users can personalize their news feed by choosing preferred sources, categories, and authors.
- **Responsive Design:** Fully responsive design for optimal viewing on mobile devices.

<br/>

## 📣 Requirements

1. **Article Search and Filtering:** Users should be able to search for articles by keyword and filter the results by date, category, and source.
2. **Personalized News Feed:** Users should be able to customize their news feed by selecting their preferred sources, categories, and authors.
3. **Mobile-Responsive Design:** The application should be optimized for mobile devices.

<br/>

### Data Sources

Choose at least three data sources from the list below:

1. ✅ **NewsAPI:** Access articles from over 70,000 news sources. Supports search and filtering.
2. **OpenNews:** Retrieve articles from various sources, including newspapers and blogs, based on keywords, categories, and sources.
3. **NewsCred:** Access articles from multiple sources and filter by keywords, categories, sources, authors, publications, and topics.
4. **The Guardian:** Access articles from The Guardian newspaper, with support for search and filtering.
5. ✅ **New York Times:** Access articles from The New York Times, supporting search and filtering.
6. **BBC News:** Access articles from BBC News, with search and filtering capabilities.
7. ✅ **NewsAPI.org:** Access articles from numerous sources, with support for keyword-based searches and filtering by categories and sources.

<br/>

## 👀 Demo

<h1 align="center">
  <img width="600px" src="public/demo.gif"/>
</h1>

<br/>

## 🏁 Running the Project

> HEADS UP: Before starting the project, you need to obtain your API keys to access the APIs and run the project.

Add these keys to a file named `.env.local`.

At the root of the project, there is a sample file named `.env.example` that provides the template to follow:

```plaintext
NEXT_PUBLIC_NEWSAPI_AI_KEY=
NEXT_PUBLIC_NYT_API_KEY=
NEXT_PUBLIC_NEWSAPI_ORG_KEY=
```

- **`NEXT_PUBLIC_NEWSAPI_AI_KEY`**: This key is for the NewsAPI.ai API and should be obtained at [NewsAPI.ai Dashboard](https://newsapi.ai/dashboard).
- **`NEXT_PUBLIC_NYT_API_KEY`**: This key is for the New York Times API and should be obtained at [New York Times Developer](https://developer.nytimes.com/apis).
- **`NEXT_PUBLIC_NEWSAPI_ORG_KEY`**: This key is for the NewsAPI.org API and should be obtained at [NewsAPI.org](https://newsapi.org/).

1. **Create a new directory:**

   ```bash
   mkdir <directory-name>
   ```

2. **Navigate to the directory:**

   ```bash
   cd <directory-name>
   ```

3. **Clone the repository:**

   ```bash
   git clone https://github.com/Fred-Reis/news-agregator
   ```

4. **Install dependencies:**

   ```bash
   npm install
   ```

5. **Start the project:**

   ```bash
   npm run dev
   ```

<br/>

## 🐳 Configuring Docker

The project has a `Dockerfile` which contains the configuration for deploying the project in a Docker container. It specifies all the parameters that Docker will use to create our image.

Assuming you already have Docker installed and running and ready to build images, if you don't, I recommend following this [GUIDE](https://docs.docker.com/get-docker/).

<br/>

## 🖼 Creating an Image

Now that Docker is installed, let’s start by creating an image of our project using the `docker build` command.

The following command uses the `-t` flag to allow you to name your image:

**Note:** Make sure you are in the root directory of your project when you run the command, as it uses `.` to specify that the build context is the current directory. Don’t forget the dot!

```bash
docker build -t <my-image-name> .
```

The first build may take a while since Docker will also download the Node.js image.

To see your created image, you can use the following command:

```bash
docker images
```

<br/>

## 📦 Creating a Container

With our image created, let’s create a container using the `docker run` command. We will use several flags to assist:

- `-p` directs the ports. The first port is the one you will use to access the container via your browser (I suggest using port 3000, which is a common port for Docker, but you can choose any port you like). The second port **must** be 3000, as specified in our `Dockerfile`, and it will be the port Docker listens to from your machine.
- `-d` runs the container in the background.
- `--name` allows you to name your container.

```bash
docker run --name <container-name> -p 3000:3000 -d <my-image-name>
```

If everything went well, you can now check your container with the following command:

```bash
docker ps -a
```

To start your container, use:

```bash
docker start <container-id>
```

To see the running containers:

```bash
docker ps
```

If it doesn’t start, check for errors with:

```bash
docker logs <container-id>
```

This will display the logs generated during the execution of your container.

If you’ve followed these steps correctly, everything should be up and running, and you can now access your application directly from your browser. 😱

on: `http://localhost:3000`

<br/>

## 🧪 Testing

Integration (E2E) tests are implemented using [Cypress](https://www.cypress.io/).

To run the tests, execute:

```bash
npx cypress open
```

A Cypress dashboard will open. Choose the E2E option and select your preferred browser. Then select `filter-articles-by-date.cy.ts` or/and `search-articles-by-query.cy.ts` to see the application being tested.

And it was also implemented unit tests using for components and store using [vitest](https://vitest.dev/) and [testing library](https://testing-library.com/)

To run the tests suits, execute the following command:

```bash
npm run test
```

The details of the tests will be displayed in your console.

If you want to view the test coverage, run the following command:

A `coverage` folder will be automatically created in the root of your project. Inside this folder, there will be an `index.html` file. Open this file in your browser to access more detailed information about the tests executed.

```bash
npm run test:coverage
```

<br/>

## 🛠 Technologies and Tools

Technologies and tools used in the project include:

- [**Nestjs 14**](https://nestjs.com/)
- [**Tailwind CSS**](https://tailwindcss.com/)
- [**Zustand**](https://github.com/pmndrs/zustand)
- [**Cypress**](https://www.cypress.io/)
- [**Vitest**](https://vitest.dev/)
- [**ESLint**](https://eslint.org/)

<br/>

## 📍🗺️ Roadmap

Planned features:

- [ ] Internationalization with [i18n](https://www.i18next.com/)
- [ ] Allow users to serach articles in their prefered language
- [ ] Implement CI/CD pipelines using GH Actions
- [ ] Implement login to stores users preferences
- [ ] Implement validations and errors display
- [x] Deploy the application

---

<br/>

<p align="center">
If you’ve made it this far, it means everything went smoothly 🙏🏼, and you should be able to access the news in your browser 😱!!!
<p>

<h4 align="center">
  😃 Enjoy the Project! and ... BE HAPPY!
</h4>

<h4 align="center">
  "Stay hungry stay foolish!"
</h4>

<h3 align="center">
Author: <a alt="Fred-Reis" href="https://github.com/Fred-Reis">Frederico Reis</a>
</h3>

<p align="center">

  <a alt="Frederico Reis" href="https://www.linkedin.com/in/frederico-reis-dev/">
    <img src="https://img.shields.io/badge/LinkedIn-Frederico_Reis-0077B5?logo=linkedin"/></a>
  <a alt="Frederico Reis" href="https://github.com/Fred-Reis ">
  <img src="https://img.shields.io/badge/Fred_Reis-GitHub-000?logo=github"/></a>

</p>

<p align="center">
  Made with ♥️
</p>
