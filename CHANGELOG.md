# Changelog

## [v1.6.1] - 2025-03-24

### Story Feature Updates

- Added gradient border effect for viewed stories
- Implemented admin story functionality with custom image
- Added color transition for viewed story indicators
- Enhanced story border styling with gradient animations
- Improved story interaction feedback
- Added separate handling for admin and user stories

### Enhanced Story Feature

- Implemented interactive story modal with full-screen view
- Added profile information display in story header
- Integrated verified badge for story profiles
- Added message input and interaction buttons
- Enhanced story navigation with proper indexing
- Improved story UI with proper spacing and layout
- Added close button with semi-transparent background
- Implemented responsive design for story modal
- Enhanced image display with proper aspect ratio
- Added dark mode support for story modal

## [v1.6] - 2025-03-23

### Added

- Comment system functionality
  - Added comment box modal with smooth transitions
  - Implemented comment posting functionality
  - Added real-time comment updates
  - Added comment likes and reply buttons (UI only)

### Enhanced

- Post interaction features
  - Improved double-click like animation
  - Added heart icon animation on double-click
  - Updated like counter functionality
  - Added dark mode support for comment system

### Fixed

- DOM manipulation replaced with React state management
- Improved component structure using useRef for animations
- Fixed post image aspect ratio issues
- Added proper error handling for comment submissions

### UI/UX Improvements

- Added responsive comment modal for mobile views
- Enhanced dark mode compatibility
- Improved comment section scrolling behavior
- Added timestamp indicators for comments

## [1.5.5] - 2025-03-22

### Upload Page Enhancement

- Added dark mode support to Upload component with proper color schemes
- Implemented sticky navigation for better UX.
- Enhanced input field layouts and spacing
- Added proper form validation and data handling
- Integrated with postsData for dynamic post creation
- Improved image upload section UI
- Added success notifications for post creation
- Fixed scrolling issues with proper padding and height
- Enhanced form reset functionality after submission
- Improved responsive design with max-width constraints

## [1.5.4] - 2025-03-21

### Enhancements

- Integrated Unsplash API securely using environment variables (`REACT_APP_UNSPLASH_KEY`).
- Added fallback and error handling for missing Unsplash API keys.
- Improved modal functionality in `ProfileGallery`:
  - Fixed modal visibility toggle using `hidden` and `flex` classes.
  - Prevented modal close on inner content click.
- Updated `galleryImages` dataset with new entries and improved variety.
- Enhanced `Status` component with dark mode support (`dark:bg-[#121212]`).
- Fixed `ImageGrid` component to handle API key errors gracefully.

### Bug Fixes

- Resolved issue where modal in `ProfileGallery` was not showing after clicking an image.
- Fixed missing `Unsplash API key` error in `ImageGrid` by adding proper environment variable checks.
- Addressed React key warning in `galleryImages.map` by using unique `src` as the key.

### Other Changes

- Updated `.gitignore` to exclude `.env` file for security.
- Added instructions for securely storing API keys in `.env` file.

## [1.5.3] - 2025-03-21

### Feed Data Enhancement

- Added 20 new posts with diverse Indian locations and themes
- Improved post descriptions with emojis and hashtags
- Added verified celebrity likes to posts
- Enhanced user avatars with dynamic generation
- Integrated location data for each post
- Added engagement metrics (likes and comments)
- Improved image quality and aspect ratios
- Added user profile pictures with consistent styling

## [1.5.2] - 2025-03-21

### Profile Gallery Modal

- Added modal view for gallery images
- Improved postbox UI with proper spacing and layout
- Added profile info section in modal
- Implemented like, comment and share buttons
- Added verified badge to profile
- Optimized image display with contain mode
- Added hover effects on action buttons
- Improved modal background opacity

## [1.5] - 2025-03-21

### Profile Page Design

- Added dynamic like counter functionality to posts
- Implemented double-click like animation with count update
- Updated post images to match location descriptions
- Added Indian-themed post data with locations and descriptions
- Created separate ProfileBio component with dynamic follower stats
- Implemented 3:4 aspect ratio for gallery grid images
- Added responsive profile layout with max-width 470px
- Implemented profile header with username and menu
- Added profile info section with stats (posts, followers, following)
- Integrated stories section with horizontal scroll
- Added gallery grid with 9 sample images
- Implemented tab navigation for posts/reels view

## [1.4] - 2025-03-20

### Initial Setup of React from Scratch

- Created basic profile page structure
- Added profile picture integration
- Set up basic responsive layout
- Implemented basic styling with Tailwind CSS
- Added SVG icons for navigation elements
