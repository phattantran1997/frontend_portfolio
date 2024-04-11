# My Portfolio Website

## Purpose
This React application serves as a personal portfolio website, showcasing my skills, projects, experiences, and interests. It provides a comprehensive platform for potential employers, clients, and collaborators to learn more about me and my work.

## Contributing
Contributions to the development of this application are welcome. If you find any issues or have suggestions for improvements, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b my-new-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Features
- **Homepage**: Displays a short description of my experiments, skills, and hobbies.
- **Projects Tab**: Shows all outstanding GitHub projects and integrates a search function by project name or programming language using the GitHub APIs.
- **About Tab**:
  - Incorporates a Maps API to showcase all my travel destinations.
  - Fetches and displays my Instagram posts using the Instagram API.
- **Blogs Tab**: Retrieves and showcases my blogs using the Notion API.
- **About Tab**: Includes a contact form that allows visitors to send queries directly to my email.

## Dependencies
This project relies on the following dependencies:

- React
- React Router
- Axios (for API requests)
- GitHub API (for fetching GitHub projects)
- Google Maps API (for displaying travel destinations)
- Instagram API (for fetching Instagram posts)
- Notion API (for fetching blog posts)
- Other dependencies for styling, form handling, etc.

To install the dependencies, navigate to the project directory and run:

```bash
npm install
```

## Architecture
The application follows a client-server architecture, with the React frontend communicating with a backend API. The backend API acts as a proxy to map external APIs with the frontend.

The backend API is implemented using ASP.NET Core and is hosted separately. Follow these steps to set up the backend:

1. Clone the backend API repository: `git clone https://github.com/phattantran1997/backend_portfolio.git`
2. Navigate to the project directory: `cd backend_portfolio`
3. Open the `appsettings.Development.json` file and edit the connection string and Notion API key accordingly.
4. Build and run the backend API using your preferred method (e.g., Visual Studio, `dotnet run`, etc.).

Once the backend API is running, you can start the React development server by running `npm run dev` in the project directory. The application will be accessible at [http://localhost:5173/](http://localhost:5173/).

## Reporting Issues
If you encounter any issues or bugs with the application, please report them by creating a new issue in the GitHub repository. Provide detailed information about the issue, including steps to reproduce it, if possible. Screenshots or error messages are also helpful.
```
This consolidated README includes the architecture and reporting issues sections as per your request.
