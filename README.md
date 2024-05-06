# AMAKA Studio Gig Page Documentation
A simple NextJS implementation of AMAKA Studio gig page.

### Live: 
https://amaka-studio.vercel.app

### Project structure

### Dependencies
- `Next.js`
- `Tailwind CSS`
- `React Icons`
- `React Spinners`
- `React Toastify`

### Components
1. **`Layout`**: Wrapper component providing a consistent layout across pages.
2. **`/gigs/component/SingleGig`**: Component to display each give overview.
3. **`/gigs/component/GigDetail`s**: Component to display details of the selected gig.
4. **`Sidebar`**: Component for the sidebar with links to different pages.
5. **`Header`**: Component for the header with logo, theme toggle, search and the profile icon..
6. **`Footer`**: Component for the footer elements.
7. **`Skills`**: Component for holding the skills items.
8. **`DropdownUser`**: Component for the user icon on the header and the dropdown.
9. **`DarkModeSwitcher`**: Component for handling the theme switch functionality.
10. **`FeedOne`**, **`FeedTwo`**, **`FeedThree`**: Components for holding the static feed info respectively.
11. **`HowAmakaWorks`**: Component to hold the header text next to the logo.
12. **`Loader`**: Component to hold the loading UI.
13. **`/gigs/component/GigHistory`**: Component to hold the static gig history elements.
14. **`/gigs/component/CreateGig`**: Hold the create button on the header.
15. **`/gigs/component/Feed`**: Hold the static feeds elements.
16. **`/gigs/component/GigFilters`**: Hold the filters UI on the gigs page.


### Pages
1. **`page.tsx`**: Default Home page for the application.
2. **`profile/page.tsx`**: Profile page.
3. **`events/page.tsx`**: Events page.
4. **`settings/page.ts`x**: Settings page.
5. **`messages/page.ts`x**: Messages page.
6. **`home/page.tsx`**: Home page.
7. **`notifications/page.tsx`**: Notifications page.
8. **`challenges/page.tsx`**: Challenges page.
9. **`bookmarked/page.tsx`**: Bookmarked page for all the bookmarks.
10. **`gigs/page.tsx`**: Gigs page.
11. **`gigs/error.tsx`**: default Error page.
12. **`gigs/loading.tsx`**: loading page.

### Static Data
- **`gigs.ts`**: Array containing gig data.
- **`feed.ts`**: Array storing gigs feeds.
- **`gigHistory.ts`**: Array storing gig history data.
- **`sidebar.ts`**: Array storing sidebar data.
- **`skills.t`s**: Array storing skills data.

### Functionality
1. **Gigs Page**: Displays a list of gigs on the left and details of the selected gig on the right. Clicking on a gig changes the background to indicate selection.
2. **Delete Gig**: Allows users to delete gigs from the list.
3. **Bookmark Gig**: Users can bookmark gigs for future reference.
4. **Sidebar Navigation**: Links in the sidebar navigate to different pages.
5. **Dark Mode Toggle**: Toggles between dark and light themes for better user experience.

### Deployment
The project is deployed using Vercel for easy and efficient deployment and hosting.

### Conclusion
This Next.js project provides a user-friendly gigs page with various functionalities such as gig listing, deletion, bookmarking, and dark mode toggle. It uses static data, and Tailwind CSS for styling, ensuring a smooth user experience.

### Run Locally

Clone the project

```bash
  git clone git@github.com:Trend20/AMAKA-Studio.git
```

Go to the project directory

```bash
  cd AMAKA-Studio
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

### Tech Stack

**Client:** NextJS 14, Typescript, TailwindCSS



# Exercise Two:  
## UI and UX feedback on AMAKA platform.

### Consistent design
Feedback: There is no consistency in the design of AMAKA platform.

Suggestion: AMAKA platform should embrace consistency in terms of ensuring that various design elements like the fonts and the general typography stays consistent 
throughout the platform. This can help improve the user experience. 
<p>
  <img src="/public/images/homepage.png" alt="openget-logo" width="420px" height="200px"/>
</p>

### Visual hierarchy
Feedback: The content on the page is not organized in a hierachical manner to guide the user.

Suggestion: Use visual cues such as size, color, and placement to prioritize content and guide users' attention to the most important elements on the platform, 
such as calls to action or trending topics.

### Accessibility
Feedback: There is poor accessibility and it does not consider people with disability.

Suggestion: The platform should ensure that it supports a wide range of users including those with disabilities. We can use the dark mode toggle to enable users to switch between different themes.
We can also use internalization to ensure that the platform can be viewed in different languages.

### Clear Navigation
Feedback: There is no clear navigation which can allow the user to access different topics. The tabs are not well structured for easy navigation.

Suggestion: There should be an easy navigation set up for users to easily access different parts of the applications. For example that tabs used to switch between different topics can be made more visible to prevent the user from being confused 
on how to access what they want. We can increase the with ong the tabs to make them all visible of just create a dropdown select and prompt users to select the topic they are interested in.

### Homepage
<p>
  <img src="/public/images/homepage.png" alt="homepage" width="420px" height="200px"/>
</p>
Feedback: The homepage layout feels cluttered with too much information.

Suggestions: Simplify the design by reducing the number of elements on the homepage.

### Profile Page
<p>
  <img src="/public/images/profile.png" alt="openget-logo" width="420px" height="200px"/>
</p>
Feedback: Profile page design lacks personalization.

Suggestions: Incorporate design elements that reflect users' personalities and preferences.

### Feedback Mechanisms
Feedback: Lack of feedback mechanisms makes it difficult for users to provide input or report issues.

Suggestions: Implement feedback a dedicated feedback section where users can share their thoughts, report bugs, and suggest improvements.

### Loading Times
Feedback: Loading times are slow, leading to frustration among users.

Suggestions: Optimize the platform for speed and performance to minimize loading times. Compress images, reduce server requests, and leverage caching techniques to improve page load times.
