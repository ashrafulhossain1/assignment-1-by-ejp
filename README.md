# Blog Viewer Application

This is a simple Blog Viewer application built with **Next.js**. The application demonstrates routing, server and client components, dynamic routes, authentication, and data fetching.

## Features

- **Home Page**:  
  Displays a list of blog post titles fetched from a mock API. Each title is clickable and links to the detailed page for that specific blog post.

- **Blog Details Page**:  
  Uses dynamic routing (`/blog/[id]`) to display the details of a specific blog post based on the ID from the URL.

- **Protected Profile Page**:  
  A "Profile" page that displays a static message: "Welcome to your profile!". The page is protected using **Kinde Auth**. Only authenticated users can access it. If the user is not authenticated, they are redirected to the login page.

- **Navigation**:  
  The header includes links to "Home" and "Profile".  
  Displays a "Login" button if the user is not authenticated and a "Logout" button if the user is.

- **Styling**:  
  The application is styled with **Tailwind CSS** for a clean and responsive user interface.

## Live Demo

You can view the live version of the application here:  
[Blog Viewer Application](https://assignment-1-by-ejp.vercel.app/)

## Prerequisites

To run this application locally, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
